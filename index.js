const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.card_wrapper'),
    dots = document.querySelectorAll('.sliders');

let index = 0;

const activeSlide = n => {
    for (card_wrapper of slides) {
        card_wrapper.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (sliders of dots) {
        sliders.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length -1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length -1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);