// функция удаляет переносы строк при адаптиве max-width 1280px
const deleteBr =() =>{
const mediaQuery = window.matchMedia('(max-width: 1280px)') // включаем медиазапрос  
if (mediaQuery.matches) {  // метод matches проверяет тру или фалс для max-width 1280Px
    const text = document.querySelectorAll('.shooting__section>.text-todelete-br>br, .shooting__section>div>.text-todelete-br>br, .shooting__section>div>.shooting__container>.text-todelete-br>br '); // выбираем все элементы с текстом и переносом строки br

for (const input of text) {
    input.remove()}
  alert('Media Query Matched!')
}
}

window.addEventListener('resize', deleteBr); // чтобы функция звпускалась при каждом изменении ширины экрана






// console.log(text)
// console.log(document.querySelectorAll('br'))
// console.log(text)

// text.forEach(element => console.log((element.querySelectorAll('br').outerHTML="")))

// text.forEach(element => {console.log(element.innerHTML)
    
// });
// console.log(text2)
    
// const text1 = document.querySelectorAll('.shooting__section>.text-todelete-br, .shooting__section>div>.text-todelete-br, .shooting__section>div>.shooting__container>.text-todelete-br ')
// text1.forEach(element => console.log(element.innerHTML))



// const text1 = document.querySelectorAll('.text');
// text1.forEach(element => console.log(element.innerHTML))

// console.log(text.innerHTML);