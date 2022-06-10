const pageWrapper = document.querySelector('.page-wrapper'),
  logo = document.querySelector('.header'),
  btnNext = document.querySelector('.btn-next'),
  modal = document.querySelector('.modal');
let currentPage = 0,
  startX,
  endX;

function updatePage(currentPage) {
  pageWrapper.style.transform = `translateX(-${currentPage * 1024}px)`;
}

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50 && currentPage <= 1) {
    currentPage += 1;
    updatePage(currentPage);
  }

  if (startX - endX < -50 && currentPage >= 1) {
    currentPage -= 1;
    updatePage(currentPage);
  }
});

logo.addEventListener('click', (e) => {
  currentPage = 0;

  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
  }

  updatePage(currentPage);
});

btnNext.addEventListener('click', (e) => {
  currentPage = 1;

  updatePage(currentPage);
});
