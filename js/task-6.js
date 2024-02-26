function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelectorAll("#controls button")
controls[0].dataset.create = "createBtn"
controls[1].dataset.destroy = "destroyBtn"

const createBtn = document.querySelector(`button[data-create="createBtn"]`)
const destroyBtn = document.querySelector(`button[data-destroy="destroyBtn"]`)

const insertBox = document.querySelector("#boxes")
const userInput = document.querySelector("#controls input")

userInput.addEventListener("input", handleInput)

let amount = 0

createBtn.addEventListener("click", hendleClickCreate)
function hendleClickCreate(event) {
  if(amount <= 100 && amount >= 1) {
    createBoxes(amount)
    userInput.value = ""
  } 
} 

destroyBtn.addEventListener("click", hendleClickDestroy)
function hendleClickDestroy(event) {
  insertBox.innerHTML = "";
}

function handleInput(event) {
  amount = event.currentTarget.value;
}

let boxsize = 0;
let newDiv =``;
function createBoxes(amount) {
  insertBox.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    insertBox.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

