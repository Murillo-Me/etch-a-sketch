function createDiv() {
    const newDiv = document.createElement('div')
    newDiv.classList.add('drw-unit')
    // newDiv.style.backgroundColor = 'white'
    // newDiv.style.height = '10px'
    // newDiv.style.width = '10px'
    return newDiv
}

const canvasSize = 100

let docFrag = document.createDocumentFragment()

drwUnitDivs = []
for (i=0;i<(canvasSize**2);i++) {
    drwUnitDivs.push(createDiv())
    docFrag.append(drwUnitDivs[i])
}

document.body.querySelector('.drw-container').append(docFrag)



