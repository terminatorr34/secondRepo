// const forms = () =>{

    
// // валидаця формы 

// const mainForm = document.forms.mainForm;
// let userPhoto = mainForm.elements.photo;
// const userName = mainForm.elements.userName;
// const userTextarea = mainForm.elements.inputTextarea;
// const userMail = mainForm.elements.mail;
// const userPhone = mainForm.elements.phone;
// const userCheckbox = mainForm.elements.inputCheckbox;
// const inputCheckbox = mainForm.inputCheckbox;
// const userNamePlaceholder = userName.placeholder;


// //валидация полей текст текстареа, - офкус и блюр

// userName.addEventListener("focus", function (e) {
//     userName.placeholder = '';
// })  // при наведении focus мы получаем пустую строку в поле ввода

// userName.addEventListener("blur", function (e) {
//     userName.placeholder = userNamePlaceholder;
// }) // в момент потери фокуса плейсхолдер снова полуает исходное значение "имя"

// const userMailPlaceholder = userMail.placeholder;
// const userPhonePlaceholder = userPhone.placeholder;
// const userPhoneTextarea = userTextarea.placeholder;

// userMail.addEventListener("focus", function (e) {
//     userMail.placeholder = '';
// })
// userMail.addEventListener("blur", function (e) {
//     userMail.placeholder = userMailPlaceholder;
// })

// userPhone.addEventListener("focus", e = () => {
//     userPhone.placeholder = '';
// })

// userPhone.addEventListener("blur", e = () => {
//     userPhone.placeholder = userPhonePlaceholder;
// })

// userTextarea.addEventListener("focus", e = () => {
//     userTextarea.placeholder = '';
// })
// userTextarea.addEventListener("blur", e = () => {
//     userTextarea.placeholder = userPhoneTextarea;
// })

// // повесили на блюр на фокус тень и подсветка красного поля , а если блюр то все эффекты пропадают и возвращается текст placehodler

// // функция валидация формы 
// function validation(form) {

//     function createError(input) {
//         const parent = input.parentNode;
//         parent.classList.add('error');
//     }

//     function removeError(input) {
//         const parent = input.parentNode;
//         console.log(parent)
//         if (parent.classList.contains('error')) {
//             parent.classList.remove('error');
//         }
//     }

//     let result = true
//     const mainForm = document.forms.mainForm;

//     const allInputs = form.querySelectorAll('.want__form-item'); //проходим по нашей форме т.к. form = this = documents.forms.mainForm и каждый найденный класс . want__form-item выводим в консоль. 
//     // та же самая запись при помощи foreach:  form.querySelectorAll('.want__form-item').foreach(input = >{console.log(input)})    
//     // console.log(allInputs)

//     allInputsUs = mainForm.elements.photo; // перебираем всем поля с именем фото
//     for (const inputUs of allInputsUs)
//         if (inputUs.value == '' && inputUs.placeholder == 'фото') {
//             alert('загрузите фото')
//         }

//     for (const input of allInputs) {
//         console.log(input);
//         input.addEventListener('blur', function (rem) {  // для блюра вешаем ремувэррор, чтобы в момент расфокуса сразу исчезала красная рамка
//             removeError(input);
//         })

//         if (input.value == '') {

//             createError(input);
//             result = false;
//         }
//     }

//     return result;
// }

// const postData = async (url,data) => { // создаем функцию, которая будет отправлять собранные данные formData на сервер, в качестве арументов выступает url и data. async говорит JS что в функции есть асинхронная операция 
// const res32 = await fetch(url, {
//     method: "POST", 
//     body: data
// })
// return await res32() // await говорит JS О том, что не надо ждать завершения операции return, а сразу выполнить res32, а после этого выполнить return 
// }

// document.forms.mainForm.addEventListener('submit', function (event) {
//     event.preventDefault()
//      // чтобы не перезагружалась страница мы отменяем стандртное поведение браузера
//     const formData = new FormData (mainForm)

//     postData ('http://localhost/')
//     console.log(formData)
    
//     if (validation(this) == true) {   // здесь вместо this  можно было вставить document.forms.mainform
//         alert('форма отправлена успешно')
//         for (elem of this) {
//             elem.value = '';  // после упешной отправки стираются значения всех полей
//         }
//     }
// })


// }

// export default forms;