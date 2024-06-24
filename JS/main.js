'use strict'

const tabItem = document.querySelectorAll('.tabs_btn_item')
const tab_content = document.querySelectorAll('.tabs_content_item')

tabItem.forEach(function(element){
    element.addEventListener('click', open)
})

function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs_btn_item--active')
    })

    tab_content.forEach(function(item){
        item.classList.remove('tabs_content_item--active')
    })

    tabTarget.classList.add('tabs_btn_item--active')
    document.querySelector(`#${button}`).classList.add('tabs_content_item--active')
}


const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
});
