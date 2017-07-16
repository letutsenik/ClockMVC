import TClockControllerButtons from './Controller/TClockControllerButtons'
import TClockModel from './Model/TClock'
import TClockViewDOM from './View/TClockViewDOM'
import TClockViewSVG from './View/TClockViewSVG'
import TClockViewCanvas from './View/TClockViewCanvas'

//console.log( TClockControllerButtons );

const ClockModelDom = new TClockModel({city:'Нью-Йорк', GMT:-5}); //Нью-Йорк (GMT-5)
const ViewDom = new TClockViewDOM();
const ControllerDom = new TClockControllerButtons();
const DomClock = document.querySelector('.clockDom');

ClockModelDom.Init(ViewDom);
ViewDom.Init(ClockModelDom, DomClock);
ControllerDom.Init(ClockModelDom, DomClock);

ClockModelDom.UpdateView();
ClockModelDom.start();
//***********************************//

const ClockModelSVG = new TClockModel(); //Лондон (GMT+0)
const ViewSVG = new TClockViewSVG();
const ControllerSVG = new TClockControllerButtons();
const SVGClock = document.querySelector('.clockSVG');

ClockModelSVG.Init(ViewSVG);
ViewSVG.Init(ClockModelSVG, SVGClock);
ControllerSVG.Init(ClockModelSVG, SVGClock);

ClockModelSVG.UpdateView();
ClockModelSVG.start();
//***********************************//

const ClockModelCanvas = new TClockModel({city:'Берлин', GMT:+1}); //Берлин (GMT+1)
const ViewCanvas = new TClockViewCanvas();
const ControllerCanvas = new TClockControllerButtons();
const CanvasClock = document.querySelector('.clockCanvas');

ClockModelCanvas.Init(ViewCanvas);
ViewCanvas.Init(ClockModelCanvas, CanvasClock);
ControllerCanvas.Init(ClockModelCanvas, CanvasClock);

ClockModelCanvas.UpdateView();
ClockModelCanvas.start();
//***********************************//
//***********************************//
const ClockModelDom2 = new TClockModel({city:'Минск', GMT:+3}); //Минск (GMT+3)
const ViewDom2 = new TClockViewDOM();
const ControllerDom2 = new TClockControllerButtons();
const DomClock2 = document.querySelector('.clockDom2');

ClockModelDom2.Init(ViewDom2);
ViewDom2.Init(ClockModelDom2, DomClock2);
ControllerDom2.Init(ClockModelDom2, DomClock2);

ClockModelDom2.UpdateView();
ClockModelDom2.start();
//***********************************//

const ClockModelSVG2 = new TClockModel({city:'Токио', GMT:+9}); //Токио (GMT+9)
const ViewSVG2 = new TClockViewSVG();
const ControllerSVG2 = new TClockControllerButtons();
const SVGClock2 = document.querySelector('.clockSVG2');

ClockModelSVG2.Init(ViewSVG2);
ViewSVG2.Init(ClockModelSVG2, SVGClock2);
ControllerSVG2.Init(ClockModelSVG2, SVGClock2);

ClockModelSVG2.UpdateView();
ClockModelSVG2.start();
//***********************************//

const ClockModelCanvas2 = new TClockModel({city:'Владивосток', GMT:+10}); //Владивосток (GMT+10)
const ViewCanvas2 = new TClockViewCanvas();
const ControllerCanvas2 = new TClockControllerButtons();
const CanvasClock2 = document.querySelector('.clockCanvas2');

ClockModelCanvas2.Init(ViewCanvas2);
ViewCanvas2.Init(ClockModelCanvas2, CanvasClock2);
ControllerCanvas2.Init(ClockModelCanvas2, CanvasClock2);

ClockModelCanvas2.UpdateView();
ClockModelCanvas2.start();