const canvasSize = 16

function createDiv(canvasSize) {
    const newDiv = document.createElement('div')
    const unitSize = `${(100/canvasSize)}%`
    newDiv.classList.add('drw-unit')
    // newDiv.style.backgroundColor = 'white'
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

let docFrag = document.createDocumentFragment()
const canvasElement = document.querySelector('.drw-container')

let drwUnitDivs = []
populateCanvas(canvasSize)

const button = document.querySelector('button#reset')

button.addEventListener('click', () => {
    for (i=0;i<drwUnitDivs.length;i++) {
        canvasElement.removeChild(drwUnitDivs[i])
    }
    drwUnitDivs = []

    let newSize = prompt('Enter the new size')
    if (newSize>100) newSize = prompt('Enter a value smaller than 100')
    populateCanvas(newSize)
})