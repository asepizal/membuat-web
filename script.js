document.addEventListener('DOMContentLoaded', function () {
  const navRow = document.querySelector('.nav__row')
  const navToggle = document.querySelector('.nav__toggle')
  navToggle.addEventListener('click',() => {
    navToggle.classList.toggle('open')
    navRow.classList.toggle('open')
  })
});
