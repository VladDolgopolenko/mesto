
let buttonEdit = document.querySelector('.profile__edit'); 
let buttonClose = document.querySelector('.popup__close'); 
let popup = document.querySelector('.popup'); 
let profileName = document.querySelector('.profile__title'); 
let profileDesc = document.querySelector('.profile__subtitle'); 
let popupName = document.querySelector('.popup__input_text_name'); 
let popupDesc = document.querySelector('.popup__input_text_desc'); 
let popupForm = document.querySelector('.popup__form'); 

let editClose = document.querySelector('.popup__close-button_profile');
let cardClose = document.querySelector('.popup__close-button_card');
let cardName = document.querySelector('.popup__input_text_namecard');
let cardLink = document.querySelector('.popup__input_text_linkcard');
let cardLike = document.querySelector('.card__like');

let buttonCreate = document.querySelector('.profile__add');

let profilePopup = document.querySelector('.profile-popup')
let cardPopup = document.querySelector('.card-popup');

let openPopupImg = document.querySelector('.image-popup')

const cards = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const cardtemplate = document.querySelector('#card-template').content;

const openPopupPhoto = document.querySelector('.image-popup__photo');
const openPopupText = document.querySelector('.image-popup__text');
const closePopupPhoto = document.querySelector('.popup__close-button_image');


/* Открытие popup профиля */
buttonEdit.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDesc.value = profileDesc.textContent;
}
)


/* Сохранение формы профиля*/
function popupSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDesc.textContent = popupDesc.value;
    popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', popupSubmit);


/* Заполнение 6 карточек элементами из массива */
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

/* Функция создания карточки*/
function createCard(element) {
  const cardElement = cardtemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__like').addEventListener('click', likeCard); 
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', openImgPopup);

  cardsList.prepend(cardElement);

  return cardElement;
}
/* Перебор массива с карточками и вывод их на страницу */
initialCards.forEach(createCard);

/* Открытие popup создания карточки*/
buttonCreate.addEventListener('click', function () {
  cardPopup.classList.add('popup_opened');
})

/* Закрытие popup */
function closePopup(element) {
  element.classList.remove('popup_opened');
}
/* Вызов закрытия попапа карточек */
cardClose.addEventListener('click', function() {
  closePopup(cardPopup);
});
/* Вызов закрытия попапа профиля */
buttonClose.addEventListener('click', function() {
  closePopup(profilePopup);
});


closePopupPhoto.addEventListener('click', function() {
  closePopup(openPopupImg);
})



/* Добавление карточки из формы */
function cardAdd(element) {
  element.preventDefault();
  const card = {
    name: cardName.value,
    link: cardLink.value
  }
  cardsList.prepend(createCard(card))
  closePopup(cardPopup);
}

cardPopup.addEventListener('submit', cardAdd);

/* like карточки*/
function likeCard (element) {
  element.target.classList.toggle('card__like_active');
}

/* delete карточки*/
function deleteCard (element) {
  element.target.closest('.card').remove();
}

/* Попап картинки */
function openImgPopup(evt) {
  openPopupImg.classList.add('popup_opened');
  openPopupPhoto.src = evt.target.src;
  openPopupPhoto.alt = evt.target.alt;
  openPopupText.textContent = evt.target.alt;
}