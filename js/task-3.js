const userName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")

userName.addEventListener("input", handleInput)

function handleInput(event) {
  
const name = event.currentTarget.value
    const newName =`${name.trim()}`
    if (newName === "") {
      nameOutput.innerHTML = "Anonymous"
    } else {
      nameOutput.innerHTML = newName
}
}

// воно вроді працює але мені не подобається як воно виглядає

