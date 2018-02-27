/* eslint-disable no-unused-vars */
var timer {
  seconds: 0
  mins: 0
  tenths: 0
}

var getTenths = document.getElementById('tenths')
var getSeconds = document.getElementById('seconds')
var getMins = document.getElementById('mins')
var start = document.getElementById('start')
var interval

start.onclick = function () {
  interval = setInterval(startTimer, 10)
}

function startTimer() {
  timer.tenths++
  if (timer.tenths < 9) {
    getTenths.textContent = '0' + timer.tenths
  }
  if (timer.tenths > 9) {
    getTenths.textContent = timer.tenths
  }
  if (timer.tenths > 99) {
    timer.seconds++
    getSeconds.textContent = '0' + timer.seconds
    timer.tenths = 0
    getTenths.textContent = '0' + 0
  }
  if (timer.seconds > 9) {
    getSeconds.textContent = timer.seconds
  }
  if (timer.seconds > 59) {
    timer.mins++
    getMins.textContent = '0' + timer.mins
    timer.seconds = 0
    getSeconds.textContent = '0' + 0
  }
}
