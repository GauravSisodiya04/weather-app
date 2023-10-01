const getWeatherData = async function () {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8088&longitude=77.0471&hourly=temperature_2m");
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
}

const getWeatherDataButton = document.getElementById("get-weather-data-btn");

getWeatherDataButton.addEventListener("click", getWeatherData);


