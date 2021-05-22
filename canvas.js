let container = document.getElementById("container")
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