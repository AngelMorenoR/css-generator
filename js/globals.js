const container = document.querySelector('.container');
let isAnimated = false,
form,
msgOutput,
group,
// element to animate
divAniB,
txtContentB,
// animaciotions tween
tweenText,
tweenOutput,
tween,
tween1,
tweenTxtSh,
tweemTiCont,
tweenTxtColum;
start = 220
function displayDOM(e, call, arr) {
    if(isAnimated) reverseAnimated();

    setTimeout( async function(){

        await removeChilds(container)
        await createDOM(arr.type, arr.cls, arr.txt);
        await createVars()

        animated(e);

        call()

        updateInputs(e)
        copy()
        animateGroup()
    }, start) 

}
function updateInputs(e){
    const typeClick = e.path[0].innerHTML.toLowerCase()
    switch (typeClick) {
        case 'box shadow':
            inputsChangeShadow(input1, input2, input3, input4, input5)
            break;
        case 'border radius':
            inputsChangeBorder(input1, input2, input3, input4)
            break;
        case 'rgba':
            inputsChangeRGBA(input1, input2, input3, input4)
            break;
        case 'text shadow': 
            inputsChangeText(input1, input2, input3, input4, input5)
            listeningInputText(input1)
            break
        case 'gradient':
            inputsChangeGradient(input1, input2, input3, input4, input5)
            break
        case 'transform': 
            inputsChangeTransform(input1, input2, input3, input4)
            break
        case 'multipli columns':
            inputsChangeColumn(input1, input2)
            break
        default:
            break;
    }
}

function createInputs() {
    if(arguments[0] == arguments.length -1){
        for (let i = 1; i <= arguments[0]; i++) {
            let title = arguments[i].title
            group = createDOMEl('div', 'group'),
            title = createDOMEl('h4', title, title),
            input = createDOMEl('input');
            appendElements(form, group)
            appendElements(group, title)
            appendElements(group, input)

            

            setAtrr(input,
                {
                type: arguments[i].type != undefined ? arguments[i].type  : '' ,
                id: arguments[i].id != undefined ? arguments[i].id  : '' ,
                min: arguments[i].min != undefined ? arguments[i].min : '' ,
                max: arguments[i].max != undefined ? arguments[i].max : '',
                step: arguments[i].step != undefined ? arguments[i].step : '',
                value:  arguments[i].value != undefined ? arguments[i].value : '',
                placeholder: arguments[i].placeholder != undefined ? arguments[i].placeholder : ''
                }
                
            )
        }
    }else{
        console.error("don't match")
        return 
    }
}

function createDOM(type, cls, txt = null) {

    return new Promise(res => {
    let part1 = createDOMEl('div', 'part1'),
    titleContainer = createDOMEl('h2', 'title-container', 'modify something!'),
    form = createDOMEl('div', 'form')
    part2 = createDOMEl('div', 'part2'),
    txt1 = createDOMEl('div', 'test txt1'),
    showText = createDOMEl('p', 'show-text', 'text'),
    divCo = createDOMEl('div', 'test div'),
    divAni = createDOMEl(type, cls, txt != null ? txt : null),
    test3 = createDOMEl('div', 'test center'),
    message = createDOMEl('div', 'output', `<h2>Change Something</h2>`)
    appendChildsTest(container, [part1, part2])
    appendChildsTest(part1,  [titleContainer, form])
    appendChildsTest(part2,  [txt1, divCo, test3])
    appendChildsTest(txt1,  [showText])
    appendChildsTest(divCo,  [divAni])
    appendChildsTest(test3,  [message])
    res()
    })
}

function copy() {
    document.querySelector('.output').addEventListener('click',() => {
        let txtcopy = '';
        const val = document.querySelectorAll('.output > p')
        val.forEach((e) => {
            txtcopy += e.innerHTML
        })
        navigator.clipboard.writeText(txtcopy)
        toast()
    })
}

function reverseAnimated(){
    tween.reverse(4)
    tweenText.reverse(0.4)  
    tween1.reverse(0.4)
    tweenOutput.reverse(0.4)
    tweemTiCont.reverse()
    tweenTxtSh.reverse()
    tweemTiCont.reverse()
    isAnimated = false
}

function animated(e) {
    txtContentB.innerHTML = e.path[0].innerHTML
    tween = gsap.to(divChange, {scale: 2,  duration: 0.5, rotation: 360})
    tweenText = gsap.to(txtContentB, {x: 150, duration: 0.5, opacity: 1}) 
    tweenOutput = gsap.to('.output', {scale: 1,  duration: 0.5, opacity: 1}) 
    tweemTiCont = gsap.fromTo('.title-container', {x: -300, opacity: 0}, {x:0, opacity: 1, duration: .5})
    tweenTxtSh = gsap.fromTo('.txt-shadow', {x: 1000, opacity: 0}, {x:0, opacity: 1, duration: .5})
    tweemTiCont = gsap.fromTo('.txt-column', {x: 1000, opacity: 0}, {x:0, opacity: 1, duration: .5})
    isAnimated = true
}
function createVars() {
    return new Promise( res => {
        divChange = document.querySelector('.divChange');
        txtContentB = document.querySelector('.show-text');
        msgOutput = document.querySelector('.output')
        form = document.querySelector('.form')
        group = document.querySelectorAll('.group')
        setTimeout(() => res(), 0)
    })
}


function animateGroup() {
    tween1 = gsap.from(".group", {
        duration: 2,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true
    });
}

