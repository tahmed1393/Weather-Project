"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            Okay, hopefully that fixed it. Anyways... back to teaching.

            You may have noticed that the sun is the right size now, but it's not in a cool spot.

            So, I altered the CSS of the sun element so that it would have absolute positioning.
            That means that nothing is going to change the position of the sun.
            It's always going to be 220px from the top and 75px from the right.

            Try resizing the window and you'll notice that it stays there, despite things moving on the page.
            You'll have to do some research if you'd like it to be positioned relative to another element or something like that.

    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        var sun = document.createElement("img");
        sun.src = "images/sun.png";
        sun.id = "sun";

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
