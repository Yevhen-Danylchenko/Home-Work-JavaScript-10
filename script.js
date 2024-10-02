const link = document.querySelector('#menu');
const buttonContent = document.querySelector('#burger');
const divContainer = document.querySelector('#div-container');

buttonContent.addEventListener('click', () => {
    link.classList.toggle('hidden');
    divContainer.classList.toggle('divCont');
})

