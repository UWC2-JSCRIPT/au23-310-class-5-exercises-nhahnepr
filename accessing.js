// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let chgWeather = document.getElementById('weather-head');
chgWeather.innerText = 'February 10 Weather Forecast, Seattle';
// Change the styling of every element with class "sun" to set the color to "orange"
let sunColor = document.getElementsByClassName('sun')[0];
sunColor.style.color = 'orange';
// Change the class of the second <li> from to "sun" to "cloudy"
const sunSecond = document.getElementsByClassName('sun')[1];
sunSecond.className = 'cloudy';