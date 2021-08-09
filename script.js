'use strict';

const hiddenRemover = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const hiddenAdder = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', hiddenRemover);
};

btnCloseModal.addEventListener('click', hiddenAdder);
overlay.addEventListener('click', hiddenAdder);