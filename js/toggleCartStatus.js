'use strict'
const basketCount = document.querySelector('.basket__count span')
const basketContent = document.querySelector('.basket__inner')

function toggleCartStatus(){
    const basketWrapper = document.querySelector('.basket__items')
    const cartEmpty = document.querySelector('.basket__empty')

    if(basketWrapper.children.length > 0){
        cartEmpty.classList.add('none')
        basketContent.classList.remove('none')
        basketCount.innerText = basketWrapper.children.length
    }
    else {
        cartEmpty.classList.remove('none')
        basketContent.classList.add('none')
        basketCount.innerText = basketWrapper.children.length
    }
}

