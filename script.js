const apiKey = "09fb0c242a8ed0b6d4b93eea403e9a9f";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//https://api.openweathermap.org/data/2.5/weather?units=metric;
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=nashik&appid=09fb0c242a8ed0b6d4b93eea403e9a9f&units=metric


const cityName = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather() {
  const response = await fetch(URL + `${cityName.value}&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"


  } else {


    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clear") {

      icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      icon.src = "images/clouds.png";

    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "images/drizzle.png";

    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";

    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/rain.png";

    } else if (data.weather[0].main == "Snow") {
      icon.src = "images/snow.png";

    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"

 }
}


btn.addEventListener("click", (evt) => {
  //evt.preventDefault();
  checkWeather();
});