const form = document.querySelector("form")

function addRemoveFunc(ele) {
    ele.addEventListener("click", event => {
        event.target.parentNode.parentNode.remove()
    })

    return ele
}    

const buttons = document.querySelectorAll(".resources__remove-button")

for (let button of buttons) {
    addRemoveFunc(button)
}

let stockAmount = 0

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const title = event.target.title.value

    const author = event.target.author.value

    const url = event.target.url.value

    const price = event.target.price.value

    const isbn = event.target.isbn.value

    const amount = event.target.amount.value

    const div = document.createElement("div")

    const select = document.querySelector(".add-new__select")

    if (select.options[select.selectedIndex].text === "-- No --") {
        stockAmount = amount
    }

    if (select.options[select.selectedIndex].text === "-- Yes --") {
        stockAmount += Number(amount)
    }

    div.classList.add("resources__book")
    
    div.innerHTML = `<img class="resources__book-img" src="${url}" alt="${title}">
    <div id="${isbn}"class="resources__book-info">
        <h2 class="resources__book-title">${title}</h2>
        <hr>
        <h3 class="resources__book-author">${author}</h3>
        <span class="resources__book-price">${price}</span>
        <br>
        <span class="resources__book-isbn">${isbn}</span>
        <br>
        <button class="resources__stock-button">In Stock</button> <button class="resources__stock-button">${stockAmount}</button>
        <br>
        <button class="resources__remove-button">Remove</button>
    </div>`;
    const section = document.querySelector(".resources")

    const removeButton = div.childNodes[2].childNodes[21]
    
    addRemoveFunc(removeButton)

    const targetBook = document.getElementById(`${isbn}`)

    console.log(targetBook)

    // console.log(targetBook.childNodes[17].textContent)

    if (targetBook === null) {

        section.prepend(div)
        
    } else if (targetBook.id && isbn === targetBook.id) {
        
        targetBook.childNodes[17].textContent = Number(targetBook.childNodes[17].textContent) + Number(amount)
        
    }
    
    

})

// const targetBook = document.getElementById("978-0593435106")

// console.log(Number(targetBook.childNodes[17].textContent))

const resetButton = document.querySelector(".add-new__reset-button")

resetButton.addEventListener("click", event => {

    form.reset()

})