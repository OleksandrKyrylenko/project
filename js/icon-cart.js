const productBody = document.querySelector('.tabs-product__body')
const basketWrapper = document.querySelector('.basket__items')
productBody.addEventListener('click',toggleBasket)

function toggleBasket(e){
    const targetElement = e.target
    console.log(222);
    if(targetElement.closest('.basket__info') && basketWrapper.children.length > 0){
        document.documentElement.classList.toggle("basket-open");
    }
}