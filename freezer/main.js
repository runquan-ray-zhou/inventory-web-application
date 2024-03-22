const addForm = document.querySelector(".add-inventory__form")

function addRemoveFunc(ele) {
    ele.addEventListener("click", event => {
        event.target.parentNode.remove()
    })

    return ele
}

const buttons = document.querySelectorAll(".information__remove-button")

for (let button of buttons) {
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

    li.innerHTML = `<span><img src="" alt=""></span><span>${name}</span><span>${code}</span><span>${type}</span><span>${brand}</span><span>${vendor}</span><span>${fda}</span><span>${count}</span><span>${pound}lb</span><span>$${cost}</span><span>${weight}lb</span><span>$${total}</span><span>${location}</span><span>${purchaser}</span><span>${pDate}</span><span>${eDate}</span><span>${xDate}</span><input type="button" value="Remove" />`
    
    ul.append(li)
})

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
