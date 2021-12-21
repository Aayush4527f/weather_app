let APIKEY = "380f2cbe1fbe01de6d82379cea4d7668"
let arr
let user_loc = document.getElementById('user_location') 

function getData() {
    main(user_loc.value)
}

async function main(place) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`).then(res=>res.json()).then(data=>arr=data)
    document.getElementById('location_name').innerText = arr.name
    document.getElementById('temprature').innerText = Math.floor(arr.main.temp - 273.15) + '°C'
    if(arr.wind.speed != 0){document.getElementById('wind_speed').innerText = arr.wind.speed + 'm/s'}
    document.getElementById('weather_type').innerText = arr.weather[0].main
}