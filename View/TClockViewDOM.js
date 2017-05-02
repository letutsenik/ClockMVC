'use strict';
function TClockViewDOM (options) {
    var ClockModel = null;
    var ClockDomElem = null; 
    var clockFace = null;

    var clockInfo = null;

    this.Init = function(Model,Elem) {

        ClockModel = Model;
        ClockDomElem = Elem;

        var info = ClockModel.GetClockInfo();

        clockFace = ClockDomElem.querySelector('.clock-face');
        clockInfo = ClockDomElem.querySelector('.info');

        if (info.GMT === 0)clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0)clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';
        
        drawNumbers();
    };

    this.Update = function () {
        var now = ClockModel.GetCurrentTime();

        var angles = GetArrowsAngel();

        ClockDomElem.querySelector('.clock-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
        ClockDomElem.querySelector('.clock-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
        ClockDomElem.querySelector('.clock-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

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
        var clockFaceHeight = clockFace.offsetHeight;
        var clockFaceWidth = clockFace.offsetWidth;

        var scaleFactor = 0.125; // Маштабный коэффициент для определения размеров кругов с цифрами
        var scaleRadiusFactor = 0.4; // Маштабный коэффициент для определения радиуса расположения кругов с цифрами
        var scaleTextSizeFactor = 0.5; // Маштабный коэффициент для определения размера шрифта в кругах с цифрами

        var clockNumHeight = Math.round(clockFaceHeight * scaleFactor);
        var clockNumWidth = Math.round(clockFaceWidth * scaleFactor);
        var clockNumRadius = Math.round(clockFaceHeight * scaleRadiusFactor);
        var angelBetweenNum = 30;


        clockFace.style.width = clockFaceWidth + 'px';
        clockFace.style.height = clockFaceHeight + 'px';

        var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
        var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;

        for (var i = 1; i <= 12; i++) {
            var clockNumber = document.createElement('span');

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

            ClockDomElem.appendChild(clockNumber);
        }

    }
}