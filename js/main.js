const iconPhone = document.querySelector('.phone')
const iconWhere = document.querySelector('.where')
const iconClosePhone = document.querySelector('#pop-up-close-phone')
const iconCloseWhere = document.querySelector('#pop-up-close-where')
const popupPhone = document.querySelector('#pop-up-phone')
const popupWhere = document.querySelector('#pop-up-where')

const more = document.querySelector('#more')
const card = document.querySelector('#card')

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

function toggleCard(event) {
    if(card.classList.contains('none')=== true){
        card.classList.remove('none');
        card.classList.add('hire-today__packs-card-second');
        more.classList.remove('hire-today__packs--more');
        more.classList.add('hire-today__packs--less');
    }else{
        card.classList.add('none');
        card.classList.remove('hire-today__packs-card-second');
        more.classList.remove('hire-today__packs--less');
        more.classList.add('hire-today__packs--more');
    }
   
}



iconPhone.addEventListener('click', openPopupPhone);
iconClosePhone.addEventListener('click', closePopupPhone);

iconWhere.addEventListener('click', openPopupWhere);
iconCloseWhere.addEventListener('click', closePopupWhere);

more.addEventListener('click', toggleCard);