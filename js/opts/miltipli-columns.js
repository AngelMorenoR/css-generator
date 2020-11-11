const msgColumn = () => {
    msgOutput.innerHTML = 
    `<p>-moz-column-count: 1;</p>
    <p>-moz-column-gap: 2px;</p>
    <p>-webkit-column-count: 1;</p>
    <p>-webkit-column-gap: 2px;</p>
    <p>column-count: 1;</p>
    <p>column-gap: 2px;</p>
    `
    divAni.style.columnCount = `${input1.value}`
    divAni.style.columnGap = `${input2.value}px`
}

function column(e) {
    displayDOM(e, () => {
        createInputs(
                        2, 
                        {title: 'Column:', type: 'input', id: 'input1' },
                        {title: 'Gap', type: 'input', id: 'input2'},
                    )
    }, {type: 'p', cls: 'txt-column', txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." })
}

function inputsChangeColumn() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach( e => e.addEventListener('keyup', msgColumn) )
}