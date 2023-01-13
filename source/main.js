const images = document.querySelectorAll('.slider .slider-line img');
const sliderline = document.querySelector('.slider-line');

let count = 0;
let width;
let count1 = images.length;

function init() {
    width = document.querySelector('.slider').offsetWidth; //метод offsetWidth возвращает ширину в пикселях
    sliderline.style.width = width * images.length + 'px'; // делаем ширину слайдера равной сумме ширин всех картинок, умножаем ширину ограничивающего слайдера на количество кортинок (это соотвествует свойтсву length коллекции images)
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });  // мы делаем ширину всех картинок равной ширине ограничивающего слайдера, для этого мы проходим по всем картинкам коллекции images и приравниаем ширину к ширине слайдера
    rollSlider();
}
window.addEventListener('resize', init); // для того чтобы функция работала не только при перезагрузке страницы на F5, а сразу при изменении страницы мы вешаем событие рисайз - при ресайз запускаем функцию инит для window
init();

document.querySelector('.slider__next').addEventListener('click', function () {
    count++; console.log(count);
    if (count > images.length - 1)
        count = 0;
    else if (count == images.length)
        count = 0;
    rollSlider();
});

function rollSlider() {
    sliderline.style.transform = 'translate(-' + count * width + 'px)';
}
// слайдер вращается влево
function rollSlider1() {
    sliderline.style.transform = 'translate(-' + count1 * width + 'px)';
}
// слайдер вращается вправо
document.querySelector('.slider__prev').addEventListener('click', function () {

    if (count1 <= 0 || count == images.length) {
        count1 = images.length - 1;
        rollSlider1();
    }
    else
        count1--; console.log(count1);
    rollSlider1();

})
// функция запускает обе кнопки



const mainForm = document.forms.mainForm;
let userPhoto = mainForm.elements.photo;
const userName = mainForm.elements.userName;
const userTextarea = mainForm.elements.inputTextarea;
const userMail = mainForm.elements.mail;
const userPhone = mainForm.elements.phone;
const userCheckbox = mainForm.elements.inputCheckbox;
const inputCheckbox = mainForm.inputCheckbox;
const userNamePlaceholder = userName.placeholder;

//валдиция полей текст текстареа, - офкус и блюр

userName.addEventListener("focus", function (e) {
    userName.placeholder = '';
})  // при наведении focus мы полуваем пустую строку в поле ввода

userName.addEventListener("blur", function (e) {
    userName.placeholder = userNamePlaceholder;
}) // в момент потери фокуса плейсхолдер снова полуает исходное значение "имя"

const userMailPlaceholder = userMail.placeholder;
const userPhonePlaceholder = userPhone.placeholder;
const userPhoneTextarea = userTextarea.placeholder;

userMail.addEventListener("focus", function (e) {
    userMail.placeholder = '';
})
userMail.addEventListener("blur", function (e) {
    userMail.placeholder = userMailPlaceholder;
})

userPhone.addEventListener("focus", e = () => {
    userPhone.placeholder = '';
})

userPhone.addEventListener("blur", e = () => {
    userPhone.placeholder = userPhonePlaceholder;
})

userTextarea.addEventListener("focus", e = () => {
    userTextarea.placeholder = '';
})
userTextarea.addEventListener("blur", e = () => {
    userTextarea.placeholder = userPhoneTextarea;
})

// повесили на блюр на фокус тень и подсветка красного поля , а если блюр то все эффекты пропадают и возвращается текст placehodler

// функция валидация формы 
function validation(form) {

    function createError(input) {
        const parent = input.parentNode;
        parent.classList.add('error');
    }

    function removeError(input) {
        const parent = input.parentNode;
        console.log(parent)
        if (parent.classList.contains('error')) {
            parent.classList.remove('error');
        }
    }

    let result = true
    const mainForm = document.forms.mainForm;

    const allInputs = form.querySelectorAll('.want__form-item'); //проходим по нашей форме т.к. form = this = documents.forms.mainForm и каждый найденный класс . want__form-item выводим в консоль. 
    // та же скамая запись при помощи foreach:  form.querySelectorAll('.want__form-item').foreach(input = >{console.log(input)})    
    // console.log(userPhoto.value)

    allInputsUs = mainForm.elements.photo; // перебираем всем поля с менем фото
    for (const inputUs of allInputsUs)
        if (inputUs.value == '' && inputUs.placeholder == 'фото') {
            alert('загрузите фото')
        }

    for (const input of allInputs) {
        // console.log(input); 
        input.addEventListener('blur', function (rem) {  // для блюра вешаем ремувэррор, чтобы в момент расфокуса сразу исчезала красная рамка
            removeError(input);
        })

        if (input.value == '') {

            createError(input);
            result = false;
        }
    }

    return result;
}


document.forms.mainForm.addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {   // здесь вместо this  можно было вставить document.forms.mainform
        alert('форма отправлена успешно')
    }
})


// функция удаляет переносы строк при адаптиве max-width 1280px

    const mediaQuery = window.matchMedia('(max-width: 1280px)') // включаем медиазапрос  
    if (mediaQuery.matches) { 
        
        const deleteBr = () => {// метод matches проверяет тру или фалс для max-width 1280Px
        const text = document.querySelectorAll('.shooting__section>.text-todelete-br>br, .shooting__section>div>.text-todelete-br>br, .shooting__section>div>.shooting__container>.text-todelete-br>br '); // выбираем все элементы с текстом и переносом строки br

        for (const input of text) {
            input.remove()
        }
        // alert('Media Query Matched!')
    }
window.addEventListener('resize', deleteBr);
}



const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

console.log(headerBurger);
console.log(headerMenu);

headerBurger.addEventListener('click', function togg(event) {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})


// Функция удаляет поле отправить из формы и добавляет это же поле в соседнюю колонку для правильного порядка форм при разрешении 480px. свойство Order d css применить нельзя т.к. изначально поля разбиты на колонки и те поля которые надо помемнять местами оказались в разных колонках.

const matchMedia3 = window.matchMedia('(max-width:479px)')
if (matchMedia3.matches) {

    const orderInput = () => {
        const newColumn = document.createElement('div');
        newColumn.classList.add('newclass')
    const columns1 = document.querySelectorAll('.column')
    columns1[0].after(newColumn)


        const submitInput = document.querySelector('.want__form-item-button').remove();
        console.log(submitInput)

        const columns = document.getElementsByClassName('column')
        console.log(columns)
        newColumn.insertAdjacentHTML('afterbegin',
            ` <button name="inputSubmit" type="submit"
          class="want__form-item-button">Отправить</button>
        `
        )
        document.querySelector('.checkbox').remove();
        newColumn.insertAdjacentHTML('afterbegin',
            `
        <div class="checkbox"><input name="inputCheckbox" type="checkbox" checked="false" tabindex="6" checked><span>Согласен на обработку персональных данных<span> </div>
        `)
        document.querySelector('.input_box-textarea').remove();
        newColumn.insertAdjacentHTML('afterbegin',
            ` <div class="input_box input_box-textarea"> <textarea name="inputTextarea" type="textarea"
        placeholder="Расскажите подробнее" class="want__form-item"
        tabindex="5"></textarea>
                </div>
        `)
        document.querySelector('.input_box-mail').remove();
        columns[0].insertAdjacentHTML('beforeend',
            ` <div class="input_box input_box-mail"> <input name="mail" type="email" placeholder="email"
        class="want__form-item" tabindex="2"></div>
        `)

        document.querySelector('.input_box-photo-background').remove();
        columns[0].insertAdjacentHTML('beforeend',
        ` <div class="input_box input_box-photo-background">
        <input name="photo" type="file" placeholder="фото" class="want__form-item" value=""
            tabindex="4" multiple>
    </div>
    `)

    document.querySelector ('.want__form-copy').remove();
    columns[0].insertAdjacentHTML('beforeend',
        `<input name="photo" type="input" value="" placeholder="photo" class=" want__form-copy"
                                    disabled>
    `)    
    // columns[2].remove()

    }

// console.log(newColumn)
    orderInput();
    // window.addEventListener('resize', orderInput);

    document.querySelector('.text-todelete-br-delete-in-mobile').remove();
}

