var elem = document.querySelectorAll(".elem")

elem.forEach((val) => {
    // console.log(val.childNodes)
    val.addEventListener("mousemove",(details) => {
        val.childNodes[3].style.left = details.x+'px'
        // val.childNodes[3].style.top = details.y+'px'
    })
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0
    })
})



//ONE BY ONE(LENTHY AND REPETATIVE CODE)
// var elem1Img = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",(details) => {
//     elem1Img.style.left = details.x+'px'
//     elem1Img.style.top = details.y+'px'
// })

// elem1.addEventListener("mouseenter",(details) => {
//     elem1Img.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",(details) => {
//     elem1Img.style.opacity = 0
// })