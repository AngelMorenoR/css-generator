const msgBorder = () => {
    msgOutput.innerHTML = 
    `<p>border-radius: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px;</p>
    <p>-webkit-border-radius: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px;</p>
    <p>-moz-border-radius: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px;</p>`
 
    divChange.style.borderRadius = `${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px`
}

function borderRadius(e) {
    displayDOM(e, () => {
        createInputs(
            4, 
            {title: 'top-left:', type: 'range', id: 'input1', min: '0', max: '100', value: 0 },
            {title: 'top.right:', type: 'range', id: 'input2', min: '0', max: '100', value: 0 },
            {title: 'bottom-right:', type: 'range', id: 'input3', min: '0', max: '100', value: 0 },
            {title: 'bottom-left:', type: 'range', id: 'input4', min: '0', max: '100', value: 0 },
        )
    },  {type: 'div', cls: 'divChange'})
}

function inputsChangeBorder() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach(e => e.addEventListener('mousemove', msgBorder) )
}