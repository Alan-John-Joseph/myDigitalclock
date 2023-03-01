window.onload = function () {
    'use strict';
    setInterval(function () {
        var clock = document.getElementById('clock-content'),
            data = new Date(),
            h = data.getHours(),
            m = data.getMinutes(),
            s = data.getSeconds(),
            session = "AM";

        if (h > 12) {
            session = "PM";
            h = h - 12;
        }
      
        if (s == 0) {
            s = 60;
        }
        
       
      
      
        
        
        
        clock.textContent = " " + h + ":" + m + ":" + s + " " + session;
    }, 1000);
   
    
};