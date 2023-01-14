//Obtener elementos

const $testimonios = document.querySelector('.testimonios')
const $img = document.querySelector('.imgHero')
const $square = document.querySelector('.square')
const $figure = document.querySelector('.figure')
const $button = document.querySelector('#activeAnimation')

const $elementos = [$testimonios, $img, $square, $figure]
$elementos.map($el => $el.style.visibility = 'hidden')

function activeAnimation(e){
    e.preventDefault()
    $img.classList.add('animate__slideInDown', 'animate__slow')
    $figure.classList.add('animate__slideInDown', 'animate__slow')
    $square.classList.add('animate__slideInUp' , 'animate__slow')
    $testimonios.classList.add('animate__slideInRight', 'animate__slow')
    $elementos.map($el => $el.style.visibility = 'visible')
}

$button.addEventListener('click', activeAnimation)