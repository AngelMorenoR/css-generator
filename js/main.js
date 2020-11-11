

const opts = document.querySelectorAll('.btn')

window.onload = main;

addScripts('./js/burger.js', 785)

function main () {
    for (let i = 0; i < opts.length; i++) {
        opts[i].addEventListener('click', listenerBtns)
    }
}

function listenerBtns(e) {
    let la = document.querySelectorAll('.btn')
    la.forEach( e => e.style.border = '')
    const optionClick = e.path[0].innerHTML.toLowerCase()
    e.path[0].style.border = '1px solid black'
    if(container.innerText == 'choose an option') {
        gsap.to('.bg', { x: -1500, duration: .4})
        gsap.to('.choose', {y: 200, opacity: 0, duration: .5})
        
    }
    switch (optionClick) {
        case 'box shadow':
            boxShadow(e);
            break;
        case 'border radius':
            borderRadius(e)
            break;
        case 'rgba':
            rgba(e)
            break;
        case 'text shadow':
            textShadow(e)
            break;
        case 'gradient':
            gradient(e)
            break;
        case 'transform':
            transform(e)
            break;
        case 'multipli columns':
            column(e)
            break;
        default:
            break;
    }    
}

  