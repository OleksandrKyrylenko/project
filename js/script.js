'use strict'
// ================================== ProductsInfo зберігаю всю необхідну інформацію про поточний товар ================================
// class ProductsInfo {
//     constructor() {
//         this.el = null
//         // this.addEvent = this.addEvent.bind(this)
//     }
    
//     addEvent(e) {
//         const targetElement = e.target
//         if (targetElement.classList.contains('content-item-tabs__button')) {
//             const product = targetElement.closest('.item-tabs__content')
//             const title = product.querySelector('.content-item-tabs__label').textContent
//             const imageWebp = product.querySelector('.image picture source').srcset
//             const imageJpg = product.querySelector('.image picture img').src
//             const price = product.querySelector('.content-item-tabs__price').textContent
//             const weight = product.querySelector('.content-item-tabs__weight').textContent
//             const infoProduct = new CustomEvent('add', {
//                 detail: {
//                     title: title,
//                     imageWebp : imageWebp,
//                     imageJpg : imageJpg,
//                     price: price,
//                     weight: weight,
//                 },
//             })
//             console.log(this.el)
//             this.el.dispatchEvent(infoProduct)
            
//         }
//     }

//     itemProducts() {
//         const itemProduct = document.querySelector('.tabs-product__item')
//         this.el = itemProduct
//         itemProduct.addEventListener('click', this.addEvent.bind(this))
//         return itemProduct
//     }
// } 
// // ================================ CreatePopup додаю в попап необхідний товар з відповідною до нього інформацією ==============================

// class CreatePopup {
//     constructor() {
//         this.product = new ProductsInfo()
//         this.popup = document.querySelector('#popup-1 .modal-items__content')
//         this.product.itemProducts()
//         this.product.el.addEventListener('add', this.render.bind(this))
//     }

//     render(event) {
//         const { title,imageWebp, imageJpg, price, weight } = event?.detail || {}
//         const popupContent = `
//                             <h3 class="content-modal__title">${title}</h3>
//                             <div class="content-modal__item">
//                                 <div class="content-modal__image image">
//                                 <picture>
//                                     <source srcset="${imageWebp}" type="image/webp">
//                                     <img src="${imageJpg}" alt="Image">
//                                 </picture>
//                                 </div>
//                                 <div class="content-modal__info">
//                                     <div class="content-modal__text">
//                                         <p>
//                                             Супер м'ясне задоволення! Велика рубана котлета зі свіжого яловичого м'яса підкорить вас своєю соковитістю, а хрусткі листя салату додають свіжості.
//                                         </p>
//                                     </div>
//                                     <div class="content-modal__storage storage">
//                                         <div class="storage__label">Склад:</div>
//                                         <ul class="storage__list">
//                                             <li class="storage__item">Пшенична булочка</li>
//                                             <li class="storage__item">Котлета з яловичини</li>
//                                             <li class="storage__item">Червона цибуля</li>
//                                             <li class="storage__item">Листя салату</li>
//                                             <li class="storage__item">Гірчичний соус</li>
//                                         </ul>
//                                     </div>
//                                     <div class="content-modal__weight">
//                                         <span>${weight}</span>,ккіл
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="content-modal__footer">
//                                 <div class="content-modal__inner">
//                                     <button id="addToBasket" type="button" class="content-modal__button button popup-close">Додати</button>
//                                     <div class="content-modal__quantity quantity">
//                                         <button type="button" data-action="minus" class="quantity__button quantity__button--minus"></button>
//                                         <div class="quantity__input">
//                                             <input autocomplete="off" type="text" data-counter value="1">
//                                         </div>
//                                         <button type="button" data-action="plus" class="quantity__button quantity__button--plus"></button>
//                                     </div>
//                                 </div>
//                                 <div class="content-modal__price"><span>${price}</span></div>
//                             </div>
//                         `
//         this.popup.innerHTML = popupContent
//     }
// }

// let popup = new CreatePopup()
// popup.render()

// // ============================================== AddToBasket додаю товар до кошика =============================================
// class AddToBasket{
//     constructor(){
//         this.product = new ProductsInfo()
//         this.basket = document.querySelector('.basket__items')
//         this.popup = document.querySelector('#popup-1 .modal-items__content')
//         this.popup.addEventListener('click', this.popupClick.bind(this))
//         this.product.itemProducts()
//         // this.product.el.addEventListener('add', this.renderBasket.bind(this))
//     }
//     popupClick(event){
//         const targetElement = event.target
//         if (targetElement.id === 'addToBasket') {
//             this.product.el.addEventListener('add', this.renderBasket.bind(this))
//         }
//     }
//     renderBasket(event){
//         const { title,imageWebp, imageJpg, price, weight } = event?.detail || {}
//         const counter = this.popup.querySelector('.quantity__input input').value
//         const basketContent = `
//                                 <div class="basket__item item-basket">
//                                     <div class="item-basket__image">
//                                         <picture>
//                                             <source srcset="${imageWebp}" type="image/webp">
//                                             <img src="${imageJpg}" alt="Image">
//                                         </picture>
//                                     </div>
//                                     <div class="item-basket__info">
//                                         <div class="item-basket__label">${title}</div>
//                                         <div class="item-basket__weight">${weight}г</div>
//                                         <div class="item-basket__price">${price} грн</div>
//                                     </div>
//                                     <div class="item-basket__quantity quantity">
//                                         <button type="button" data-action="minus" class="quantity__button quantity__button--minus"></button>
//                                         <div class="quantity__input">
//                                             <input autocomplete="off" data-counter type="text" value="${counter}">
//                                         </div>
//                                         <button type="button" data-action="plus" class="quantity__button quantity__button--plus"></button>
//                                     </div>
//                                 </div>
//                             `
//         this.basket.insertAdjacentHTML('beforeend',basketContent)
//     }
// }
// let basket = new AddToBasket()


// basket.renderBasket()

const itemProducts = document.querySelector('.tabs-product__item')
itemProducts.addEventListener('click', function(e){
    const targetElement = e.target
    if(targetElement.classList.contains('content-item-tabs__button')){
        const product = targetElement.closest('.item-tabs__content')
        const id = product.dataset.id
        const popup = document.querySelector('#popup-1 .modal-items__content')
        createPopup(product,popup,id)
    }
})

function createPopup(product,popup,id){
    const title = product.querySelector('.content-item-tabs__label').textContent
    const image = product.querySelector('.image picture')
    const price = product.querySelector('.content-item-tabs__price span').textContent
    const weight = product.querySelector('.content-item-tabs__weight span').textContent
    const popupContent = `
                            <h3 class="content-modal__title">${title}</h3>
                            <div data-id="${id}" class="content-modal__item">
                                <div class="content-modal__image image">
                                    ${image.outerHTML}
                                </div>
                                <div class="content-modal__info">
                                    <div class="content-modal__text">
                                        <p>
                                            Супер м'ясне задоволення! Велика рубана котлета зі свіжого яловичого м'яса підкорить вас своєю соковитістю, а хрусткі листя салату додають свіжості.
                                        </p>
                                    </div>
                                    <div class="content-modal__storage storage">
                                        <div class="storage__label">Склад:</div>
                                        <ul class="storage__list">
                                            <li class="storage__item">Пшенична булочка</li>
                                            <li class="storage__item">Котлета з яловичини</li>
                                            <li class="storage__item">Червона цибуля</li>
                                            <li class="storage__item">Листя салату</li>
                                            <li class="storage__item">Гірчичний соус</li>
                                        </ul>
                                    </div>
                                    <div class="content-modal__weight">
                                        <span>${weight}</span>,ккіл 430
                                    </div>
                                </div>
                            </div>
                            <div class="content-modal__footer">
                                <div class="content-modal__inner">
                                    <button id="addToBasket" type="button" class="content-modal__button button popup-close">Додати</button>
                                    <div class="content-modal__quantity quantity">
                                        <button type="button" data-action="minus" class="quantity__button quantity__button--minus"></button>
                                        <div class="quantity__input">
                                            <input autocomplete="off" type="text" data-counter value="1">
                                        </div>
                                        <button type="button" data-action="plus" class="quantity__button quantity__button--plus"></button>
                                    </div>
                                </div>
                                <div class="content-modal__price"><span>${price}</span> грн</div>
                            </div>
                        `
    popup.innerHTML = popupContent
}
