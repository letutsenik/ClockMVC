class TClockModel {

    constructor(options) {
        this._timerId = null;
        this._hours = null;
        this._minutes = null;
        this._seconds = null;
        this._timeOffset = (options) ? options.GMT : 0;
        this._city = (options) ? options.city : 'Лондон';

        this._ClockView = null;

        this.SetCurrentTime = this.SetCurrentTime.bind(this);
        this.SetCurrentTime();
    }


    UpdateView() {
        if ( this._ClockView )
            this._ClockView.Update();
    }

    SetCurrentTime() {
        let now = new Date();

        this._hours = (now.getUTCHours() + this._timeOffset >= 24) ? now.getUTCHours() + this._timeOffset - 24 :
            now.getUTCHours() + this._timeOffset;

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
        }
    }

    Init(View) {
        this._ClockView = View;
    }

    start() {
        if (this._timerId) return;

        let now = new Date();
        let milliseconds = now.getMilliseconds();

        setTimeout( () => {
            this._timerId = setInterval( () => {
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

export default TClockModel
