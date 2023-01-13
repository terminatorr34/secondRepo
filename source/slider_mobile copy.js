
const matchMedia2 = window.matchMedia('(max-width:479px)')
if (matchMedia2.matches) {

    const sliderLine1 = document.querySelector('.wraper__slider'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        sliderDots = document.getElementsByClassName('slider-button1'),
        sliderImages = document.querySelectorAll('.slider-columns');
    console.log(sliderImages.length)
    console.log(sliderImages);
    let width1;


    // Init1  делает адптивной ширину ограничивающего контейнера. каждый раз когда изменяется ширина окна мы получаем новое значение wigth1 (при помощи offsetWidth) Далее мы берем ширину окна как ширину одного слайда. умножаем ширину на количество сладйов и получаем общую ширину слайдера. также мы делаем ширину каждой картинке равной ширине ограниччивающего контейнера.

    function init1() {
        width1 = document.querySelector('.pictures').offsetWidth;
        console.log(width1)
        sliderLine1.style.width = width1 * sliderImages.length + 'px';

        sliderImages.forEach(Element => {
            Element.style.width = width1 + 'px';
            Element.style.height = 'auto';
        }
        )
        rollSliderRight();
    }
    init1();
    window.addEventListener('resize', init1)


    count1 = 0;
    arrowRight.addEventListener('click', function () {

        if (count1 < sliderImages.length - 1)
            count1++
        else if (count1 >= sliderImages.length - 1)
            count1 = 0
        // else if (count1 == sliderImages.length)
        //     count1 = 0;

        else
            count1 = 1;
        console.log(count1)
        rollSliderRight();
    })



    function rollSliderRight() {
        sliderLine1.style.transform = 'translate(-' + count1 * width1 + 'px)';

    }


    arrowLeft.addEventListener('click', function () {

        if (count1 <= 0) {
            count1 = sliderImages.length - 1;
            console.log(count1)
            rollSliderLeft();
        }
        else if (count1 > 0 && count1 <= sliderImages.length - 1) {
            count1--;
            // else if(count1=sliderImages.length)
            //     count1--;
            console.log(count1)
            rollSliderLeft();
        }
        // else if (count1==sliderImages.length) {
        //     count1=sliderImages.length-1;
        //     console.log(count1)
    })

    function rollSliderLeft() {
        sliderLine1.style.transform = 'translate(-' + count1 * width1 + 'px)';
    }

    // let position = 0,
    //     dotIndex = 0;



}

    // свайпер
const sliderLine2 = document.querySelector('.wraper__slider');

sliderLine2.addEventListener('touchstart', handleTouchStart, false);
sliderLine2.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {  // функция возвращает кооржинаты первого касания event - любое событие которое происходит в дом
    // console.log(event)

    const firstTouch = event.touches[0]; // touches - это свойство события event обозначает касание мышкой или пальцем
    // console.log(firstTouch) // теперь мы получили пармертры события touch - там есть координаты касания 
    x1 = firstTouch.clientX; // теперь х1 у1 - это координаты первого касания
    y1 = firstTouch.clientY;
    // console.log(x1,y1) 

}
function handleTouchMove(event) {
    if (!x1 || !y1) {  // проверка - если никого движения не произошло
        return false
    }
    const lastTouch = event.touches[0];
    let x2 = lastTouch.clientX; // координаты движения касания
    let y2 = lastTouch.clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    const rollSliderRight2 = () => {
        sliderLine2.style.transform = 'translate(-' + count1 * width1 + 'px)';

    }

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // console.log('влево или вправо')
        if (x2 > x1) {
           rollSliderRight()
            console.log('вправо')
        }
        else { (console.log('влево')) }
    }
    else
        console.log('вверх или вниз')
    // console.log(xDiff, yDiff);
}
