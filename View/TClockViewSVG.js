class TClockViewSVG {
    constructor() {
        this._ClockModel = null;
        this._ClockDomElem = null;
        this._clockFace = null;
        this._clockSVG = null;

        this._clockInfo = null;
    }

    Init (Model,Elem) {
        this._ClockModel = Model;
        this._ClockDomElem = Elem;

        let info = this._ClockModel.GetClockInfo();

        this._clockFace = this._ClockDomElem.querySelector('.clock-face');
        this._clockSVG = this._ClockDomElem.getElementsByTagName('svg')[0];
        this._clockInfo = this._ClockDomElem.querySelector('.info');
        
        if (info.GMT === 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';

        this.drawNumbers();
    };

    Update () {
        let now = this._ClockModel.GetCurrentTime();

        let angles = this.GetArrowsAngel();

        this._ClockDomElem.querySelector('.clockSVG-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
        this._ClockDomElem.querySelector('.clockSVG-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
        this._ClockDomElem.querySelector('.clockSVG-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

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
        const clockFaceCircle = this._clockFace.getElementsByTagName('circle')[0];
        const clockFaceRadius = +clockFaceCircle.getAttribute('r');


        const scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        const scaleRadiusFactor = 0.8; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        const scaleTextOffsetFactor = 0.3; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами

        const clockNumRadius = Math.round(clockFaceRadius * scaleFactor);
        const clockNumR = Math.round(clockFaceRadius * scaleRadiusFactor);
        const textOffset = Math.round(clockNumRadius * scaleTextOffsetFactor);
        const angelBetweenNum = 30;

        const clockFaceCenterX = +clockFaceCircle.getAttribute('r');
        const clockFaceCenterY = +clockFaceCircle.getAttribute('r');

        for (let i = 1; i <= 12; i++) {
            const clockNumber = document.createElementNS('http://www.w3.org/2000/svg','circle');
            clockNumber.classList.add('clock-numbers');
            clockNumber.setAttribute('r', clockNumRadius);

            clockNumber.setAttribute('cx', Math.round(clockFaceCenterX +
                clockNumR * Math.sin(30 * i / 180 * Math.PI)) );
            clockNumber.setAttribute('cy', Math.round(clockFaceCenterY -
                clockNumR * Math.cos(30 * i / 180 * Math.PI)) );
            this._clockFace.insertBefore(clockNumber, this._clockFace.querySelector('.clockSVG-arrow-hour'));

            const clockNumberText = document.createElementNS('http://www.w3.org/2000/svg','text');
            clockNumberText.classList.add('clock-numbers-text');
            clockNumberText.innerHTML = i;

            clockNumberText.setAttribute('x', Math.round(clockFaceCenterX +
                clockNumR * Math.sin(angelBetweenNum * (i) / 180 * Math.PI)) );
            clockNumberText.setAttribute('y', Math.round(clockFaceCenterY -
                    clockNumR * Math.cos(angelBetweenNum * (i) / 180 * Math.PI)) + textOffset );

            this._clockFace.appendChild(clockNumberText);
        }

    }
}

