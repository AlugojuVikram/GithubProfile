const inp = document.querySelector("#search-input")
const btn = document.querySelector("#search-button")

let cont = document.querySelector(".details")

let uData = ""

btn.addEventListener("click",fetchData)
function fetchData() {
    fetch(`https://api.github.com/users/${uData}`)
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
             empty()
            createData(data)
        })
}
fetchData()

function createData(val) {
    // const div = document.createElement("div")

    cont.innerHTML = (val.message != "Not Found") ?  `
        <h2>Name:${val.name}</h2>
        <img src=${val.avatar_url} >` : ``
    // cont.appendChild(div)


}


function red(e) {
    uData = e.value
    inp.value = ""

}
function empty() {
    while (cont.hasChildNodes()) {
        cont.removeChild(cont.firstChild)
    }
}
