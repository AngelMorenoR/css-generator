const msgGradient = () => {
    const [r, g, b] = hexToRgb(input2.value.toString())
    const [r2, g2, b2] = hexToRgb(input4.value.toString())
    msgOutput.innerHTML = 
    `<p>background: rgb(${r}, ${g}, ${b});</p>
    <p>background: -moz-linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%);</p>
    <p>background: -webkit-linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%);</p>
    <p>background: -o-linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%);</p>
    <p>background: -ms-linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%);</p>
    <p>background: linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%);</p>
    `
    divChange.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    divChange.style.background = `linear-gradient(${input5.value}deg, rgb(${r}, ${g}, ${b})${input1.value}%, rgb(${r2}, ${g2}, ${b2}) ${input3.value}%)`
}
function gradient(e) {
    displayDOM(e, () => {
        createInputs(
                        5, 
                        {title: 'start', type: 'range', id: 'input1', min: '0', max: '100', value: 0},
                        {title: 'start-color', type: 'color', id: 'input2', value: '#ECE6E6'},
                        {title: 'end', type: 'range', id: 'input3', min: '0', max: '100', value: 0},
                        {title: 'end-color', type: 'color', id: 'input4', value: '#ECE6E6'},
                        {title: 'angle', type: 'range', id: 'input5', min: '0', max: '360', value: 0, class: 'join' },


                    )
    }, {type: 'div', cls: 'divChange'})
}

function inputsChangeGradient() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach( e => e.type == 'color' ? e.addEventListener('input', msgGradient) : e.addEventListener('mousemove', msgGradient) )
}