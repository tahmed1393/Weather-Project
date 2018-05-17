"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            As you can tell by the console logs, the cloud will travel for eternity...
            That's a waste of our processing power, so let's detect when it's passed our window's view and destroy the cloud.

            Also, let's put the old code together in a tightly packed line.
    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        var sun = document.createElement("img");
        sun.src = "images/sun.png";
        sun.id = "sun";

        var cloud = document.createElement("img");
        cloud.src = "images/cloud.png";
        cloud.id = "cloud";

        var moveCloud = function() {

            var currentRight = cloud.style.right;
            console.log("Current Right:", currentRight);

            var newRight = Number( currentRight.replace("px","") ) + 25;
            cloud.style.right = newRight + "px";
            console.log("New Right:", newRight);

            // If the right positioning number is greater than or equal to the window's width, it's gotta go
            // Notice I kept newRight as a variable because it doesn't have the "px" (that would have made it a string).
            // It's a number so it's compatible with this comparision
            if ( newRight >= window.innerWidth ) {
                clearInterval(cloudInterval);
                weatherReadout.removeChild(cloud);
            }

        };
        // I had to define the interval as a variable so that I could grab it with the clearInterval function
        var cloudInterval = setInterval(moveCloud, 2000);

        var weatherReadout = document.getElementById("weather");
        weatherReadout.appendChild(sun);
        weatherReadout.appendChild(cloud);

    };

}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';

        // Update weather after setting the new temperature
        weatherCity.textContent = this.cityName;
        weatherDescription.textContent = this.description;
        weatherTemperature.textContent = this._temperature;
    
        loadingText.style.display = 'none';
        weatherBox.style.display = 'block';
    }
});
