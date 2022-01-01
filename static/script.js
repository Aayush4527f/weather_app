let arr
let APIKEY

fetch('/key').then(res=>APIKEY = res.json()).then(data=>APIKEY=data)

function main() {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`).then(res=>res.json()).then(data=>arr=data)
}
