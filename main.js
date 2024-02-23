const calcDays = document.querySelector('#calcDays')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')

let diarias = document.querySelector('#diarias')
let valor = document.querySelector('#valor')
let h2 = document.querySelector('#calcResult')


calcDays.addEventListener('click', handleCalcDays)
closeModal.addEventListener('click', handleCloseModal)

function handleCalcDays() {
    const total = diarias.value * valor.value
    h2.innerText = `R$ ${total}`
    toggleScreen()
}

function handleCloseModal() {
    diarias.value = ""
    valor.value = ""
    toggleScreen()
}

function toggleScreen() {
    modal.classList.toggle('close')
}