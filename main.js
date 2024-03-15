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

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const title = event.target.title.value

    const author = event.target.author.author

    const url = event.target.url.value

    const price = event.target.price.value

    const div = document.createElement("div")
    
    div.classList.add("resources__book")
    
    div.innerHTML = `<img class="resources__book-img" src="${url}" alt="${title}">
    <div class="resources__book-info">
        <h2 class="resources__book-title">${title}</h2>
        <hr>
        <h3 class="resources__book-author">${author}</h3>
        <span class="resources__book-price">${price}</span>
        <br>
        <button class="resources__stock-button">In Stock</button>
        <br>
        <button class="resources__remove-button">Remove</button>
    </div>`;

    const removeButton = div.childNodes[2].childNodes[15]
    
    addRemoveFunc(removeButton)

    const section = document.querySelector(".resources")
    
    section.prepend(div)

})


const resetButton = document.querySelector(".add-new__reset-button")

resetButton.addEventListener("click", event => {

    form.reset()

})