setInterval(clock, 1000)
let secondHand = document.querySelector('.second')
let minHand = document.querySelector('.minute')
let hourHand = document.querySelector('.hour')

function clock() {
    let now = new Date
    let second = ((now.getSeconds() / 60) * 360)
    secondHand.style.transform = `rotate(${second}deg)`
    let minute = ((now.getMinutes() / 60) * 360)
    minHand.style.transform = `rotate(${minute}deg)`
    let hour = ((now.getHours() / 12) * 360)
    hourHand.style.transform = `rotate(${hour}deg)`
}