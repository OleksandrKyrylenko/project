'use strict'
const eventContainer = document.getElementById('popup-1')
eventContainer.addEventListener('click', products)
const productCard = document.querySelector('.basket__items')

function products(e){
    const targetElement = e.target
    let basket
    if(targetElement.id === 'addToBasket'){
        const productCard =  targetElement.closest('.modal-items__content')
        basket = getCurrentInfoProduct(productCard)
    }
    if(basket){
        const itemInCart = productCard.querySelector(`[data-id="${basket.id}"]`)
        if(itemInCart){
            let counterElement = itemInCart.querySelector('.quantity__input input')
            console.log(counterElement);
            counterElement.value = parseInt(counterElement.value) + parseInt(basket.counter)
        }else{
            const basketContent = `
                                    <div data-id="${basket.id}" class="basket__item item-basket">
                                        <div class="item-basket__image">
                                            <picture>
                                                <source srcset="${basket.imgWebp}" type="image/webp">
                                                <img src="${basket.imgJpg}" alt="Image">
                                            </picture>
                                        </div>
                                        <div class="item-basket__info">
                                            <div class="item-basket__label">${basket.title}</div>
                                            <div class="item-basket__weight">${basket.weight}г</div>
                                            <div class="item-basket__price"><span>${basket.price}</span> грн</div>
                                        </div>
                                        <div class="item-basket__quantity quantity">
                                            <button type="button" data-action="minus" class="quantity__button quantity__button--minus"></button>
                                            <div class="quantity__input">
                                                <input autocomplete="off" data-counter type="text" value="${basket.counter}">
                                            </div>
                                            <button type="button" data-action="plus" class="quantity__button quantity__button--plus"></button>
                                        </div>
                                    </div>
                                `
            productCard.insertAdjacentHTML('beforeend', basketContent)
        }
        toggleCartStatus()
        calcBasketPrice()
    }
}

function getCurrentInfoProduct(productCard){
    const productInfo = {
        title : productCard.querySelector('.content-modal__title').textContent,
        imgJpg : productCard.querySelector('.content-modal__image picture img').src,
        imgWebp : productCard.querySelector('.content-modal__image picture source').srcset,
        price : productCard.querySelector('.content-modal__price span').textContent,
        weight : productCard.querySelector('.content-modal__weight span').textContent,
        counter : productCard.querySelector('.quantity__input input').value,
        id: productCard.querySelector('.content-modal__item').dataset.id
    }
    return productInfo
}

// let prod = products()
// console.log(prod);