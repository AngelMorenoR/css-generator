const msgShadow = () => {
    msgOutput.innerHTML = 
    `<p>box-shadow: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px ${input5.value};</p>
    <p>-webkit-box-shadow: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px ${input5.value};</p>
    <p>-moz-box-shadow: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px ${input5.value};</p>
    `
    divChange.style.boxShadow = `${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px ${input5.value}`
}

function boxShadow(e) {
    displayDOM(e, () => {
        createInputs(
                        5, 
                        {title: 'Move X:', type: 'input', id: 'input1', min: '-50', max: '50', value: 0 },
                        {title: 'Move Y:', type: 'input', id: 'input2', min: '-50', max: '50', value: 0 },
                        {title: 'Blur:', type: 'input', id: 'input3', min: '0', max: '100', value: 0 },
                        {title: 'Scale:', type: 'input', id: 'input4', min: '0', max: '50', value: 0 },
                        {title: 'Color:', type: 'color', id: 'input5'}
                    )
    }, {type: 'div', cls: 'divChange'})
}

function inputsChangeShadow() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach( e => e == input5 ? e.addEventListener('input', msgShadow) : e.addEventListener('keyup', msgShadow) )
}
