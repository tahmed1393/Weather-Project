"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            Alright, now you've seen how it's done, you can do this!

            Now I want you to take over. You can scrap all of this and make your own partly cloudy solution...
            Or you can continue to build this.

            If you put that cloud code into a function, you could loop over it (i.e. a for-loop) to create multiple!
            You can also adjust the top positioning style, to get them at different heights.

            Also, clouds tend to appear in random positions, maybe you could make use of the random function?
            It would be really cool to add a loop to add these clouds at random heights, perhaps?
            https://www.w3schools.com/js/js_random.asp
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

            if ( newRight >= window.innerWidth ) {
                clearInterval(cloudInterval);
                weatherReadout.removeChild(cloud);
            }

        };
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
