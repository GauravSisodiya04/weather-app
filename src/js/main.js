const endpoint = "https://api.openweathermap.org/data/3.0/onecall?";
const latitude = 20.8307;
const longitude = 76.4505;

const getWeatherData = async function () {
    const result = {};
    const generateEndpointWithParameters = endpoint + "lat=" + latitude + "&lon=" + longitude
    console.log("My API URL becomes -->", generateEndpointWithParameters);
    //const response = await fetch("https://api.weather.gov/points/20.8307,76.4505");
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8088&longitude=77.0471&hourly=temperature_2m");
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

const getWeatherDataButton = document.getElementById("get-weather-data-btn");

getWeatherDataButton.addEventListener("click", getWeatherData);


