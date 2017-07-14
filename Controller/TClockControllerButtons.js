 'use strict';
    class TClockControllerButtons {
        constuctor() {
            this._ClockModel = null;
            this._ClockDomElem = null;  
        }
    

    Init (Model,Elem) {
        this._ClockModel = Model;
        this._ClockDomElem = Elem;

        const StartButton = this._ClockDomElem.querySelector('.start');
        StartButton.addEventListener('click',this.Start);
        const StopButton = this._ClockDomElem.querySelector('.stop');
        StopButton.addEventListener('click',this.Stop);
    };

    Start () {
        this._ClockModel.start();
    };

    Stop () {
        this._ClockModel.stop();
    }
}
