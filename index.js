// const btn = document.getElementById('modal__open');
// const body = document.body;
// const modal = document.querySelector('.modal');
// const modalClose = document.querySelector('.modal__close');



// btn.addEventListener('click', function() {
// body.classList.add('active');
// modal.classList.add('active');
// });

// modalClose.addEventListener('click', function() {
//     body.classList.remove('active'); // просто удаляем класс
//     modal.classList.remove('active'); // просто удаляем класс
// });


// modalClose.addEventListener('click', function() {
//     body.classList.remove('active');
//     modal.classList.remove('active');
// });

const btn = document.getElementById('modal__open');
const body = document.body;
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

btn.addEventListener('click', function () {
    body.classList.add('active');
    modal.classList.add('active');
});

modalClose.addEventListener('click', function () {
    body.classList.remove('active');
    modal.classList.remove('active');
});
