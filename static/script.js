let arr
let APIKEY
let temperature_elem = document.getElementById('temperature')
let feels_like_elem = document.getElementById('feels_like')
let pressure_elem = document.getElementById('pressure')
let sunrise_elem = document.getElementById('sunrise')
let sunset_elem = document.getElementById('sunset')
let wind_speed_elem = document.getElementById('wind_speed')
let visibility_elem = document.getElementById('visibility')
let location_div = document.getElementById('location')

location_div.addEventListener('keyup',()=>{
        setTimeout(() => {
            main(location_div.innerText)
        }, 50);
})


fetch('/key').then(res=>APIKEY = res.json()).then(data=>APIKEY=data)

async function main(place) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`).then(res=>res.json()).then(data=>arr=data)
    temperature_elem.innerText = `${Math.floor(arr.main.temp - 273.15)}°C`
    feels_like_elem.innerText = `${Math.floor(arr.main.feels_like - 273.15)}°C`
    pressure_elem.innerText = arr.main.pressure
    sunrise_elem.innerText = arr.sys.sunrise
    sunset_elem.innerText = arr.sys.sunset
    wind_speed_elem.innerText = arr.wind.speed
    visibility_elem.innerText = arr.visibility
}

setTimeout(() => {
    main('delhi')
}, 100);