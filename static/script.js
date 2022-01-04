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
let icon = document.getElementById('icon')
let weather_main = document.getElementById('weather_main')

location_div.addEventListener('keyup',()=>{
        setTimeout(() => {
            main(location_div.innerText)
        }, 50);
})


fetch('/key').then(res=>APIKEY = res.json()).then(data=>APIKEY=data)

async function main(place) {
    let sunrise
    let sunset
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`).then(res=>res.json()).then(data=>arr=data)
    
    function getSunrise() {
        let unix_rise = new Date(arr.sys.sunrise * 1000)
        return `${unix_rise.getHours()}:${unix_rise.getMinutes()}:${unix_rise.getSeconds()}`
    }
    function getSunset() {
        let unix_set = new Date(arr.sys.sunset * 1000)
        return `${unix_set.getHours()}:${unix_set.getMinutes()}:${unix_set.getSeconds()}`
    }

    temperature_elem.innerText = `${Math.floor(arr.main.temp - 273.15)}°C`
    feels_like_elem.innerText = `${Math.floor(arr.main.feels_like - 273.15)}°C`
    pressure_elem.innerText = arr.main.pressure
    sunrise_elem.innerText = `${getSunrise()} IST`
    sunset_elem.innerText = `${getSunset()} IST`
    wind_speed_elem.innerText = arr.wind.speed + 'KM/H'
    visibility_elem.innerText = arr.visibility
    weather_main.innerText = arr.weather[0].main
    icon.style.backgroundImage = `url(${arr.weather[0].main}.png)`
}

setTimeout(() => {
    main('Mumbai')
}, 100);