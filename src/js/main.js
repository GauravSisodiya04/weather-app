const getWeatherData = async function () {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8088&longitude=77.0471&hourly=temperature_2m");
    const myJson = await response.json(); //extract JSON from the http response
   console.log(myJson);
   const myTodaysTemperaturesArray = myJson.hourly.temperature_2m;
   const myTodaysTimeslotArray = myJson.hourly.time;
   const today = new Date() //Sun Oct 01 2023 11:00:25 GMT-0600 (Mountain Daylight Time)
   const timeInGMTFormat = today.toISOString(); // Here , we are converting time to GMT
   const timeAfterTrimmingLastAdditionalFields = timeInGMTFormat.substring(0,16); //2023-10-01T17:05'
   console.log("expected time formatted",timeAfterTrimmingLastAdditionalFields)

}

const getWeatherDataButton = document.getElementById("get-weather-data-btn");

getWeatherDataButton.addEventListener("click", getWeatherData);


