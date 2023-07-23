const menu = document.querySelector('.menu__body')
const btn = document.querySelector('.menu__icon')
const body = document.body
const topicList = document.querySelectorAll('.footer__topic')
const footerTextBlock = document.querySelectorAll('.footer__text-block')
const searchButtons = document.querySelectorAll('.search-block__item')
const input = document.querySelector('.search-block__input')

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')
})

topicList.forEach((elem) => {
  elem.addEventListener('click', () => {
    footerTextBlock.forEach((elem) => {
      if (!event.target.nextElementSibling.classList.contains('open')) {
        elem.classList.remove('open')
        elem.previousElementSibling.classList.remove('open')
      }
      if (!event.target.classList.contains('open')) {
      }
    })
    elem.nextElementSibling.classList.toggle('open')
    elem.classList.toggle('open')
  })
})

searchButtons.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    input.value = event.target.textContent
  })
})
