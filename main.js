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

const add = document.getElementById("add-new__radio");

const update = document.getElementById("update__radio")

const ul = document.querySelector("ul")

ul.style.display = "none"

const titleErrorLi = document.createElement("li")

titleErrorLi.innerText = "Please enter Title of Book."

const authorErrorLi = document.createElement("li")

authorErrorLi.innerText = "Please enter Author of Book."

const imageErrorLi = document.createElement("li")

imageErrorLi.innerText = "Please enter Image URL."

const isbnErrorLi = document.createElement("li")

isbnErrorLi.innerText = "Please enter a valid ISBN."

const priceErrorLi = document.createElement("li")

priceErrorLi.innerText = "Please enter a Price."

const stockErrorLi = document.createElement("li")

stockErrorLi.innerText = "Please select CORRECT In Stock status."

const amountErrorLi = document.createElement("li")

amountErrorLi.innerText = "Please give entering or leaving stock count."

const reEnterError = document.createElement("li")

reEnterError.innerText = "PLEASE CLICK RESET AND ENTER REQUIRED FIELDS.  THANKS"

// Get list of all isbn on page

const allIsbn = document.querySelectorAll(".resources__book-isbn")

let isbnArray = []

for (let isbn of allIsbn) {
    isbnArray.push(isbn.innerText)
}

console.log(isbnArray)

const section = document.querySelector(".resources")

let entry;

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const title = event.target.title.value

    if (add.checked && !title) {
        ul.append(titleErrorLi)
    }

    const author = event.target.author.value

    if (add.checked && !author) {
        ul.append(authorErrorLi)
    }

    const url = event.target.url.value

    if (add.checked && !url) {
        ul.append(imageErrorLi)
    }

    const price = event.target.price.value

    if (add.checked && !price) {
        ul.append(priceErrorLi)
    }

    const isbn = event.target.isbn.value

    if (add.checked && !isbn) {
        ul.append(isbnErrorLi)
    }

    if (update.checked && !isbnArray.includes(isbn)) {
        ul.append(isbnErrorLi)
    }

    const amount = event.target.amount.value

    if (add.checked && !amount) {
        ul.append(amountErrorLi)
    }

    if (update.checked && !amount) {
        ul.append(amountErrorLi)
    }

    const select = document.querySelector(".add-new__select")
    
    if (select.options[select.selectedIndex].text === "-- Select One --") {
        ul.append(stockErrorLi)
    }
    
    if (select.options[select.selectedIndex].text === "-- No --") {
        stockAmount = amount
    }

    if (select.options[select.selectedIndex].text === "-- No --" && update.checked) {
        ul.append(stockErrorLi)
    }
    
    if (select.options[select.selectedIndex].text === "-- Yes --") {
        stockAmount += Number(amount)
    }
    
    stockAmount > 0 ? stockStatus = "In Stock" : stockStatus = "Out of Stock"
    
    stockAmount > 0 ? color = "black" : color = "red"
    
    const div = document.createElement("div")
    
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

    if(ul.childNodes.length > 0) {
        ul.append(reEnterError)
        ul.style.removeProperty("display")
        entry = ""
    } else {
        entry = div
    }

    if (targetBook === null) {

        section.prepend(entry)

        form.reset()
        
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

    ul.innerHTML = ""

    ul.style.display = "none"
    
    form.reset()
    
})