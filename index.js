const btn = document.getElementById('modal__open');
const body = document.body;
const modal = document.querySelector('.modal');


btn.addEventListener('click', function() {
body.classList.add('active');
modal.classList.add('active');
});

modalCloseBtn.addEventListener('click', function() {
    body.classList.remove('active'); // просто удаляем класс
    modal.classList.remove('active'); // просто удаляем класс
});

const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function() {
    body.classList.remove('active');
    modal.classList.remove('active');
});