const Apikey = "d08d62115c166eaeabc7b718bcf1a5b0";
const ApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");
async function CheckWether(city) {
  const responce = await fetch(ApiUrl + city + `&appid=${Apikey}`);
  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await responce.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      WeatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

const formSubmitSearch = document.querySelector(".form-data");

formSubmitSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  CheckWether(searchBox.value);
  searchBox.value = "";
});

// some changes comment added