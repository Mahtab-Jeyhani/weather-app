function displayTemperature(response) {
    console.log(response);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#Temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let pressureElement = document.querySelector("#pressure");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    pressureElement.innerHTML = Math.round(response.data.main.pressure);
    windElement.innerHTML = Math.round(response.data.wind.speed);
}
let ApiKey = "2bb25f83d9730c68e1f5d645832d1509";
let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${ApiKey}&units=metric`;
axios.get(ApiUrl).then(displayTemperature);