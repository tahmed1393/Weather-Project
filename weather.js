"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
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
