//obtener medida del contenedor

import './animation.js'

const $slideWidth = document.querySelector('.testomonios-contenido').clientWidth
const $slides = document.querySelectorAll('.testomonios-contenido')
const $btnNext = document.querySelector('#next')
const $btnPrev = document.querySelector('#prev')
const numSlides = $slides.length
$btnPrev.classList.add('blocked')

let currentSlide = 1
let wn = $slideWidth  
let wp = 0
let count = 0

function animation(pixeles){
  return [
    { transform: `translateX(-${pixeles}px)`},
  ]
}

function animationTime(time){
  return { duration: time, fill: 'forwards'}
}

// console.log($slides.length)
function handleNextSlide(e){
  e.preventDefault()
  count++
  console.log(count)
    count <= 0 ?  $btnPrev.classList.add('blocked') :  $btnPrev.classList.remove('blocked')
    count > (numSlides - 2) ?  $btnNext.classList.add('blocked') :  $btnNext.classList.remove('blocked')
    const $currentSlide = document.querySelector(`#slide-${currentSlide}`)
    const $nextSlide = document.querySelector(`#slide-${currentSlide+1}`)
    if(currentSlide < $slides.length ){
        $currentSlide.animate( animation(wn), animationTime(300))
        $nextSlide.animate( animation(wn), animationTime(250))
        currentSlide+=1
        wn+= $slideWidth
        wp+= $slideWidth
    }
  
}

function handlePrevSlide(e){
  e.preventDefault()
    count--
    console.log(count)
    count <= 0 ?  $btnPrev.classList.add('blocked') :  $btnPrev.classList.remove('blocked')
    count < (numSlides - 1) ?  $btnNext.classList.remove('blocked') :  $btnNext.classList.add('blocked')
    
    const $currentSlide = document.querySelector(`#slide-${currentSlide}`)
    const $prevSlide = document.querySelector(`#slide-${currentSlide-1}`)
    if(currentSlide > 1 ){
        const r = wp - $slideWidth
        $currentSlide.animate( animation(0), animationTime(300))
        $prevSlide.animate( animation(r), animationTime(250))
        currentSlide-=1
        wp-= $slideWidth
        wn-= $slideWidth
    }
   
}

$btnNext.addEventListener('click', handleNextSlide)
$btnPrev.addEventListener('click', handlePrevSlide)

