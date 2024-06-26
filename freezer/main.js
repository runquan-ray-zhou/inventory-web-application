const addForm = document.querySelector(".add-inventory__form")

const selectedSummary = document.querySelector(".display__product-info-summary")

console.log(selectedSummary)

// create function for select button

function addSelectFunc(ele) {
    ele.addEventListener("click", event => {
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].style.display = "none"
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].style.display = "block"

        if (event.target.parentNode.parentNode.style.border === "5px dotted purple") {
            event.target.parentNode.parentNode.style.border = "black";
        } else {
            event.target.parentNode.parentNode.style.border = "5px dotted purple";
        }

        let selected = event.target.parentNode.parentNode
        selectedSummary.innerHTML = `<ul><li>Product Name:  <span>${selected.childNodes[1].innerText}</span></span></li><br><li>Product Code:  <span>${selected.childNodes[2].innerText}</span></li><br><li>Product Type:  <span>${selected.childNodes[3].innerText}</span></li><br><li>Product Brand:  <span>${selected.childNodes[4].innerText}</span></li><br><li>Product Vendor:  <span>${selected.childNodes[5].innerText}</span></li><br><li>FDA Status:  <span>${selected.childNodes[6].innerText}</span></li><br><li>Case Count Per Pallet:  <span>${selected.childNodes[7].innerText}</span></li><br><li>lb per Case:  <span>${selected.childNodes[8].innerText}</span></li><br><li>Cost per lb:  <span>$<span>${selected.childNodes[9].innerText}</span></li><br><li>Total Weight per Pallet:  <span>${selected.childNodes[10].innerText}</span></li><br><li>Total Cost per Pallet:  <span>$${selected.childNodes[11].innerText}</span></li><br><li>Pallet Location:  <span>${selected.childNodes[12].innerText}</span></li><br><li>Purchaser:  <span>${selected.childNodes[13].innerText}</span></li><br><li>Purchase Date:  <span>${selected.childNodes[14].innerText}</span></li><br><li>Entry Date:  <span>${selected.childNodes[15].innerText}</span></li><br><li>Expire Date:  <span>${selected.childNodes[16].innerText}</span></li></ul>`
    })
    return ele
}

const selectButtons = document.querySelectorAll(".information__select-button");

for (let button of selectButtons) {
    addSelectFunc(button)
}

// create function for remove button

function addRemoveFunc(ele) {
    ele.addEventListener("click", event => {
        event.target.parentNode.parentNode.remove()
    })

    return ele
}

const removeButtons = document.querySelectorAll(".information__remove-button")

for (let button of removeButtons) {
    addRemoveFunc(button)
}

const ul = document.querySelector(".information__list")

addForm.addEventListener("submit" , e => {
    e.preventDefault()    

    const name = e.target.addName.value
    const code = e.target.addCode.value
    const type = e.target.addType.value
    const brand = e.target.addBrand.value
    const vendor = e.target.addVendor.value
    const fda = e.target.addFDA.value
    const count = e.target.addCase.value
    const pound = e.target.addLb.value
    const cost = e.target.addCost.value
    const weight = e.target.addWeight.value
    const total = e.target.addTotal.value
    const location = e.target.addLocation.value
    const purchaser = e.target.addPurchaser.value
    const pDate = e.target.addPDate.value
    const eDate = e.target.addEDate.value
    const xDate = e.target.addXDate.value

    const li = document.createElement("li")

    li.className = "information__list-item"

    li.style.display = "grid"

    li.innerHTML = `<span><img src="" alt=""></span><span>${name}</span><span>${code}</span><span>${type}</span><span>${brand}</span><span>${vendor}</span><span>${fda}</span><span>${count}</span><span>${pound}lb</span><span>${cost}</span><span>${weight}lb</span><span>${total}</span><span>${location}</span><span>${purchaser}</span><span>${pDate}</span><span>${eDate}</span><span>${xDate}</span><div class="information__option"><input class="information__select-button" type="button" value="Select" /><input class="information__remove-button" type="button" value="Remove" /></div>`

    const button = li.querySelector(".information__remove-button")

    addRemoveFunc(button)
    
    ul.append(li)
})

// give table value buttons eventListener to sort

const allButton = document.querySelectorAll(".information__table-values")

for (let button of allButton) {

    button.addEventListener("click", e => {

        const num = e.target.id.split(".")[0]

        const allLi = document.querySelectorAll("li")

        const array = [... allLi]

        const strSort = array.sort((a, b) => (a.childNodes[num].innerText).localeCompare(b.childNodes[num].innerText) )

        const numSort = array.sort((a, b) => parseFloat(a.childNodes[num].innerText) - parseFloat(b.childNodes[num].innerText))

        if (Number.isInteger(parseInt(array[0].childNodes[num].innerText))) {

            numSort.forEach(ele => {

                ul.append(ele)
    
            })

        } else {

            strSort.forEach(ele => {
    
                ul.append(ele)
    
            })

        }

    })

}

//give all img eventListeners to display image in img

const productImages = document.querySelectorAll(".information__list-image")

const mainImage = document.getElementById("display__product-image")

for (let image of productImages) {

    image.addEventListener("click", e => {

        mainImage.src = image.src

    })
}

const allInventory = document.querySelectorAll(".information__list-item")

const showButton = document.querySelector(".search-inventory__form-showAll-button")

const hideButton = document.querySelector(".search-inventory__form-hideAll-button")

showButton.addEventListener("click", event => {

        for (let eachItem of allInventory) {
            eachItem.style.display = "grid"
        }

} )

hideButton.addEventListener("click", event => {

    for (let eachItem of allInventory) {
        eachItem.style.display = "none"
    }

} )