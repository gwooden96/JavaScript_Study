let clock = document.querySelector('.clock');


function showClock() {

const date = new Date();


let hour = String(date.getHours()).padStart(2, 0);
let min = String(date.getMinutes()).padStart(2, 0);
let sec = String(date.getSeconds()).padStart(2, 0);


clock.innerHTML = `${hour} : ${min} : ${sec}`;

}


showClock();
setInterval(showClock, 1000);

