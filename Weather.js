"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            I created the folder /images and added a picture of the sun that looks like it was drawn by a toddler.
            Tayeb is welcome to replace it though! :D
            It has a transparent background, so it will fit into the project well.

    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        // Creating the HTML element for the sun
        var sun = document.createElement("img");

        // Setting the src attribute to the ugly sun picture
        sun.src = "images/sun.png";

        // Adding it to the document so it will actually display, I want it next to the temperature read out
        var weatherReadout = document.getElementById("weather");
        weatherReadout.appendChild(sun);

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
