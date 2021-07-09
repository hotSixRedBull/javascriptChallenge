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
  askName.innerText = `Hi, ${name.value}`;
  form.style.display = "none";
}
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", submitHandler);

//To Do List

// Random BackGround Image

// Weather with Geolocation

// Don't forget CSS!!
