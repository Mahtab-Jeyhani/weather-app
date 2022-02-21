function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#Temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let pressureElement = document.querySelector("#pressure");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    pressureElement.innerHTML = Math.round(response.data.main.pressure);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let ApiKey = "2bb25f83d9730c68e1f5d645832d1509";
let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${ApiKey}&units=metric`;
axios.get(ApiUrl).then(displayTemperature);