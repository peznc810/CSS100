const menu = document.querySelector('.menu');
const line = document.querySelectorAll('.line');

menu.addEventListener('click', (event) => {
  menu.classList.toggle('active')
  line.forEach((item) => {
    item.classList.remove('no-animation')
  })
})
