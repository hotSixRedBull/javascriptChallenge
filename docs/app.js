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
  askName.innerText = `Hi, ${name.value}.\n Have a nice day!`;
  form.style.display = "none";
}
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", submitHandler);

//To Do List
function todoSubmitHandler(e) {
  event.preventDefault();
  let items = JSON.parse(localStorage.getItem("TODO"));
  const todoTextInput = document.querySelector("#todoTextInput");
  console.log(e);
  if (items == undefined) {
    items = [
      {
        id: Date.now(),
        name: todoTextInput.value,
      },
    ];
  } else {
    items.push({
      id: Date.now(),
      name: todoTextInput.value,
    });
  }
  todoTextInput.innerText = "";
  localStorage.setItem("TODO", JSON.stringify(items));
  loadLocalStorage();
  console.log("items", items);
}

function loadLocalStorage() {
  const existingList = document.querySelector("ul");
  if (existingList) {
    existingList.parentNode.removeChild(existingList);
  }
  const list = document.createElement("ul");
  list.id = "taskList";
  const items = JSON.parse(localStorage.getItem("TODO"));

  function removeOnClickHandler(event) {
    const listItem = event.target.parentNode;
    const list = document.querySelector("ul");
    list.removeChild(listItem);
    let localItems = JSON.parse(localStorage.getItem("TODO"));
    console.log(`listItem.id: ${listItem.id}`);
    localItems = localItems.filter((item) => {
      return String(item.id) !== String(listItem.id);
    });
    console.log(localItems);
    localStorage.setItem("TODO", JSON.stringify(localItems));
  }

  items.forEach((item) => {
    const listEl = document.createElement("li");
    listEl.innerText = item.name;
    listEl.id = item.id;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "";
    deleteBtn.addEventListener("click", removeOnClickHandler);
    listEl.appendChild(deleteBtn);
    list.appendChild(listEl);
  });

  document.querySelector("#todoList").appendChild(list);
}

const todoDiv = document.querySelector("#todoList");
const form = document.createElement("form");
const todoTextInput = document.createElement("input");
todoTextInput.type = "text";
todoTextInput.id = "todoTextInput";
todoTextInput.required = true;
todoTextInput.placeholder = "Type to do and press enter";
form.addEventListener("submit", todoSubmitHandler);
form.appendChild(todoTextInput);
todoDiv.appendChild(form);
loadLocalStorage();

// Random BackGround Image
function changeBackgroundImage() {
  let color1 = Math.floor(Math.random() * (16 ** 6 - 1))
    .toString(16)
    .padStart(6, "0");
  let color2 = Math.floor(Math.random() * (16 ** 6 - 1))
    .toString(16)
    .padStart(6, "0");
  document.body.style.background = `linear-gradient(to right,#${color1},#${color2})`;
}
changeBackgroundImage();
changeBackgroundImage();

// Weather with Geolocation
const weatherDiv = document.querySelector("#weather");
function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // weatherDiv.innerText = `Your location is, ${lat}, ${lng}`;
  if (config && config.API_KEY) {
    const API_KEY = config.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    const weatherData = fetch(url);
    console.log(weatherData);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherDiv.innerText = `${data.name}, ${data.weather[0].main}`;
      });
  } else {
    weatherDiv.innerText =
      "Please add API Key of openweathermap.org in the code.(app.js#128)";
    // Please add api key here!
    const API_KEY = " ";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherDiv.innerText = `${data.name}, ${data.weather[0].main}`;
      });
  }
}
function geoFail() {
  weatherDiv.innerText = "Please enable geo location access";
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);

// Don't forget CSS!!
