// divChange.style.transition = 'all 600ms'
const msgTransform = () => {
    divChange.style.transition = 'all 600ms'
    const scale = input1.value == '' ? '' : `scale(${input1.value})`
    const rotate = input2.value == '' ? '' : `rotate(${input2.value}deg)`
    const translateX = input3.value == '' ? '' : `translateX(${input3.value}px)`
    const skewX = input4.value == '' ? '' : `skewX(${input4.value}deg)`

    msgOutput.innerHTML = 
    `<p> -moz-transform: ${scale} ${rotate} ${translateX} ${skewX} </p> 
    <p> -webkit-transform: ${scale} ${rotate} ${translateX} ${skewX}</p>
    <p> -o-transform: ${scale} ${rotate} ${translateX} ${skewX}</p>
    <p> -ms-transform: ${scale} ${rotate} ${translateX} ${skewX}</p>
    <p> transform: ${scale} ${rotate} ${translateX} ${skewX}</p>
    `
    deletestr('scale(0)')
    deletestr('rotate(0deg)')
    deletestr('translateX(0px)')
    deletestr('skewX(0deg)')
    divChange.style.transform = `${scale} ${rotate} ${translateX} ${skewX}`

}

function deletestr(str){
    if(msgOutput.innerText.includes(str)){
        let newms = msgOutput.innerText.replaceAll(str, '') 
        msgOutput.innerText = newms
    }
}

function transform(e) {
    displayDOM(e, () => {
        createInputs(
                        4, 
                        {title: 'Scale:', type: 'input', id: 'input1', min: '0', max: 10, value: 1 },
                        {title: 'Rotate:', type: 'input', id: 'input2', min: 0, max: 360,value: 0 },
                        {title: 'TranslateX:', type: 'input', id: 'input3', min: -500, max: 500, value: 0  },
                        {title: 'SkewX:', type: 'input', id: 'input4', value: 0},
                    )
    }, {type: 'div', cls: 'divChange'})
}

function inputsChangeTransform() {  
    const inputs = Array.prototype.slice.call(arguments)
    inputs.forEach( e => e.addEventListener('keyup', msgTransform) )
}
