// pop-up на странице service. при нажатии на плюс появляется меню для 4ех различных блоков
const plus1 = document.querySelector('.menu-item-plus1')
const popup1 = document.querySelector('.menu-item-popup1')
const weImplement1 = document.querySelector('.menu-items-column1')
const rectangle1 = document.querySelector('.rectangle1');
const menuText1 = document.querySelector('.menu-item-text1');

const plus2 = document.querySelector('.menu-item-plus2')
const popup2 = document.querySelector('.menu-item-popup2')
const weImplement2 = document.querySelector('.menu-items-column2')
const rectangle2 = document.querySelector('.rectangle2');
const menuText2 = document.querySelector('.menu-item-text2');

const plus3 = document.querySelector('.menu-item-plus3')
const popup3 = document.querySelector('.menu-item-popup3')
const weImplement3 = document.querySelector('.menu-items-column3')
const rectangle3 = document.querySelector('.rectangle3');
const menuText3 = document.querySelector('.menu-item-text3');

const plus4 = document.querySelector('.menu-item-plus4')
const popup4 = document.querySelector('.menu-item-popup4')
const weImplement4 = document.querySelector('.menu-items-column4')
const rectangle4 = document.querySelector('.rectangle4');
const menuText4 = document.querySelector('.menu-item-text4');

plus1.addEventListener('click', function (event) {
    popup1.classList.toggle('active')
    plus1.classList.toggle('active')
    weImplement1.classList.toggle('active')
    rectangle1.classList.toggle('active')
    menuText1.classList.toggle('active')
    
})
plus2.addEventListener('click', function (event) {
    popup2.classList.toggle('active')
    plus2.classList.toggle('active')
    weImplement2.classList.toggle('active')
    rectangle2.classList.toggle('active')
    menuText2.classList.toggle('active')
    
})
plus3.addEventListener('click', function (event) {
    popup3.classList.toggle('active')
    plus3.classList.toggle('active')
    weImplement3.classList.toggle('active')
    rectangle3.classList.toggle('active')
    menuText3.classList.toggle('active')
    
})
plus4.addEventListener('click', function (event) {
    popup4.classList.toggle('active')
    plus4.classList.toggle('active')
    weImplement4.classList.toggle('active')
    rectangle4.classList.toggle('active')
    menuText4.classList.toggle('active')
    
})


