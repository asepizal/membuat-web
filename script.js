document.addEventListener('DOMContentLoaded', function () {
  const navRow = document.querySelector('.nav__row')
  const navToggle = document.querySelector('.nav__toggle')
  navToggle.addEventListener('click',() => {
    navToggle.classList.toggle('open')
    navRow.classList.toggle('open')
  })

  function changeNavbarStyle() {
    const navbar = document.querySelector('.nav')
    const scrollY = window.scrollY

    if(scrollY > 40) {
      navbar.style.backgroundColor = '#000000cc'
    } else {
      navbar.style.backgroundColor = 'transparent'
    }
  }

  window.addEventListener('scroll', changeNavbarStyle)
});
