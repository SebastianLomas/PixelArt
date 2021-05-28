/* 
windowMaxWidth and windowMinWidth are media queries for canvas. They help
to resize canvas.
Width >= 800 = canvas 600x600
Width < 800 and > 600 = canvas 300x300
Width < 600 = No canvas. An alert is shown.
*/
let container = document.getElementById("container")
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let windowMaxWidth = window.matchMedia("(min-width: 800px)")
let windowMinWidth = window.matchMedia("(min-width: 600px)")
let canvasEnable = true

const resizeCanvas = function() {
    /* If it matches with either max or min, it will check if canvas is
    on html document. If canvas isn't available, it will create a new canvas,
    give it an id, remove the alert, append the new canvas, save the new canvas
    into canvas variable and change canvasEnable to true.*/
    if(windowMaxWidth.matches) {
        if(!canvasEnable) {
            let newCanvas = document.createElement("canvas")
            newCanvas.id = "canvas"
            document.getElementById("alert").remove()
            container.append(newCanvas)
            canvas = document.getElementById("canvas")
            canvasEnable = true
        }
        /* It will always change the width and height no matter what. */
        canvas.width = 600
        canvas.height = 600
    } else if(windowMinWidth.matches) {
        if(!canvasEnable) {
            let newCanvas = document.createElement("canvas")
            newCanvas.id = "canvas"
            document.getElementById("alert").remove()
            container.append(newCanvas)
            canvas = document.getElementById("canvas")
            canvasEnable = true
        }
        canvas.width = 300
        canvas.height = 300
    } else {
        /* if canvasEnable = true, this lines removes canvas, create a message with id, class and text, append 
        message and change canvasEnable to false. Otherwise, it won't do anything.*/
        if(canvasEnable) {
            canvas.remove()
            let message = document.createElement("p")
            message.id = "alert"
            message.classList.add("alert")
            message.innerText = "your device is not compatible"
            container.append(message)
            canvasEnable = false
        }
    }
}

resizeCanvas()

windowMaxWidth.addEventListener("change", resizeCanvas)
windowMinWidth.addEventListener("change", resizeCanvas)

