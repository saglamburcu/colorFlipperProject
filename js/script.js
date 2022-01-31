const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

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

button.addEventListener("click", changeEvent)

function changeEvent() {
    let randomNumber = getRandomNumber()
    //console.log(randomNumber)

    colorDOM.innerHTML = colors[randomNumber]
    main.style.backgroundColor = colors[randomNumber]
}

function getRandomNumber() {
    return (Math.floor(Math.random()*colors.length))
}

