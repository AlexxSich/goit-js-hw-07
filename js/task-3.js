const userName = document.querySelector("#name-input");

userName.addEventListener("input", handleInput)

function handleInput(event) {
const name = event.currentTarget.value
    const newName =`${name.trim()}`
    if (newName === "") {
        document.querySelector("#name-output").innerHTML = "Anonymous"
    } else {
  document.querySelector("#name-output").innerHTML = newName
}
}

// воно вроді працює але мені не подобається як воно виглядає

