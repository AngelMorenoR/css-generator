function hexToRgb(hex){
    
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    
    if ((hex.length < 2) || (hex.length > 6)) {
        return false;
    }
    
    var values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return false;
    }
    
    
    return [r, g, b];
}

function addScripts(src, size){
    
    if(window.innerWidth <= size){
        const script = document.createElement('script')
        script.setAttribute('src', src)
        document.head.appendChild(script)
    }
}

function appendChildsTest(parent, childs = []) {
    
    for (let i = 0; i < childs.length; i++) {
        const child = childs[i];
        parent.appendChild(child)
    }
}
function appendElements(parent, child) {
    parent.appendChild(child)
}
function createDOMEl(type, cls, txt){
    let ele;
    if(type != undefined){
        ele = document.createElement(type);
        if(cls != undefined){
            if(cls.includes(' ')){
                clases = cls.split(' ')
                clases.forEach((e) => {
                    ele.classList.add(e);
                })
            }else{
                ele.classList.add(cls);
            }
        }
        if(txt != undefined){
            ele.innerHTML = txt;
        }
    }else{
        console.error('Type: must not be empty or invalid');
    }
    return ele;
}

function removeChilds(parent) {

    return new Promise( resolve => {
        setTimeout(() => {
            parent.innerHTML = '';
             resolve()
        }, 100)
    })
    
}
function setAtrr(ele, props) {
    if(ele != undefined && props != undefined){
        for (const key in props) {
            ele.setAttribute(key, props[key] )
        }
    }else{
        console.error('missing an argument')
    }   
}

function listeningInputText(inpu) {

    inpu.addEventListener('keyup', () => {
        document.querySelector('.txt-shadow').innerHTML = inpu.value
    })
}


function toast() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
      })
      
      Toast.fire({
        icon: 'success',
        title: 'copied!',
    })
}
