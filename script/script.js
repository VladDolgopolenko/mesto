
let buttonEdit = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__title');
let profileDesc = document.querySelector('.profile__subtitle');
let popupName = document.querySelector('.popup__name');
let popupDesc = document.querySelector('.popup__description');
let popupForm = document.querySelector('.popup__form');


/* Открытие popup */
buttonEdit.addEventListener('click', function () {
    popup.style.display = 'block';
    popupName.value = profileName.textContent;
    popupDesc.value = profileDesc.textContent;     
}
)


/* Закрытие popup */
buttonClose.addEventListener('click', function () {
    popup.style.display = 'none';
}
)

/* Сохранение формы */
function popupSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDesc.textContent = popupDesc.value;
    popup.style.display = 'none';
}

popupForm.addEventListener('submit', popupSubmit);