const myCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${myCategories.length}`)

const arrMyList = Array.from(myCategories)
arrMyList.forEach(function (listItem) {
    console.log(`Categories: ${listItem.firstElementChild.textContent}`)
    console.log(`Elements: ${listItem.lastElementChild.children.length}`)
})

// Мені видається, що це мяко кажучи криво виглядає. Чи ні?

