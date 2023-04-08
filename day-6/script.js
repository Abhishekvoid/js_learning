let time = 1500; // 25 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timer = document.getElementById("timer");
    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (time === 0) {
      clearInterval(timerInterval);
      timer.textContent = "Time's up!";
    } else {
      time--;
    }
  }, 1000);
}

const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");

startStopBtn.addEventListener("click", () => {
  if (startStopBtn.textContent === "Start") {
    startStopBtn.textContent = "Stop";
    startTimer();
  } else {
    startStopBtn.textContent = "Start";
    clearInterval(timerInterval);
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  time = 1500;
  const timer = document.getElementById("timer");
  timer.textContent = "25:00";
  startStopBtn.textContent = "Start";
});
