/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_TClock__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__View_TClockViewDOM__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__View_TClockViewSVG__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__View_TClockViewCanvas__ = __webpack_require__(5);






//console.log( TClockControllerButtons );

const ClockModelDom = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */]({ city: 'Нью-Йорк', GMT: -5 }); //Нью-Йорк (GMT-5)
const ViewDom = new __WEBPACK_IMPORTED_MODULE_2__View_TClockViewDOM__["a" /* default */]();
const ControllerDom = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const DomClock = document.querySelector('.clockDom');

ClockModelDom.Init(ViewDom);
ViewDom.Init(ClockModelDom, DomClock);
ControllerDom.Init(ClockModelDom, DomClock);

ClockModelDom.UpdateView();
ClockModelDom.start();
//***********************************//

const ClockModelSVG = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */](); //Лондон (GMT+0)
const ViewSVG = new __WEBPACK_IMPORTED_MODULE_3__View_TClockViewSVG__["a" /* default */]();
const ControllerSVG = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const SVGClock = document.querySelector('.clockSVG');

ClockModelSVG.Init(ViewSVG);
ViewSVG.Init(ClockModelSVG, SVGClock);
ControllerSVG.Init(ClockModelSVG, SVGClock);

ClockModelSVG.UpdateView();
ClockModelSVG.start();
//***********************************//

const ClockModelCanvas = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */]({ city: 'Берлин', GMT: +1 }); //Берлин (GMT+1)
const ViewCanvas = new __WEBPACK_IMPORTED_MODULE_4__View_TClockViewCanvas__["a" /* default */]();
const ControllerCanvas = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const CanvasClock = document.querySelector('.clockCanvas');

ClockModelCanvas.Init(ViewCanvas);
ViewCanvas.Init(ClockModelCanvas, CanvasClock);
ControllerCanvas.Init(ClockModelCanvas, CanvasClock);

ClockModelCanvas.UpdateView();
ClockModelCanvas.start();
//***********************************//
//***********************************//
const ClockModelDom2 = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */]({ city: 'Минск', GMT: +3 }); //Минск (GMT+3)
const ViewDom2 = new __WEBPACK_IMPORTED_MODULE_2__View_TClockViewDOM__["a" /* default */]();
const ControllerDom2 = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const DomClock2 = document.querySelector('.clockDom2');

ClockModelDom2.Init(ViewDom2);
ViewDom2.Init(ClockModelDom2, DomClock2);
ControllerDom2.Init(ClockModelDom2, DomClock2);

ClockModelDom2.UpdateView();
ClockModelDom2.start();
//***********************************//

const ClockModelSVG2 = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */]({ city: 'Токио', GMT: +9 }); //Токио (GMT+9)
const ViewSVG2 = new __WEBPACK_IMPORTED_MODULE_3__View_TClockViewSVG__["a" /* default */]();
const ControllerSVG2 = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const SVGClock2 = document.querySelector('.clockSVG2');

ClockModelSVG2.Init(ViewSVG2);
ViewSVG2.Init(ClockModelSVG2, SVGClock2);
ControllerSVG2.Init(ClockModelSVG2, SVGClock2);

ClockModelSVG2.UpdateView();
ClockModelSVG2.start();
//***********************************//

const ClockModelCanvas2 = new __WEBPACK_IMPORTED_MODULE_1__Model_TClock__["a" /* default */]({ city: 'Владивосток', GMT: +10 }); //Владивосток (GMT+10)
const ViewCanvas2 = new __WEBPACK_IMPORTED_MODULE_4__View_TClockViewCanvas__["a" /* default */]();
const ControllerCanvas2 = new __WEBPACK_IMPORTED_MODULE_0__Controller_TClockControllerButtons__["a" /* default */]();
const CanvasClock2 = document.querySelector('.clockCanvas2');

ClockModelCanvas2.Init(ViewCanvas2);
ViewCanvas2.Init(ClockModelCanvas2, CanvasClock2);
ControllerCanvas2.Init(ClockModelCanvas2, CanvasClock2);

ClockModelCanvas2.UpdateView();
ClockModelCanvas2.start();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class TClockControllerButtons {
    constructor() {
        this._ClockModel = null;
        this._ClockDomElem = null;
        this.Start = this.Start.bind(this);
        this.Stop = this.Stop.bind(this);
    }

    Init(Model, Elem) {
        this._ClockModel = Model;
        this._ClockDomElem = Elem;

        const StartButton = this._ClockDomElem.querySelector('.start');
        StartButton.addEventListener('click', this.Start);
        const StopButton = this._ClockDomElem.querySelector('.stop');
        StopButton.addEventListener('click', this.Stop);
    }

    Start() {
        this._ClockModel.start();
    }

    Stop() {
        this._ClockModel.stop();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (TClockControllerButtons);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TClockModel {

    constructor(options) {
        this._timerId = null;
        this._hours = null;
        this._minutes = null;
        this._seconds = null;
        this._timeOffset = options ? options.GMT : 0;
        this._city = options ? options.city : 'Лондон';

        this._ClockView = null;

        this.SetCurrentTime = this.SetCurrentTime.bind(this);
        this.SetCurrentTime();
    }

    UpdateView() {
        if (this._ClockView) this._ClockView.Update();
    }

    SetCurrentTime() {
        let now = new Date();

        this._hours = now.getUTCHours() + this._timeOffset >= 24 ? now.getUTCHours() + this._timeOffset - 24 : now.getUTCHours() + this._timeOffset;

        this._minutes = now.getMinutes();
        this._seconds = now.getSeconds();
    }

    GetCurrentTime() {
        let currentTime = {};

        currentTime['hours'] = this._hours;
        currentTime['minutes'] = this._minutes;
        currentTime['seconds'] = this._seconds;

        return currentTime;
    }

    GetClockInfo() {
        return {
            GMT: this._timeOffset,
            city: this._city
        };
    }

    Init(View) {
        this._ClockView = View;
    }

    start() {
        if (this._timerId) return;

        let now = new Date();
        let milliseconds = now.getMilliseconds();

        setTimeout(() => {
            this._timerId = setInterval(() => {
                this.SetCurrentTime();
                this.UpdateView();
            }, 1000);
        }, 1000 - milliseconds);
    }

    stop() {
        clearInterval(this._timerId);
        this._timerId = null;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (TClockModel);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TClockViewDOM {
        constructor() {
                this._ClockModel = null;
                this._ClockDomElem = null;
                this._clockFace = null;

                this._clockInfo = null;
        }

        Init(Model, Elem) {

                this._ClockModel = Model;
                this._ClockDomElem = Elem;

                let info = this._ClockModel.GetClockInfo();

                this._clockFace = this._ClockDomElem.querySelector('.clock-face');
                this._clockInfo = this._ClockDomElem.querySelector('.info');

                if (info.GMT === 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT)';
                if (info.GMT > 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
                if (info.GMT < 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';

                this.drawNumbers();
        }

        Update() {
                let now = this._ClockModel.GetCurrentTime();

                let angles = this.GetArrowsAngel();

                this._ClockDomElem.querySelector('.clock-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
                this._ClockDomElem.querySelector('.clock-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
                this._ClockDomElem.querySelector('.clock-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

                let sec = now.seconds;
                if (sec < 10) sec = '0' + sec;
                this._ClockDomElem.querySelector('.clock-electronic .sec').innerHTML = sec;

                let min = now.minutes;
                if (min < 10) min = '0' + min;
                this._ClockDomElem.querySelector('.clock-electronic .min').innerHTML = min;

                let hour = now.hours;
                if (hour < 10) hour = '0' + hour;
                this._ClockDomElem.querySelector('.clock-electronic .hour').innerHTML = hour;
        }

        GetArrowsAngel() {
                let angles = {};
                let now = this._ClockModel.GetCurrentTime();

                const secInMinute = 60;
                const minInHour = 60;

                let hour = now.hours;

                angles['sec'] = now.seconds * 2 * Math.PI / secInMinute;

                angles['min'] = now.minutes * 2 * Math.PI / minInHour;

                if (hour >= 12) hour -= 12;
                angles['hour'] = hour * 2 * Math.PI / 12 + 2 * Math.PI / 12 * now.minutes / secInMinute;

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

                        clockNumber.style.left = Math.round(clockFaceCenterX - clockNumWidth / 2 + clockNumRadius * Math.sin(angelBetweenNum * i / 180 * Math.PI)) + 'px';
                        clockNumber.style.top = Math.round(clockFaceCenterY - clockNumHeight / 2 - clockNumRadius * Math.cos(angelBetweenNum * i / 180 * Math.PI)) + 'px';

                        this._ClockDomElem.appendChild(clockNumber);
                }
        }
}

/* harmony default export */ __webpack_exports__["a"] = (TClockViewDOM);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TClockViewSVG {
        constructor() {
                this._ClockModel = null;
                this._ClockDomElem = null;
                this._clockFace = null;
                this._clockSVG = null;

                this._clockInfo = null;
        }

        Init(Model, Elem) {
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
        }

        Update() {
                let now = this._ClockModel.GetCurrentTime();

                let angles = this.GetArrowsAngel();

                this._ClockDomElem.querySelector('.clockSVG-arrow-sec').style.transform = 'rotate(' + angles.sec + 'rad)';
                this._ClockDomElem.querySelector('.clockSVG-arrow-min').style.transform = 'rotate(' + angles.min + 'rad)';
                this._ClockDomElem.querySelector('.clockSVG-arrow-hour').style.transform = 'rotate(' + angles.hour + 'rad)';

                let sec = now.seconds;
                if (sec < 10) sec = '0' + sec;
                this._ClockDomElem.querySelector('.clock-electronic .sec').innerHTML = sec;

                let min = now.minutes;
                if (min < 10) min = '0' + min;
                this._ClockDomElem.querySelector('.clock-electronic .min').innerHTML = min;

                let hour = now.hours;
                if (hour < 10) hour = '0' + hour;
                this._ClockDomElem.querySelector('.clock-electronic .hour').innerHTML = hour;
        }

        GetArrowsAngel() {
                let angles = {};
                let now = this._ClockModel.GetCurrentTime();

                const secInMinute = 60;
                const minInHour = 60;

                let hour = now.hours;

                angles['sec'] = now.seconds * 2 * Math.PI / secInMinute;

                angles['min'] = now.minutes * 2 * Math.PI / minInHour;

                if (hour >= 12) hour -= 12;
                angles['hour'] = hour * 2 * Math.PI / 12 + 2 * Math.PI / 12 * now.minutes / secInMinute;

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
                        const clockNumber = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        clockNumber.classList.add('clock-numbers');
                        clockNumber.setAttribute('r', clockNumRadius);

                        clockNumber.setAttribute('cx', Math.round(clockFaceCenterX + clockNumR * Math.sin(30 * i / 180 * Math.PI)));
                        clockNumber.setAttribute('cy', Math.round(clockFaceCenterY - clockNumR * Math.cos(30 * i / 180 * Math.PI)));
                        this._clockFace.insertBefore(clockNumber, this._clockFace.querySelector('.clockSVG-arrow-hour'));

                        const clockNumberText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        clockNumberText.classList.add('clock-numbers-text');
                        clockNumberText.innerHTML = i;

                        clockNumberText.setAttribute('x', Math.round(clockFaceCenterX + clockNumR * Math.sin(angelBetweenNum * i / 180 * Math.PI)));
                        clockNumberText.setAttribute('y', Math.round(clockFaceCenterY - clockNumR * Math.cos(angelBetweenNum * i / 180 * Math.PI)) + textOffset);

                        this._clockFace.appendChild(clockNumberText);
                }
        }
}

/* harmony default export */ __webpack_exports__["a"] = (TClockViewSVG);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

    Init(Model, Elem) {
        this._ClockModel = Model;
        this._ClockDomElem = Elem;
        let info = this._ClockModel.GetClockInfo();

        this._Canvas = Elem.querySelector('.canvas');
        this._Context = this._Canvas.getContext('2d');
        this._clockInfo = this._ClockDomElem.querySelector('.info');

        if (info.GMT === 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT)';
        if (info.GMT > 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '+' + info.GMT + ')';
        if (info.GMT < 0) this._clockInfo.innerHTML = info.city + ' ' + '(GMT' + '-' + -info.GMT + ')';
    }

    Update() {
        this.render();
    }

    drawClockFace() {
        this._Context.restore();
        this._Context.strokeStyle = '#e1bc19';
        this._Context.fillStyle = '#e1bc19';
        this._Context.beginPath();
        this._Context.arc(this._clockFaceCenterX, this._clockFaceCenterY, this._clockFaceRadius, 0, Math.PI * 2, false);
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
            this._Context.strokeStyle = '#469826';
            this._Context.fillStyle = '#469826';
            this._Context.beginPath();
            this._Context.arc(Math.round(this._clockFaceCenterX + clockNumR * Math.sin(30 * i / 180 * Math.PI)), Math.round(this._clockFaceCenterY - clockNumR * Math.cos(30 * i / 180 * Math.PI)), clockNumRadius, 0, Math.PI * 2, false);
            this._Context.stroke();
            this._Context.fill();

            this._Context.fillStyle = 'black';
            this._Context.textAlign = 'center';
            this._Context.font = clockNumRadius * scaleTextSizeFactor + 'px Times New Roman';
            this._Context.fillText(i, Math.round(this._clockFaceCenterX + clockNumR * Math.sin(angelBetweenNum * i / 180 * Math.PI)), Math.round(this._clockFaceCenterY - clockNumR * Math.cos(angelBetweenNum * i / 180 * Math.PI)) + textOffset);
        }
    }

    drawElectronic() {
        let now = this._ClockModel.GetCurrentTime();
        const OffsetYScaleFactor = 0.77; //Отступ текста по вертикали
        let hour = now.hours;
        if (hour < 10) hour = '0' + hour;

        let min = now.minutes;
        if (min < 10) min = '0' + min;

        let sec = now.seconds;
        if (sec < 10) sec = '0' + sec;

        this._Context.textAlign = 'center';
        this._Context.font = '40px Times New Roman';
        this._Context.fillStyle = '#000';

        this._Context.fillText(hour + ':' + min + ':' + sec, this._clockFaceCenterX, this._clockFaceCenterY * OffsetYScaleFactor);
        this._Context.save();
    }

    drawArrows() {
        let angles = this.GetArrowsAngel();
        const hourArrowLenght = 180;
        const minArrowLenght = 200;
        const secArrowLenght = 230;
        const arrowTail = 20;

        this._Context.lineCap = 'round';

        this._Context.lineWidth = 9.5;
        this._Context.strokeStyle = '#000';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.hour), this._clockFaceCenterY + arrowTail * Math.cos(angles.hour));
        this._Context.lineTo(this._clockFaceCenterX + (hourArrowLenght - arrowTail) * Math.sin(angles.hour), this._clockFaceCenterY - (hourArrowLenght - arrowTail) * Math.cos(angles.hour));
        this._Context.stroke();

        this._Context.lineWidth = 6.5;
        this._Context.strokeStyle = '#761010';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.min), this._clockFaceCenterY + arrowTail * Math.cos(angles.min));
        this._Context.lineTo(this._clockFaceCenterX + (minArrowLenght - arrowTail) * Math.sin(angles.min), this._clockFaceCenterY - (minArrowLenght - arrowTail) * Math.cos(angles.min));
        this._Context.stroke();

        this._Context.lineWidth = 4.5;
        this._Context.strokeStyle = '#d00a0a';
        this._Context.beginPath();
        this._Context.moveTo(this._clockFaceCenterX - arrowTail * Math.sin(angles.sec), this._clockFaceCenterY + arrowTail * Math.cos(angles.sec));
        this._Context.lineTo(this._clockFaceCenterX + (secArrowLenght - arrowTail) * Math.sin(angles.sec), this._clockFaceCenterY - (secArrowLenght - arrowTail) * Math.cos(angles.sec));
        this._Context.stroke();
    }

    render() {
        this._Context.clearRect(0, 0, 500, 500);
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
        angles['hour'] = hour * 2 * Math.PI / 12 + 2 * Math.PI / 12 * now.minutes / secInMinute;

        return angles;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (TClockViewCanvas);

/***/ })
/******/ ]);