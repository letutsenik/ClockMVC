'use strict';
function TClockViewSVG () {
    var ClockModel = null;
    var ClockDomElem = null; 
    var clockFace = null;
    var clockSVG = null;

    var clockInfo = null;

    this.Init = function(Model,Elem) {
        ClockModel = Model;
        ClockDomElem = Elem;

        var info = ClockModel.GetClockInfo();

        clockFace = ClockDomElem.querySelector('.clock-face');
        clockSVG = ClockDomElem.getElementsByTagName('svg')[0];
        clockInfo = ClockDomElem.querySelector('.info');
        
        if (info.GMT === 0)clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';

        drawNumbers();
    };

    this.Update = function () {
        var now = ClockModel.GetCurrentTime();

        var angles = GetArrowsAngel();

        ClockDomElem.querySelector('.clockSVG-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
        ClockDomElem.querySelector('.clockSVG-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
        ClockDomElem.querySelector('.clockSVG-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

        var sec = now.seconds;
        if (sec < 10 ) sec = '0' + sec;
        ClockDomElem.querySelector('.clock-electronic .sec').innerHTML = sec;

        var min = now.minutes;
        if (min < 10 ) min = '0' + min;
        ClockDomElem.querySelector('.clock-electronic .min').innerHTML = min;

        var hour = now.hours;
        if (hour < 10 ) hour = '0' + hour;
        ClockDomElem.querySelector('.clock-electronic .hour').innerHTML = hour;
    };

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


    function drawNumbers() {
        var clockFaceCircle = clockFace.getElementsByTagName('circle')[0];
        var clockFaceRadius = +clockFaceCircle.getAttribute('r');


        var scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        var scaleRadiusFactor = 0.8; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        var scaleTextOffsetFactor = 0.3; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами

        var clockNumRadius = Math.round(clockFaceRadius * scaleFactor);
        var clockNumR = Math.round(clockFaceRadius * scaleRadiusFactor);
        var textOffset = Math.round(clockNumRadius * scaleTextOffsetFactor);
        var angelBetweenNum = 30;

        var clockFaceCenterX = +clockFaceCircle.getAttribute('r');
        var clockFaceCenterY = +clockFaceCircle.getAttribute('r');

        for (var i = 1; i <= 12; i++) {
            var clockNumber = document.createElementNS('http://www.w3.org/2000/svg','circle');
            clockNumber.classList.add('clock-numbers');
            clockNumber.setAttribute('r', clockNumRadius);

            clockNumber.setAttribute('cx', Math.round(clockFaceCenterX +
                clockNumR * Math.sin(30 * i / 180 * Math.PI)) );
            clockNumber.setAttribute('cy', Math.round(clockFaceCenterY -
                clockNumR * Math.cos(30 * i / 180 * Math.PI)) );
            clockFace.insertBefore(clockNumber, clockFace.querySelector('.clockSVG-arrow-hour'));

            var clockNumberText = document.createElementNS('http://www.w3.org/2000/svg','text');
            clockNumberText.classList.add('clock-numbers-text');
            clockNumberText.innerHTML = i;

            clockNumberText.setAttribute('x', Math.round(clockFaceCenterX +
                clockNumR * Math.sin(angelBetweenNum * (i) / 180 * Math.PI)) );
            clockNumberText.setAttribute('y', Math.round(clockFaceCenterY -
                    clockNumR * Math.cos(angelBetweenNum * (i) / 180 * Math.PI)) + textOffset );

            clockFace.appendChild(clockNumberText);
        }

    }
}
