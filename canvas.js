let container = document.getElementById("container")
let colorSelector = document.getElementById("color")

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