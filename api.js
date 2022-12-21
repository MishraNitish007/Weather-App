
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherapi ={
    key:"cd051fec7af2bee3c0c170eebb170b18",

    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

// Event listner on key press 
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event)=>{
if(event.key === 'Enter')
    console.log(searchInputBox.value);
    getWeatherreport(searchInputBox.value);
    document.querySelector('.weather-body').style.display ="block";

})

// Get weather Report 
function getWeatherreport(city){
    fetch(`${weatherapi.baseUrl}?q=${city}&appid=${weatherapi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showweatherReport);
}


// Show weather report 
function showweatherReport(weather){
console.log(weather);


let city=document.getElementById('city');
city.innerText=`${weather.name},${weather.sys.country}` 

let Temprature =document.getElementById('temp');
Temprature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`

let MinumumMaximum= document.getElementById('min-max');
MinumumMaximum.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) // ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;


let Weatherforcast=document.getElementById('weather');
Weatherforcast.innerText=`${weather.weather[0].main}`;

let date = document.getElementById('date');
let todayDate= new Date();
date.innerText = dateManage(todayDate);

if (Weatherforcast.textContent == 'Clear'){
    document.body.style.backgroundImage ="url('./images/clear.jpg')"
}
 else if (Weatherforcast.textContent == 'Clouds'){
    document.body.style.backgroundImage ="url('./Images/cloud.jpg')"
}

else if (Weatherforcast.textContent == 'Haze'){
    document.body.style.backgroundImage ="url('./Images/Haze.jpg')"
}

else if (Weatherforcast.textContent == 'Smoke'){
    document.body.style.backgroundImage ="url('./Images/smoke.jpg')"
}

else if (Weatherforcast.textContent == 'Rain'){
    document.body.style.backgroundImage ="url('./Images/rain.jpg')"
}
else if (Weatherforcast.textContent == 'Snow'){
    document.body.style.backgroundImage ="url('./Images/snow.jpg')"
}
else if (Weatherforcast.textContent == 'Thunderstorm'){
    document.body.style.backgroundImage ="url('./Images/Thunder.jpeg')"
}
else if (Weatherforcast.textContent == 'Mist'){
    document.body.style.backgroundImage ="url('./Images/mist.jpg')"
}

}
// date manage
function dateManage(dateArg){
    let days =["Sunday","Mon","Tues","Wednes","Thurs","Fri","Satur"];

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year= dateArg.getFullYear();
    let month =months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day =days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}



