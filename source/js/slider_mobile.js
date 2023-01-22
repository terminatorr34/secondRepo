// слайдер для мобильной версии

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
        // console.log(width1)
        sliderLine1.style.width = width1 * sliderImages.length + 'px';

        sliderImages.forEach(Element => {
            Element.style.width = width1 + 'px';
            Element.style.height = 'auto';
        }
        )

    }
    init1();
    window.addEventListener('resize', init1)
    // двигает сайлдер вправо изменяя свойство трансформ
    function rollSliderRight() {
        sliderLine1.style.transform = 'translate(-' + count1 * width1 + 'px)';
    }
    // двигает сайлдер влево изменяя свойство трансформ
    function rollSliderLeft() {
        sliderLine1.style.transform = 'translate(-' + count1 * width1 + 'px)';
    }

    // клик на правую кнопку 
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
        burnSlide(count1)
    })
    // клик на левую кнопку 
    arrowLeft.addEventListener('click', function () {

        if (count1 <= 0) {
            count1 = sliderImages.length - 1;
            // console.log(count1)
            rollSliderLeft();
            burnSlide(count1)
        }
        else if (count1 > 0 && count1 <= sliderImages.length - 1) {
            count1--;
            // console.log(count1)
            rollSliderLeft();
            burnSlide(count1)
        }

    })

    // свайпер
    const sliderLine2 = document.querySelector('.wraper__slider');
    sliderLine2.addEventListener('touchstart', handleTouchStart, false); // touchstart - событие первого касания экрана
    sliderLine2.addEventListener('touchmove', handleTouchMove, false); // touchmove - перемещение пальца или мышки по экрану после первого нажатия

    let x1 = null;
    let y1 = null;
    // функция возвращает координаты первого касания event - любое событие которое происходит в дом
    function handleTouchStart(event) {
        console.log(event)
        const firstTouch = event.touches[0]; // touches - это свойство события event обозначает касание мышкой или пальцем
        // console.log(firstTouch) // теперь мы получили пармертры события touch - там есть координаты касания cleintX и cleintY
        x1 = firstTouch.clientX; // теперь х1 у1 - это координаты первого касания
        y1 = firstTouch.clientY;
        // console.log(x1,y1) 
    }

    const sliderImages1 = document.querySelectorAll('.slider-columns');
    count1 = 0;
    dotindex = 0;
    function handleTouchMove(event) {
        init1()
        if (!x1 || !y1) {  // проверка - если никого движения не произошло
            return false
        }
        // console.log(event)
        const lastTouch = event.touches[0];
        let x2 = lastTouch.clientX; // координаты движения касания
        let y2 = lastTouch.clientY;

        let xDiff = Math.abs(x2 - x1);
        let yDiff = Math.abs(y2 - y1);

        if (xDiff > yDiff || yDiff==0) {
            const right = () => {
                if (count1 < sliderImages1.length - 1) {
                    count1++; console.log(count1); rollSliderRight()
                }
                else if (count1 >= sliderImages1.length - 1) { count1 = sliderImages1.length - 1; console.log(count1); rollSliderRight() }
                else
                    count1 = 1;
                console.log(count1)
                rollSliderRight();
                burnSlide(count1)

            }

            const left = () => {
                if (count1 <= 0) {
                    count1 = 0;
                    console.log(count1)
                    rollSliderLeft();
                }
                else if (count1 > 0 && count1 <= sliderImages1.length - 1) {
                    count1--;
                    // else if(count1=sliderImages.length)
                    //     count1--;
                    console.log(count1)
                    rollSliderLeft();
                    burnSlide(count1)
                }
            }
            console.log(xDiff, yDiff)

            if (x1 > x2) {
                right()
                //    rollSliderRight()
                // console.log('вправо')
            }

            else {
                left()
            }
            x2 = null;
            x1 = null;
            xDiff = 0;
            yDiff = 0;
        }

        else xDiff = 0;
        yDiff = 0; return false;


        // else { (console.log('влево')) }
    }

    const burnSlide = (index) => {
        for (let dot of buttons) {
            dot.classList.remove('slider-button-active');

        }
        buttons[index].classList.add('slider-button-active')
    }

    // переклбчение по индикаторам 
    console.log(document.querySelectorAll('.slider-button1'))
    const buttons = document.querySelectorAll('.slider-button1')

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            sliderLine1.style.transform = 'translate(-' + width1 * index + 'px)';
            dotindex = index;
            burnSlide(dotindex)
        })
    });
window.addEventListener('resize', init1)
window.addEventListener('resize', init1)















