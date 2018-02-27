/* eslint-disable no-unused-vars */
var tenths = 0
var seconds = 0
var mins = 0
var getTenths = document.getElementById('tenths')
var getSeconds = document.getElementById('seconds')
var getMins = document.getElementById('mins')
var start = document.getElementById('start')
var interval

start.onclick = function () {
  interval = setInterval(startTimer, 10)
}

function startTimer() {
  tenths++
  if (tenths < 9) {
    getTenths.textContent = '0' + tenths
  }
  if (tenths > 9) {
    getTenths.textContent = tenths
  }
  if (tenths > 99) {
    seconds++
    getSeconds.textContent = '0' + seconds
    tenths = 0
    getTenths.textContent = '0' + 0
  }
  if (seconds > 9) {
    getSeconds.textContent = seconds
  }
  if (seconds > 59) {
    mins++
    getMins.textContent = '0' + mins
    seconds = 0
    getSeconds.textContent = '0' + 0
  }
}
