/* eslint-disable no-unused-vars */
var timer = {
  mins: 0,
  seconds: 0,
  tenths: 0
}

var getTenths = document.getElementById('tenths')
var getSeconds = document.getElementById('seconds')
var getMins = document.getElementById('mins')
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
// var input = document.getElementById('input').value
// var numbers = input.split(':')
var interval

start.onclick = function () {
  clearInterval(interval)
  interval = setInterval (startTimer, 10)
}

pause.onclick = function () {
  clearInterval(interval)
}

reset.onclick = function () {
  clearInterval(interval)
  timer.tenths = 0
  getTenths.textContent = '00'
  timer.seconds = 0
  getSeconds.textContent = '00'
  timer.mins = 0
  getMins.textContent = '00'
}

submit.onclick = function () {
  clearInterval(interval)
}

function startTimer() {
  var input = document.getElementById('input').value
  var numbers = input.split(':')
  if(parseInt(numbers[0]) !== timer.mins || parseInt(numbers[1]) !== timer.seconds || parseInt(numbers[2]) !== timer.tenths) {
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
}
