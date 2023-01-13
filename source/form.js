const mainForm = document.forms.mainForm;
let userPhoto = mainForm.elements.photo;
const userName = mainForm.elements.userName;
const userTextarea = mainForm.elements.inputTextarea;
const userMail = mainForm.elements.mail;
const userPhone = mainForm.elements.phone;
const userCheckbox = mainForm.elements.inputCheckbox;
const inputCheckbox = mainForm.inputCheckbox;
const userNamePlaceholder = userName.placeholder;



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



