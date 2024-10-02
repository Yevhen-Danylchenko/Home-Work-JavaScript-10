const link = document.querySelector('#menu');
const buttonContent = document.querySelector('#burger');
// const divButtonText = document.querySelector('#btn');
// const leng = document.querySelector('#leng-content');
const divContainer = document.querySelector('#div-container');

buttonContent.addEventListener('click', () => {
    link.classList.toggle('hidden');
    // divButtonText.classList.toggle('hidden');
    // leng.classList.toggle('hidden');
    divContainer.classList.toggle('divCont');
})

