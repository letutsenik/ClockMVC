'use strict';
function TClockViewCanvas () {
    var ClockModel = null;
    var ClockDomElem = null;
    var Canvas = null;
    var Context = null;

    var clockInfo = null;

    var clockFaceRadius = 250;
    var clockFaceCenterX = 250;
    var clockFaceCenterY = 250;

    this.Init = function(Model,Elem) {
        ClockModel = Model;
        ClockDomElem = Elem;
        var info = ClockModel.GetClockInfo();

        Canvas = Elem.querySelector('.canvas');
        Context = Canvas.getContext('2d');
        clockInfo = ClockDomElem.querySelector('.info');

        if (info.GMT === 0)clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';
    };

    this.Update = function () {
        render();
    };

    function drawClockFace() {
        Context.restore();
        Context.strokeStyle='#e1bc19';
        Context.fillStyle='#e1bc19';
        Context.beginPath();
        Context.arc(clockFaceCenterX, clockFaceCenterY, clockFaceRadius, 0,Math.PI*2, false);
        Context.stroke();
        Context.fill();
    }

    function drawNumbers() {
        var scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        var scaleRadiusFactor = 0.8; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        var scaleTextSizeFactor = 1.0; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами
        var scaleTextOffsetFactor = 0.35; //Маштабный коэффициент для определения отступа цифр по вертикали

        var clockNumRadius = Math.round(clockFaceRadius * scaleFactor);
        var clockNumR = Math.round(clockFaceRadius * scaleRadiusFactor);
        var textOffset = Math.round(clockNumRadius * scaleTextOffsetFactor);
        var angelBetweenNum = 30;

        for (var i = 1; i <= 12; i++) {
            Context.strokeStyle='#469826';
            Context.fillStyle='#469826';
            Context.beginPath();
            Context.arc(Math.round(clockFaceCenterX + clockNumR * Math.sin(30 * i / 180 * Math.PI)),
                Math.round(clockFaceCenterY - clockNumR * Math.cos(30 * i / 180 * Math.PI)),
                clockNumRadius, 0, Math.PI*2, false);
            Context.stroke();
            Context.fill();

            Context.fillStyle='black';
            Context.textAlign='center';
            Context.font = clockNumRadius * scaleTextSizeFactor + 'px Times New Roman';
            Context.fillText(i, Math.round(clockFaceCenterX + clockNumR * Math.sin(angelBetweenNum * (i) / 180 * Math.PI)),
                Math.round(clockFaceCenterY - clockNumR * Math.cos(angelBetweenNum * (i) / 180 * Math.PI)) + textOffset);

        }
    }

    function drawElectronic() {
        var now = ClockModel.GetCurrentTime();
        var OffsetYScaleFactor = 0.77; //Отступ текста по вертикали
        var hour = now.hours;
        if (hour < 10 ) hour = '0' + hour;

        var min = now.minutes;
        if (min < 10 ) min = '0' + min;

        var sec = now.seconds;
        if (sec < 10 ) sec = '0' + sec;

        Context.textAlign='center';
        Context.font = '40px Times New Roman';
        Context.fillStyle='#000';

        Context.fillText(hour + ':' + min + ':' + sec, clockFaceCenterX, clockFaceCenterY * OffsetYScaleFactor);
        Context.save();
    }

    function drawArrows() {
        var angles = GetArrowsAngel();
        var hourArrowLenght = 180;
        var minArrowLenght = 200;
        var secArrowLenght = 230;
        var arrowTail = 20;

        Context.lineCap='round';

        Context.lineWidth = 9.5;
        Context.strokeStyle='#000';
        Context.beginPath();
        Context.moveTo(clockFaceCenterX - arrowTail * Math.sin(angles.hour),
            clockFaceCenterY + arrowTail * Math.cos(angles.hour));
        Context.lineTo( clockFaceCenterX + (hourArrowLenght-arrowTail) * Math.sin(angles.hour),
            clockFaceCenterY - (hourArrowLenght-arrowTail) * Math.cos(angles.hour) );
        Context.stroke();

        Context.lineWidth = 6.5;
        Context.strokeStyle='#761010';
        Context.beginPath();
        Context.moveTo(clockFaceCenterX - arrowTail * Math.sin(angles.min),
            clockFaceCenterY + arrowTail * Math.cos(angles.min));
        Context.lineTo( clockFaceCenterX + (minArrowLenght-arrowTail) * Math.sin(angles.min),
            clockFaceCenterY - (minArrowLenght-arrowTail) * Math.cos(angles.min) );
        Context.stroke();

        Context.lineWidth = 4.5;
        Context.strokeStyle='#d00a0a';
        Context.beginPath();
        Context.moveTo(clockFaceCenterX - arrowTail * Math.sin(angles.sec),
            clockFaceCenterY + arrowTail * Math.cos(angles.sec));
        Context.lineTo( clockFaceCenterX + (secArrowLenght-arrowTail) * Math.sin(angles.sec),
            clockFaceCenterY - (secArrowLenght-arrowTail) * Math.cos(angles.sec) );
        Context.stroke();
    }

    function render() {
        Context.clearRect(0,0,500,500);
        drawClockFace();
        drawNumbers();
        drawElectronic();
        drawArrows();
    }

    function GetArrowsAngel() {
        var angles = {};
        var now = ClockModel.GetCurrentTime();

        var secInMinute = 60;
        var minInHour = 60;

        var hour = now.hours;

        angles['sec'] = now.seconds * 2 * Math.PI / secInMinute;

        angles['min'] = now.minutes * 2 * Math.PI / minInHour;

        if (hour >= 12) hour -= 12;
        angles['hour'] = hour * 2 * Math.PI / 12 + ( 2 * Math.PI / 12 * now.minutes / secInMinute);

        return angles;
    }



}

