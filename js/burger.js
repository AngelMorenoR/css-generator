const burger = document.querySelector('.burger')
const op = document.querySelector('.options')
const opTi = document.querySelector('.options-title')
burger.addEventListener('click', () => {
    op.classList.toggle('toggle')
})
opTi.addEventListener('click', () => {
    op.classList.toggle('toggle')
})
