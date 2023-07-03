function calcBasketPrice(){
    const basketWrapper = document.querySelector('.basket__items')
    const productInBasket = basketWrapper.querySelectorAll('.basket__item')
    let totalBasketPrice = document.querySelector('.total-basket__price span')
    let totalPrice = 0
    productInBasket.forEach(item =>{
        const productPrice = item.querySelector('.item-basket__price span').innerText
        const productQuantity = item.querySelector('.quantity__input input').value
        totalPrice += parseInt(productPrice) * parseInt(productQuantity)
    })
    totalBasketPrice.innerText = totalPrice
}