class TClockViewCanvas {
    constructor() {
        this._ClockModel = null;
        this._ClockDomElem = null;
        this._Canvas = null;
        this._Context = null;

        this._clockInfo = null;

        this._clockFaceRadius = 250;
        this._clockFaceCenterX = 250;
        this._clockFaceCenterY = 250;
    }


    Init (Model,Elem) {
        this._ClockModel = Model;
        this._ClockDomElem = Elem;
        let info = this._ClockModel.GetClockInfo();

        this._Canvas = Elem.querySelector('.canvas');
        this._Context = this._Canvas.getContext('2d');
        this._clockInfo = this._ClockDomElem.querySelector('.info');

        if (info.GMT === 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';
    };

    Update () {
        this.render();
    };

    drawClockFace() {
        this._Context.restore();
        this._Context.strokeStyle='#e1bc19';
        this._Context.fillStyle='#e1bc19';
        this._Context.beginPath();
        this._Context.arc(this._clockFaceCenterX, this._clockFaceCenterY, this._clockFaceRadius, 0,Math.PI*2, false);
        this._Context.stroke();
        this._Context.fill();
    }

    drawNumbers() {
        const scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        const scaleRadiusFactor = 0.8; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        const scaleTextSizeFactor = 1.0; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами
        const scaleTextOffsetFactor = 0.35; //Маштабный коэффициент для определения отступа цифр по вертикали

        const clockNumRadius = Math.round(this._clockFaceRadius * scaleFactor);
        const clockNumR = Math.round(this._clockFaceRadius * scaleRadiusFactor);
        const textOffset = Math.round(clockNumRadius * scaleTextOffsetFactor);
        const angelBetweenNum = 30;

        for (let i = 1; i <= 12; i++) {
            this._Context.strokeStyle='#469826';
            this._Context.fillStyle='#469826';
            this._Context.beginPath();
            this._Context.arc(Math.round(this._clockFaceCenterX + clockNumR * Math.sin(30 * i / 180 * Math.PI)),
                Math.round(this._clockFaceCenterY - clockNumR * Math.cos(30 * i / 180 * Math.PI)),
                clockNumRadius, 0, Math.PI*2, false);
            this._Context.stroke();
            this._Context.fill();

            this._Context.fillStyle='black';
            this._Context.textAlign='center';
            this._Context.font = clockNumRadius * scaleTextSizeFactor + 'px Times New Roman';
            this._Context.fillText(i, Math.round(this._clockFaceCenterX + clockNumR * Math.sin(angelBetweenNum * (i) / 180 * Math.PI)),
                Math.round(this._clockFaceCenterY - clockNumR * Math.cos(angelBetweenNum * (i) / 180 * Math.PI)) + textOffset);

        }
    }

    drawElectronic() {
        let now = this._ClockModel.GetCurrentTime();
        const OffsetYScaleFactor = 0.77; //Отступ текста по вертикали
        let hour = now.hours;
        if (hour < 10 ) hour = '0' + hour;

        let min = now.minutes;
        if (min < 10 ) min = '0' + min;

        let sec = now.seconds;
        if (sec < 10 ) sec = '0' + sec;

        this._Context.textAlign='center';
        this._Context.font = '40px Times New Roman';
        this._Context.fillStyle='#000';

        this._Context.fillText(hour + ':' + min + ':' + sec, this._clockFaceCenterX, this._clockFaceCenterY * OffsetYScaleFactor);
        this._Context.save();
    }

    drawArrows() {
        let angles = this.GetArrowsAngel();
        const hourArrowLenght = 180;
        const minArrowLenght = 200;
        const secArrowLenght = 230;
        const arrowTail = 20;

        this._Context.lineCap='round';g

        this._Context.lineWidth = 9.5;
        this._Context.strokeStyle='#000';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.hour),
            this._clockFaceCenterY + arrowTail * Math.cos(angles.hour));
        this._Context.lineTo( this._clockFaceCenterX + (hourArrowLenght-arrowTail) * Math.sin(angles.hour),
            this._clockFaceCenterY - (hourArrowLenght-arrowTail) * Math.cos(angles.hour) );
        this._Context.stroke();

        this._Context.lineWidth = 6.5;
        this._Context.strokeStyle='#761010';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.min),
            this._clockFaceCenterY + arrowTail * Math.cos(angles.min));
        this._Context.lineTo( this._clockFaceCenterX + (minArrowLenght-arrowTail) * Math.sin(angles.min),
            this._clockFaceCenterY - (minArrowLenght-arrowTail) * Math.cos(angles.min) );
        this._Context.stroke();

        this._Context.lineWidth = 4.5;
        this._Context.strokeStyle='#d00a0a';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.sec),
            this._clockFaceCenterY + arrowTail * Math.cos(angles.sec));
        this._Context.lineTo( this._clockFaceCenterX + (secArrowLenght-arrowTail) * Math.sin(angles.sec),
            this._clockFaceCenterY - (secArrowLenght-arrowTail) * Math.cos(angles.sec) );
        this._Context.stroke();
    }

    render() {
        this._Context.clearRect(0,0,500,500);
        this.drawClockFace();
        this.drawNumbers();
        this.drawElectronic();
        this.drawArrows();
    }

    GetArrowsAngel() {
        let angles = {};
        let now = this._ClockModel.GetCurrentTime();

        let secInMinute = 60;
        let minInHour = 60;

        let hour = now.hours;

        angles['sec'] = now.seconds * 2 * Math.PI / secInMinute;

        angles['min'] = now.minutes * 2 * Math.PI / minInHour;

        if (hour >= 12) hour -= 12;
        angles['hour'] = hour * 2 * Math.PI / 12 + ( 2 * Math.PI / 12 * now.minutes / secInMinute);

        return angles;
    }
}

export default TClockViewCanvas

