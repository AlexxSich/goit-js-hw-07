const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const elements = event.currentTarget.elements;
    
if (elements.email.value === "" || elements.password.value === "") {
    alert('All form fields must be filled in')
} else {
    const infoObj = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    console.log(infoObj);
    event.currentTarget.reset();
}
}


// чи можна так використовувати метод trim() чи краще так не треба?

