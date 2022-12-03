const API_KEY="c57767d673caf5f59650c88a07932709"
// c57767d673caf5f59650c88a07932709

function onGeoOk(position){
    const lat=position.coords.latitude;
    const log=position.coords.longitude;
   const weatherApiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
fetch(weatherApiUrl).then(Response =>Response.json()).then(data =>{
    const weather=document.querySelector("#weather span:first-child");
    const city=document.querySelector("#weather span:last-child");
    city.innerText=`${data.name}`;
    weather.innerText=`${data.weather[0].main},`});
}
function onGeoError(){
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);