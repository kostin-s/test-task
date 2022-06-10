const btnPrevSlide = document.querySelector('.btn__prev');
const btnNextSlide = document.querySelector('.btn__next');
const controlPrev = document.querySelector('.control_1');
const controlNext = document.querySelector('.control_2');
const slideFirst = document.querySelector('.slide__first');
const slideSecond = document.querySelector('.slide__second');

btnPrevSlide.addEventListener('click', (e) => {
  e.preventDefault();

  if (!controlPrev.classList.contains('active')) {
    controlPrev.classList.add('active');
    slideFirst.classList.add('active');
    controlNext.classList.remove('active');
    slideSecond.classList.remove('active');
  }
});

btnNextSlide.addEventListener('click', (e) => {
  e.preventDefault();

  if (!controlNext.classList.contains('active')) {
    controlNext.classList.add('active');
    slideSecond.classList.add('active');
    controlPrev.classList.remove('active');
    slideFirst.classList.remove('active');
  }
});
