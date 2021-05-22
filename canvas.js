let container = document.getElementById("container")
let colorSelector = document.getElementById("color")
let colorShow = document.getElementById("color-show")
let colorSelected = document.getElementById("color-selected")

colorSelector.addEventListener("input", function() {
    colorShow.style.backgroundColor = colorSelector.value
    colorSelected.value = colorSelector.value
})

colorSelected.addEventListener("input", function(e) {
    colorSelector.value = e.target.value.toString()
    colorShow.style.backgroundColor = e.target.value.toString()
    console.log(e.target.value)
})

const createGrid = (function() {
    for(let y = 0;y < 16;y++) {
        for(let x = 0;x < 16;x++) {
            let div = document.createElement("div")
            div.id = `grid-${x}-${y}`
            div.classList.add("grid")
            container.append(div)
        }
    }
})()

container.addEventListener("click", function(e) {
    let element = e.target
    let color = colorSelector.value

    if(element.className === "grid") {
        element.style.backgroundColor = color
    }
})