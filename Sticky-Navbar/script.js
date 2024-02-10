const navbarEl = document.querySelector('.navbar');

const bottomContainerEl = document.querySelector('.bottom-container');

console.log(navbarEl.offsetHeight)
console.log(bottomContainerEl.offsetTop)

window.addEventListener('scroll', (e) => {
  if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add('active')
  } else {
    navbarEl.classList.remove('active')
  }

  if(window.scrollY > 500 ) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
  }
})