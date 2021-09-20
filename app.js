const canvasSize = 16

function createDiv(canvasSize) {
    const newDiv = document.createElement('div')
    const unitSize = `${(100/canvasSize)}%`
    newDiv.classList.add('drw-unit')
    newDiv.style.height = unitSize
    newDiv.style.width = unitSize
    return newDiv
}

function populateCanvas(canvasSize) {
    for (i=0;i<(canvasSize**2);i++) {
        drwUnitDivs.push(createDiv(canvasSize))
        docFrag.append(drwUnitDivs[i])
    }
    canvasElement.append(docFrag)
}

function paintDiv() {
    this.style['background-color'] = 'black'
}

let docFrag = document.createDocumentFragment()
const canvasElement = document.querySelector('.drw-container')

let drwUnitDivs = []
populateCanvas(canvasSize)

const resetButton = document.querySelector('button#reset')
resetButton.addEventListener('click', () => {
    for (i=0;i<drwUnitDivs.length;i++) {
        canvasElement.removeChild(drwUnitDivs[i])
    }
    drwUnitDivs = []

    let newSize = prompt('Enter the new size')
    while (newSize>100) {
        newSize = prompt('Enter a value smaller than 100')
    }
    populateCanvas(newSize)
    drwUnitDivs.forEach(div => div.addEventListener('mouseover', paintDiv))
})

drwUnitDivs.forEach(div => div.addEventListener('mouseover', paintDiv))