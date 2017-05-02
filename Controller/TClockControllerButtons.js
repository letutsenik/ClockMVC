'use strict';
function TClockControllerButtons() {
    var ClockModel = null;
    var ClockDomElem = null; 

    this.Init = function(Model,Elem) {
        ClockModel = Model;
        ClockDomElem = Elem;
        
        var StartButton = ClockDomElem.querySelector('.start');
        StartButton.addEventListener('click',this.Start);
        var StopButton = ClockDomElem.querySelector('.stop');
        StopButton.addEventListener('click',this.Stop);
    };

    this.Start = function() {
        ClockModel.start();
    };

    this.Stop = function() {
        ClockModel.stop();
    }
}