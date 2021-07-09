//Clock
function changeTimeString() {
  const clock = document.querySelector("#clock");
  const now = new Date(Date.now());
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(changeTimeString, 1000);

//UserName
function submitHandler() {
  event.preventDefault();
  const askName = document.querySelector("#askName");
  const form = document.querySelector("form");
  const name = document.querySelector("#nameInput");
  askName.innerText = `Hi, ${name.value}. Have a nice day!`;
  form.style.display = "none";
}
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", submitHandler);

//To Do List

// Random BackGround Image
let color1 = Math.floor(Math.random() * (16 ** 6 - 1))
  .toString(16)
  .padStart(6, "0");
let color2 = Math.floor(Math.random() * (16 ** 6 - 1))
  .toString(16)
  .padStart(6, "0");
console.log("color1", color1, "color2", color2);
document.body.style.background = `linear-gradient(to right,#${color1},#${color2})`;

// Weather with Geolocation

// Don't forget CSS!!
