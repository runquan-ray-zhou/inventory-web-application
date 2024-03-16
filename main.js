const form = document.querySelector("form")

// make function to add event listener to remove ele

function addRemoveFunc(ele) {
    ele.addEventListener("click", event => {
        event.target.parentNode.parentNode.remove()
    })

    return ele
}

// give all remove button event listener to remove ele

const buttons = document.querySelectorAll(".resources__remove-button")

for (let button of buttons) {
    addRemoveFunc(button)
}

// declare stock amount

let stockAmount = 0

// declare stock status

let stockStatus;

// add submit event listener to form

const section = document.querySelector(".resources")

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

    stockAmount > 0 ? stockStatus = "In Stock" : stockStatus = "Out of Stock"

    stockAmount > 0 ? color = "black" : color = "red"

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
        <button class="resources__stock-button" style="color: ${color};">${stockStatus}</button> <button class="resources__stock-count">${stockAmount}</button>
        <br>
        <button class="resources__remove-button">Remove</button>
    </div>`;

    const removeButton = div.childNodes[2].childNodes[21]
    
    addRemoveFunc(removeButton)

    const targetBook = document.getElementById(`${isbn}`)

    const entry = div.cloneNode(true)

    if (targetBook === null) {

        section.prepend(entry)
        
    } else if (targetBook.id && isbn === targetBook.id) {
        targetBook.childNodes[17].textContent = Number(targetBook.childNodes[17].textContent) + Number(amount)
        targetBook.childNodes[15].textContent = "In Stock"
        targetBook.childNodes[15].style.color = "black"
    }

    if (targetBook.childNodes[17].textContent <= 0) {
        targetBook.childNodes[15].style.color = "red"
        targetBook.childNodes[15].textContent = "Out of Stock"
    }

    form.reset()
    
})

const resetButton = document.querySelector(".add-new__reset-button")

resetButton.addEventListener("click", event => {

    form.reset()

})
