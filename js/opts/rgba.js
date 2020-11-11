const msgRGBA = () => {
    msgOutput.innerHTML = `background-color: rgba(${input1.value}, ${input2.value}, ${input3.value}, ${input4.value});`
    divChange.style.backgroundColor = "rgba(" + input1.value + ", " + input2.value + ", " + input3.value + ", " + input4.value + ")"

}
function rgba(e) {
    displayDOM(e, () => {
        createInputs(
            4, 
            {title: 'Red:', type: 'range', id: 'input1', min: '0', max: '255', value: 236 },
            {title: 'Green:', type: 'range', id: 'input2', min: '0', max: '255', value: 230 },
            {title: 'Blue:', type: 'range', id: 'input3', min: '0', max: '255', value: 230 },
            {title: 'Opacity:', type: 'range', id: 'input4', min: '0', max: '1', value: 1, step: 0.1 },
        )
    }, {type: 'div', cls: 'divChange'})
}

function inputsChangeRGBA() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach(e => e.addEventListener('mousemove', msgRGBA) )
}