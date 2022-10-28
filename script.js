const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const start = new Date(urlParams.get("start"))
const end = new Date(urlParams.get("end"))
const now = new Date(Date.now())
const duration = end - start
const passed = now - start
const left = end - now
const daysPassed = Math.floor(passed / 1000.0 / 60.0 / 60.0 / 24.0)
const daysLeft = Math.floor(left / 1000.0 / 60.0 / 60.0 / 24.0) + 1

document.getElementById("startText").innerHTML = `the project started on ${start.toDateString()}`
document.getElementById("endText").innerHTML = `the deadline is ${end.toDateString()}`
document.getElementById("countdownText").innerHTML = `<b>${daysLeft}</b> days`
document.getElementById("calendar").innerHTML 
= Array(daysPassed).fill("■").join(" ")
+ " ▣ "
+ Array(daysLeft - 1).fill("□").join(" ")

