'use strict'
// ====================== Таби =========================
const tabNavItems = document.querySelectorAll('.tabs-product__button')
const tabItems = document.querySelectorAll('.item-tabs__items')
const itemNav = document.querySelector('.tabs-product__nav')
itemNav.addEventListener('click', clickItem)

function clickItem(e) {
    const targetElement = e.target
    let currentActiveIndex
    let newActiveIndex
    if(targetElement.closest('.tabs-product__button')){
        tabNavItems.forEach((tabNavItem, index)=>{
            if(tabNavItem.classList.contains('active')){
                currentActiveIndex = index
                tabNavItem.classList.remove('active')
            }
            if(tabNavItem === targetElement){
                newActiveIndex = index
            }
        })
        targetElement.classList.add('active')
        tabItems[currentActiveIndex].classList.remove('active')
        tabItems[newActiveIndex].classList.add('active')
    }
}