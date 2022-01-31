const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025

let colorDOM = document.querySelector("#color")
let main = document.querySelector("main")

let button = document.querySelector("#button")

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "rgb(48, 48, 48)"
    button.style.color = "rgb(233, 229, 221)"
})

button.addEventListener("mouseout", function() {
    button.style.backgroundColor ="#ffffff"
    button.style.color = "black"
})

button.addEventListener("click", changeColor)

function changeColor() {
    let bgColor = getRandomColor()
    //console.log(bgColor)
    colorDOM.innerHTML = bgColor
    main.style.backgroundColor = bgColor
}

function getRandomColor() {
    let color = "#"
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*hex.length)]
    }
    return color;
}