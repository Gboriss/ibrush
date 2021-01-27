import './css/style'
import './css/reset'

import Flickity from 'flickity'

let select = document.querySelector('.select'),
    listBooks = document.getElementById('books'),
    textField = document.querySelector('.text_field'),
    selectItem = document.querySelectorAll('.select__item')

document.addEventListener('click', function (event) {
    if (select.style.display === 'block') {
        select.style.display = 'none'
    } else {
        select.style.display = 'block'
    }
    if (event.target == listBooks) {
        listBooks.classList.contains('pushed')
    } else {
        selectItem.forEach(function (el) {
            if (el.contains(event.target)) {
                textField.innerHTML = event.target.innerHTML
                textField.style.fontSize = '13px'
                document.querySelector('.select').style.display = ""
            }
        })
    }
})


let mainCarousel = new Flickity( '.main-carousel', {
    wrapAround: true,
    prevNextButtons: false,
})

