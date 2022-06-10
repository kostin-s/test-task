const modalBtn = document.querySelector('.btn-modal');
const modalContent = document.querySelector('.modal__inner');
const close = document.querySelector('.close');

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('active');
});

modal.addEventListener('click', (e) => {
  e.stopImmediatePropagation();

  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

close.addEventListener('click', () => {
  modal.classList.remove('active');
});
