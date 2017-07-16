class TClockViewDOM {
    constructor() {
        this._ClockModel = null;
        this._ClockDomElem = null;
        this._clockFace = null;

        this._clockInfo = null;
    }

    Init(Model,Elem) {

        this._ClockModel = Model;
        this._ClockDomElem = Elem;

        let info = this._ClockModel.GetClockInfo();

        this._clockFace = this._ClockDomElem.querySelector('.clock-face');
        this._clockInfo = this._ClockDomElem.querySelector('.info');

        if (info.GMT === 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';

        this.drawNumbers();
    };

    Update () {
        let now = this._ClockModel.GetCurrentTime();

        let angles = this.GetArrowsAngel();

        this._ClockDomElem.querySelector('.clock-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
        this._ClockDomElem.querySelector('.clock-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
        this._ClockDomElem.querySelector('.clock-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

        let sec = now.seconds;
        if (sec < 10 ) sec = '0' + sec;
        this._ClockDomElem.querySelector('.clock-electronic .sec').innerHTML = sec;

        let min = now.minutes;
        if (min < 10 ) min = '0' + min;
        this._ClockDomElem.querySelector('.clock-electronic .min').innerHTML = min;

        let hour = now.hours;
        if (hour < 10 ) hour = '0' + hour;
        this._ClockDomElem.querySelector('.clock-electronic .hour').innerHTML = hour;
    };

    GetArrowsAngel() {
        let angles = {};
        let now = this._ClockModel.GetCurrentTime();

        const secInMinute = 60;
        const minInHour = 60;

        let hour = now.hours;

        angles['sec'] = now.seconds * 2 * Math.PI / secInMinute;

        angles['min'] = now.minutes * 2 * Math.PI / minInHour;

        if (hour >= 12) hour -= 12;
        angles['hour'] = hour * 2 * Math.PI / 12 + ( 2 * Math.PI / 12 * now.minutes / secInMinute);

        return angles;
    }

    drawNumbers() {
        const clockFaceHeight = this._clockFace.offsetHeight;
        const clockFaceWidth = this._clockFace.offsetWidth;

        const scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        const scaleRadiusFactor = 0.4; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        const scaleTextSizeFactor = 0.5; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами

        const clockNumHeight = Math.round(clockFaceHeight * scaleFactor);
        const clockNumWidth = Math.round(clockFaceWidth * scaleFactor);
        const clockNumRadius = Math.round(clockFaceHeight * scaleRadiusFactor);
        const angelBetweenNum = 30;


        this._clockFace.style.width = clockFaceWidth + 'px';
        this._clockFace.style.height = clockFaceHeight + 'px';

        const clockFaceCenterX = this._clockFace.offsetLeft + this._clockFace.offsetWidth / 2;
        const clockFaceCenterY = this._clockFace.offsetTop + this._clockFace.offsetHeight / 2;

        for (let i = 1; i <= 12; i++) {
            const clockNumber = document.createElement('span');

            clockNumber.classList.add('clock-numbers');
            clockNumber.style.width = clockNumWidth + 'px';
            clockNumber.style.height = clockNumHeight + 'px';
            clockNumber.style.lineHeight = clockNumHeight + 'px';
            clockNumber.style.fontSize = clockNumHeight * scaleTextSizeFactor + 'px';

            clockNumber.innerHTML = i;


            clockNumber.style.left = Math.round(clockFaceCenterX - clockNumWidth / 2 +
                    clockNumRadius * Math.sin(angelBetweenNum * i / 180 * Math.PI)) + 'px';
            clockNumber.style.top = Math.round(clockFaceCenterY - clockNumHeight / 2 -
                    clockNumRadius * Math.cos(angelBetweenNum * i / 180 * Math.PI)) + 'px';

            this._ClockDomElem.appendChild(clockNumber);
        }

    }
}