'use strict'
// ====================== Popup =========================
const popupLinks = document.querySelectorAll('.popup__link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')
const button = document.querySelector('.content-modal__button')
button.addEventListener('click', function(){
    button.preventDefault()
})
let unlock = true
const timeout = 400 

if(popupLinks.length > 0){
    body.addEventListener('click', popupClick)
}
function popupClick(e){
    const targetElement = e.target
    if(targetElement.closest('.popup__link')){
        const popupName = targetElement.dataset.popup
        const currentPopup = document.getElementById(popupName)
        popupOpen(currentPopup)
    }
}

const popupCloseIcons = document.querySelectorAll('.popup-close')
if(popupCloseIcons.length > 0){
    body.addEventListener('click', closeClick)
}
function closeClick(e) {
    const el = e.target;
    if (el.classList.contains('popup-close')) {
        const popup = el.closest('.popup');
        popupClose(popup);
    }
}
function popupOpen(currentPopup) {
    if(currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open')
        if(popupActive) popupClose(popupActive,false)
        else bodyLock()
    }
    currentPopup.classList.add('open')
    currentPopup.addEventListener('click', function(e){
        if(!e.target.closest('.modal-items')){
            popupClose(e.target.closest('.popup'))
        }
    })
}
function popupClose(popupActive,doUnnlock = true){
    if(unlock){
        popupActive.classList.remove('open')
        if(doUnnlock){
            bodyUnLock()
        }
    }
} 
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
    
    if(lockPadding.length > 0){
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i]
            el.style.paddingRight = lockPaddingValue
        }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('lock')

    unlock = false
    setTimeout(function () {
        unlock = true
    },timeout)
}
function bodyUnLock(){
    setTimeout(function() {
        if(lockPadding.length > 0){
            for(let i = 0; i < lockPadding.length; i++){
                const el = lockPadding[i]
                el.style.paddingRight = '0px'
            }
        }
        body.style.paddingRight = '0px'
        body.classList.remove('lock')
    },timeout)
    unlock = false
    setTimeout(function() {
        unlock = true
    },timeout)
}
document.addEventListener('keydown',function(e){
    if(e.which === 27){
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})