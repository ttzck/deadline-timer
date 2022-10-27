const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const start = new Date(urlParams.get("start"))
const end = new Date(urlParams.get("end"))
const now = new Date(Date.now());
const duration = end - start
const passed = now - start
const left = end - now

document.getElementById("startText").innerHTML = `the project started on ${start.toDateString()}`
document.getElementById("endText").innerHTML = `the deadline is ${end.toDateString()}`
document.getElementById("countdownText").innerHTML = `you have ${left} left of ${duration}`
