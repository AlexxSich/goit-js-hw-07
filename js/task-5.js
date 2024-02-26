function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const snapColor = document.querySelector(".color")

changeColorBtn.addEventListener("click", handleClick)

function handleClick(event) {
  const randomBodyColor = getRandomHexColor()
  bodyColor.style.backgroundColor = randomBodyColor
  snapColor.innerHTML = randomBodyColor

  console.log(randomBodyColor)
}

