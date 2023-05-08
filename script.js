let timer = document.querySelector(".timer");
let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stoptbtn");
let resetBtn = document.getElementById("resetbtn");

let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;

startBtn.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(start_timer, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerid);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerid);
  timer.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = 0;
});

function start_timer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }
  let msecstring = msec < 10 ? `0${msec}` : msec;
  let secsstring = secs < 10 ? `0${secs}` : secs;
  let minsstring = mins < 10 ? `0${mins}` : mins;

  timer.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
}
