// pop-up на странице service. при нажатии на плюс появляется меню
const plus = document.querySelector('.menu-item-plus')
const popup1 = document.querySelector('.menu-item-popup1')
const weImplement = document.querySelector('.menu-items-column1')
const rectangle1 = document.querySelector('.rectangle1');


plus.addEventListener('click', function(event){
popup1.classList.toggle('active')
plus.classList.toggle('active')
weImplement.classList.toggle('active')
rectangle1.classList.toggle('active')

})
console.log (plus)

const popupMenu =(menu,plus) => {

}