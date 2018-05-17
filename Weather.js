"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            Everything has been static so far... It's kinda boring.

            Let's animate the cloud. Let's make him move along slowly.

            We'll start by making a timer that will run a function everything 2 seconds.
    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        var sun = document.createElement("img");
        sun.src = "images/sun.png";
        sun.id = "sun";

        var cloud = document.createElement("img");
        cloud.src = "images/cloud.png";
        cloud.id = "cloud";

        setInterval(function(){ console.log("Two seconds have passed. Hooray!s"); }, 2000);

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
