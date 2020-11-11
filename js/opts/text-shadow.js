const msgTxt = () => {
    msgOutput.innerHTML = `<p>text-shadow: ${input2.value}px ${input3.value}px ${input4.value}px ${input5.value}</p>`
    divAni.style.textShadow = `${input2.value}px ${input3.value}px ${input4.value}px ${input5.value}`
}

function textShadow(e) {
        displayDOM(e, () => {
            createInputs(
                5, 
                {title: 'Text:', type: 'input', id: 'input1', placeholder: 'write-here' },
                {title: 'Horizontal-Length:', type: 'range', id: 'input2', min: '-50', max: '50', value: 0 },
                {title: 'Vertical-Length', type: 'range', id: 'input3', min: '-50', max: '50', value: 0 },
                {title: 'Blur:', type: 'range', id: 'input4', min: '0', max: '20', value: 0 },
                {title: 'Color:', type: 'color', id: 'input5'}
            )
        }, {type: 'p', cls: 'txt-shadow', txt: 'lorem ipsut lorem'})
}

function inputsChangeText() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach( e => e == input5 ? e.addEventListener('input', msgTxt) : e.addEventListener('mousemove', msgTxt) )
}