const menu = document.querySelector('.menu__body')
const btn = document.querySelector('.menu__icon')
const body = document.body
const topicList = document.querySelectorAll('.footer__topic')
const footerTextBlock = document.querySelectorAll('.footer__text-block')
const searchButtons = document.querySelectorAll('.search-block__item')
const input = document.querySelector('.search-block__input')
const headerButton = document.querySelector('.menu__li button')
const headerItems = document.querySelector('.menu__solutions-items')
const menuArrow = document.querySelector('.menu__arrow')
const leftButton = document.querySelector('.new-phones__arrow-left')
const rightButton = document.querySelector('.new-phones__arrow-right')
const firstLine = document.querySelector('.new-phones__line-1')
const secondLine = document.querySelector('.new-phones__line-2')
const thirdLine = document.querySelector('.new-phones__line-3')
const image = document.querySelector('.new-phones__image img')
const newPhonesRow = document.querySelector('.new-phones__row')

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

headerButton.addEventListener('click', () => {
  headerItems.classList.toggle('active')
  menuArrow.classList.toggle('active')
})

let counter = 1

leftButton.addEventListener('click', () => {
  let height = getComputedStyle(image).height
  if (counter === 1) {
    counter = 3
  } else {
    counter -= 1
  }
  image.setAttribute('src', `images/new-phones-${String(counter)}.png`)
  image.style.height = height

  console.log(counter)

  if (image.getAttribute('src') === 'images/new-phones-1.png') {
    firstLine.classList.add('active')
  } else {
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-2.png') {
    secondLine.classList.add('active')
  } else {
    secondLine.classList.remove('active')
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-3.png') {
    thirdLine.classList.add('active')
  } else {
    thirdLine.classList.remove('active')
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-1.png') {
    firstLine.classList.add('active')
  } else {
    firstLine.classList.remove('active')
  }
})

rightButton.addEventListener('click', () => {
  let height = getComputedStyle(image).height

  if (counter === 3) {
    counter = 1
  } else {
    counter += 1
  }
  image.setAttribute('src', `images/new-phones-${String(counter)}.png`)
  image.style.height = height

  if (image.getAttribute('src') === 'images/new-phones-1.png') {
    firstLine.classList.add('active')
  } else {
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-2.png') {
    secondLine.classList.add('active')
  } else {
    secondLine.classList.remove('active')
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-3.png') {
    thirdLine.classList.add('active')
  } else {
    thirdLine.classList.remove('active')
    firstLine.classList.remove('active')
  }
  if (image.getAttribute('src') === 'images/new-phones-1.png') {
    firstLine.classList.add('active')
  } else {
    firstLine.classList.remove('active')
  }
})
