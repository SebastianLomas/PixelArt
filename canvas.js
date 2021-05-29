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
let pixelSize = 20
let $color = document.getElementById('color')
let $colorSample = document.getElementById('color-sample')
let $colorHexaText = document.getElementById('color-hexa-text')

const draw = function(originX,originY,finalX,finalY,color = "black", lineSize = 1) {
    ctx.strokeStyle = color
    ctx.lineWidth = lineSize
    ctx.beginPath()
    ctx.moveTo(originX,originY)
    ctx.lineTo(finalX,finalY)
    ctx.stroke()
    ctx.closePath()
}

const drawGrid = function(squareSize) {
    let currentLine = squareSize
    let canvasSize = canvas.width
    let numberOfLines = (canvasSize/squareSize) - 1
    
    for(let i = 0;i < numberOfLines;i++) {
        draw(0,currentLine,canvasSize,currentLine,"#4b4b4b")
        draw(currentLine,0,currentLine,canvasSize,"#4b4b4b")
        currentLine += squareSize
    }
}

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
            ctx = canvas.getContext("2d")
            canvasEnable = true
        }
        /* It will always change the width and height no matter what. */
        canvas.width = 600
        canvas.height = 600
        drawGrid(pixelSize)
    } else if(windowMinWidth.matches) {
        if(!canvasEnable) {
            let newCanvas = document.createElement("canvas")
            newCanvas.id = "canvas"
            document.getElementById("alert").remove()
            container.append(newCanvas)
            canvas = document.getElementById("canvas")
            ctx = canvas.getContext("2d")
            canvasEnable = true
        }
        canvas.width = 300
        canvas.height = 300
        drawGrid(pixelSize)
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

const showColor = function(fromColorInput = false, fromText = false) {
    if(fromColorInput) {
        $colorSample.style.backgroundColor = $color.value
        $colorSample.style.borderColor = $color.value
        $colorHexaText.value = $color.value
    } else if(fromText) {
        $colorSample.style.backgroundColor = $colorHexaText.value
        $colorSample.style.borderColor = $colorHexaText.value
        $color.value = $colorHexaText.value
    }
}

resizeCanvas()
showColor(fromColorInput = true)

windowMaxWidth.addEventListener("change", resizeCanvas)
windowMinWidth.addEventListener("change", resizeCanvas)

$color.addEventListener('input', function() {
    showColor(true,false)
})
$colorHexaText.addEventListener('input',function() {
    showColor(false,true)
})



