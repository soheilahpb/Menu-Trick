
let _li = document.querySelectorAll("._select>li")
let _pages = document.querySelectorAll(".tab>div")
console.log(_li);
const _menu = (e) => {
    // ****Reset buttons color*******************
    _li.forEach((val) => {
        val.style.backgroundColor = "white"
        val.style.color = "#C59D5F"
    })
    // ***************Reset pages opacity
    _pages.forEach((val) => {
        val.style.opacity = "0"
        val.style.transition = ".8s"
    })

    // ***********Change Pages!
    let _title = e.target.getAttribute("data-title")
    document.getElementById(_title).style.opacity = "1"

    // **************Make button colorfull
    e.target.style.backgroundColor = "#C59D5F"
    e.target.style.color = "white"
}