let btn = document.getElementById('ask-weather');
let div = document.getElementById('weather-result');

function askWeather() {
  var request = new XMLHttpRequest();
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send(); 
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        response = response.current_condition.condition;   
        div.innerHTML = response;
    }
  };
}

btn.addEventListener('click', function() {
  askWeather();
});