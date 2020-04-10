/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(createCarousel())

function createCarousel (images) {
  const carousel = document.createElement('div')
    carousel.classList.add('carousel')

  const leftBtn = document.createElement('div')
    leftBtn.classList.add('left-button')
    leftBtn.textContent = '<'
    carousel.appendChild(leftBtn)

  const img1 = document.createElement('img')
    img1.src = '../assets/carousel/mountains.jpeg'
    img1.classList.add('slide', 'showing')
    carousel.appendChild(img1)

  const img2 = document.createElement('img')
    img2.src = '../assets/carousel/computer.jpeg'
    img2.classList.add('slide')
    carousel.appendChild(img2)

  const img3 = document.createElement('img')
    img3.src = '../assets/carousel/trees.jpeg'
    img3.classList.add('slide')
    carousel.appendChild(img3)

  const img4 = document.createElement('img')
    img4.src = '../assets/carousel/turntable.jpeg'
    img4.classList.add('slide')
    carousel.appendChild(img4)

  const rightBtn = document.createElement('div')
    rightBtn.classList.add('right-button')
    rightBtn.textContent = '>'
    carousel.appendChild(rightBtn)
  

  return carousel
}

document.addEventListener("DOMContentLoaded", () => {
  const slidesNL = document.querySelectorAll('.carousel img')
  const slides = Array.from(slidesNL)

  let slideIndex = 0;

  const next = document.querySelector('.right-button')
  const previous = document.querySelector('.left-button')

  function nextSlide() {
    slides[slideIndex].className = 'slide'
    slideIndex = (slideIndex + 1) % slides.length
    console.log((slideIndex))
    slides[slideIndex].className = 'slide showing'
}

  function previousSlide() {
    slides[slideIndex].className = 'slide'
    slideIndex = (slideIndex - 1) % slides.length
    if (slideIndex == -1) { 
      slideIndex = slides.length-1; 
    } 
    console.log((slideIndex))
    slides[slideIndex].className = 'slide showing'
  }
  function animationL (){  
    gsap.from('.showing', {duration: .7, ease: "back.out(2)", x: 350})
  }
  function animationR (){  
    gsap.from('.showing', {duration: .7, ease: "back.out(2)", x: -350})
  }

  next.addEventListener('click', () => {
    nextSlide()
    animationL()
  });
  previous.addEventListener('click', () => {
    previousSlide()
    animationR()
  })
  

})