let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("restart");
let timeDisplay = document.getElementById("time");
let seconds = 0;
let timer;

function createSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function initiateTime() {
  timeDisplay.style.color = "white";
  timer = setInterval(function () {
    seconds++;
    timeDisplay.innerHTML = createSeconds(seconds);
  }, 1000);
}

function stopTime() {
  timeDisplay.style.color = "red";
  clearInterval(timer);
}

function resetTime() {
  timeDisplay.innerText = "00:00:00";
  seconds = 0;
  timeDisplay.style.color = "white";
  clearInterval(timer);
}

startBtn.addEventListener("click", () => {
  initiateTime();
});

stopBtn.addEventListener("click", () => {
  stopTime();
});

resetBtn.addEventListener("click", () => {
  resetTime();
});
