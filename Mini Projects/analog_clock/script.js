let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

const dispTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // calculating the rotation based on 360 degree
    let hrRotation = 30*hr + min/2;
    let minRotation = 6*min;
    let secRotation = 6*sec;

    hrs.style.transform = `rotate(${hrRotation}deg)`;
    mins.style.transform = `rotate(${minRotation}deg)`;
    secs.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(dispTime, 1000);