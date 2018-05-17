"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            So far we only have the sun, it's not much of a "partly cloudy" forecast is it?

            Let's make a cloud, just one for now.

            You saw how I added an image before, so I'm just going to do it all in one commit this time.
    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        var sun = document.createElement("img");
        sun.src = "images/sun.png";
        sun.id = "sun";

        var cloud = document.createElement("img");
        cloud.src = "images/cloud.png";
        cloud.id = "cloud";

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
