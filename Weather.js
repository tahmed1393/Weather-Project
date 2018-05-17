"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            I am contributing my weather pattern as an attribute of the weather class.
            If Tayeb wants to go another direction, he'll have my coded function and he can just move things around.
            
            I don't want to make the weather selector, that would be a good learning experience for him.
            So in the meantime, testing will be done by calling the occurance in the developer tools' console.

        EXAMPLE:
            app.js, line 23 currently creates the instance weatherData.
            Testing this in console would be weatherData.partlyCloudy();

    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
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
