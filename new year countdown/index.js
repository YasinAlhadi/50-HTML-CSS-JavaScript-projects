const dayE = document.getElementById("day");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");

const newYear = new Date("jan 1, 2024 00:00:00").getTime();

updateCount();

function updateCount() {
    const now = new Date().getTime();
    const gap = newYear - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayE.innerText = d;
    hoursE.innerText = h;
    minutesE.innerText = m;
    secondsE.innerText = s;

    setTimeout(updateCount, 1000);
}