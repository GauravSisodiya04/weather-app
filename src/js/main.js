const getWeatherData = async function () {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=19.8088&longitude=77.0471&hourly=temperature_2m&current=windspeed_10m&windspeed_unit=ms");
    const myJson = await response.json(); //extract JSON from the http response
   console.log(myJson);
   const myTodaysTemperaturesArray = myJson.hourly.temperature_2m;
   const myTodaysTimeslotArray = myJson.hourly.time;
   const myCurrentWindspeed =myJson.current.windspeed_10m;
   const today = new Date() //Sun Oct 01 2023 11:00:25 GMT-0600 (Mountain Daylight Time)
   const timeInGMTFormat = today.toISOString(); // Here , we are converting time to GMT
   const timeAfterTrimmingLastAdditionalFields = timeInGMTFormat.substring(0,14)+"00"; //2023-10-01T17:05:00'
   console.log("expected time formatted",timeAfterTrimmingLastAdditionalFields)
   const indexOfMyCurrentTimeInResponseArray = myTodaysTimeslotArray.indexOf(timeAfterTrimmingLastAdditionalFields);
   console.log("index of my string",indexOfMyCurrentTimeInResponseArray)
   //Now I have the index of my current time, I can use this index to find the temperature
   const currentTemp = myTodaysTemperaturesArray[indexOfMyCurrentTimeInResponseArray];
   document.getElementById("current-temperature").innerHTML= currentTemp;
   document.getElementById("current-wind-speed").innerHTML= myCurrentWindspeed;
}

const getWeatherDataButton = document.getElementById("get-weather-data-btn");

getWeatherDataButton.addEventListener("click", getWeatherData);


