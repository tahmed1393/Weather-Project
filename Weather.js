"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';

    /*
        Dev note:
            Alright, the interval is set. I tested it.

            Let's declare the function before the interval, makes the code cleaner.
            
            So, let's move this cloud!
            Our first need is to grab the cloud, we already did that with the variable cloud though, we just created it! :D
            Now I want to add some more pixels to the right position... but there's a problem. "px" is not part of math.
            
                2 + 2 = 4 (those are numbers so it adds)
                "2" + "2" = "22" (those are strings so it concatenates)
                "2" + 2 = "22" (also this, just FYI)

            Knowing that, we find that...
                "75px" + 25 = "75px25"
            ... and that's garbage, so we have to change it into a number first.

    */

    this.partlyCloudy = function() {
        console.log("Partly cloudy");
        
        var sun = document.createElement("img");
        sun.src = "images/sun.png";
        sun.id = "sun";

        var cloud = document.createElement("img");
        cloud.src = "images/cloud.png";
        cloud.id = "cloud";

        var moveCloud = function(){

            // Get the current right positioning
            var currentRight = cloud.style.right;

            // Print it out for testing purposes
            console.log("Current Right:", currentRight);

            // Get rid of the "px"
            currentRight = currentRight.replace("px","");

            // Make sure JavaScript knows that it's a number, not a string
            currentRight = Number(currentRight);

            // Do the math
            var newRight = currentRight + 25;

            // Pop the pixel string back on it and make it the new right!
            cloud.style.right = newRight + "px";

            // Console log the change for testing purposes
            console.log("New Right:", newRight);

        };
        setInterval(moveCloud, 2000);

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
