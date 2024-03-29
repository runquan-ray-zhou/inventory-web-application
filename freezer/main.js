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
        selectedSummary.innerHTML = `<ul><li>Product Name:  ${selected.childNodes[1].innerText}</li><br><li>Product Code:  ${selected.childNodes[2].innerText}</li><br><li>Product Type:  ${selected.childNodes[3].innerText}</li><br><li>Product Brand:  ${selected.childNodes[4].innerText}</li><br><li>Product Vendor:  ${selected.childNodes[5].innerText}</li><br><li>FDA Status:  ${selected.childNodes[6].innerText}</li><br><li>Case Count Per Pallet:  ${selected.childNodes[7].innerText}</li><br><li>lb per Case:  ${selected.childNodes[8].innerText}lb</li><br><li>Cost per lb:  $${selected.childNodes[9].innerText}</li><br><li>Total Weight per Pallet:  ${selected.childNodes[10].innerText}lb</li><br><li>Total Cost per Pallet:  ${selected.childNodes[11].innerText}</li><br><li>Pallet Location:  ${selected.childNodes[12].innerText}</li><br><li>Purchaser:  ${selected.childNodes[13].innerText}</li><br><li>Purchase Date:  ${selected.childNodes[14].innerText}</li><br><li>Entry Date:  ${selected.childNodes[15].innerText}</li><br><li>Expire Date:  ${selected.childNodes[16].innerText}</li></ul>`
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