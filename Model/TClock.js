'use strict';
function TClockModel (options) {
    var self = this;
    
    var timerId;
    var hours, minutes, seconds;
    var timeOffset = (options) ? options.GMT : 0;
    var city = (options) ? options.city : 'Лондон';

    var ClockView = null;

    SetCurrentTime();

    function UpdateView() {
        if ( ClockView )
            ClockView.Update();
    }

    function SetCurrentTime() {
        var now = new Date();

        hours = (now.getUTCHours() + timeOffset >= 24) ? now.getUTCHours() + timeOffset - 24 :
        now.getUTCHours() + timeOffset;

        minutes = now.getMinutes();
        seconds = now.getSeconds();
    }

    function GetCurrentTime() {
        var currentTime = {};

        currentTime['hours'] = hours;
        currentTime['minutes'] = minutes;
        currentTime['seconds'] = seconds;

        return currentTime;
    }
    
    function GetClockInfo() {
        return {
            GMT: timeOffset,
            city: city
        }
    }

    function Init(View) {
        ClockView = View;
    }
    
    function start() {
        if (timerId) return;

        var now = new Date();
        var milliseconds = now.getMilliseconds();

        setTimeout(function () {

            timerId = setInterval(function () {
                SetCurrentTime();
                self.UpdateView();
            }, 1000);
        }, 1000 - milliseconds);
    }

    function stop() {
        clearInterval(timerId);
        timerId = null;
    }

    self.Init = Init;
    self.GetCurrentTime = GetCurrentTime;
    self.GetClockInfo = GetClockInfo;
    self.UpdateView = UpdateView;
    self.start = start;
    self.stop = stop;

}