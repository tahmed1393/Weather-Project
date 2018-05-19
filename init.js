"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature = weatherBox.lastElementChild;
document.getElementById('city')
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('button').click();
    }
});