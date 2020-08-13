const iconPhone = document.querySelector('.phone')
const iconWhere = document.querySelector('.where')
const iconClose = document.querySelector('#pop-up-close')
const popup = document.querySelector('#pop-up')

function openPopup(event) {
    popup.classList.remove('none');
    popup.classList.add('pop-up__container');
}

function closePopup(event) {
    popup.classList.add('none');
    popup.classList.remove('pop-up__container');
}

iconPhone.addEventListener('click', openPopup);
iconClose.addEventListener('click', closePopup);
iconWhere.addEventListener('click', openPopup);