const iconPhone = document.querySelector('.phone')
const iconWhere = document.querySelector('.where')
const iconClosePhone = document.querySelector('#pop-up-close-phone')
const iconCloseWhere = document.querySelector('#pop-up-close-where')
const popupPhone = document.querySelector('#pop-up-phone')
const popupWhere = document.querySelector('#pop-up-where')

const more = document.querySelectorAll('.hire-today__packs--more')
const less = document.querySelectorAll('.hire-today__packs--less')
const card = document.querySelectorAll('.hire-today__packs-card-second')

function openPopupPhone(event) {
    popupPhone.classList.remove('none');
    popupPhone.classList.add('pop-up__container');
}

function closePopupPhone(event) {
    popupPhone.classList.add('none');
    popupPhone.classList.remove('pop-up__container');
}

function openPopupWhere(event) {
    popupWhere.classList.remove('none');
    popupWhere.classList.add('pop-up__container');
}

function closePopupWhere(event) {
    popupWhere.classList.add('none');
    popupWhere.classList.remove('pop-up__container');
}

function openCard(event) {
    popupWhere.classList.add('none');
    popupWhere.classList.remove('pop-up__container');
}

more.forEach(function(button) {
    button.addEventListener('click', openCard);
  });


iconPhone.addEventListener('click', openPopupPhone);
iconClosePhone.addEventListener('click', closePopupPhone);

iconWhere.addEventListener('click', openPopupWhere);
iconCloseWhere.addEventListener('click', closePopupWhere);
