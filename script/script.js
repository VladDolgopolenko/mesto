
const buttonEdit = document.querySelector('.profile__edit'); 
const buttonClose = document.querySelector('.popup__close'); 
const popup = document.querySelector('.popup'); 
const profileName = document.querySelector('.profile__title'); 
const profileDesc = document.querySelector('.profile__subtitle'); 
const popupName = document.querySelector('.popup__input_text_name'); 
const popupDesc = document.querySelector('.popup__input_text_desc'); 
const popupForm = document.querySelector('.popup__form'); 

const editClose = document.querySelector('.profile-popup__close');
const cardClose = document.querySelector('.card-popup__close');
const cardName = document.querySelector('.popup__input_text_namecard');
const cardLink = document.querySelector('.popup__input_text_linkcard');
const cardLike = document.querySelector('.card__like');

const buttonCreate = document.querySelector('.profile__add');

const profilePopup = document.querySelector('.profile-popup')
const cardPopup = document.querySelector('.card-popup');

const buttonOpenPopupImg = document.querySelector('.image-popup')

const cards = document.querySelector('.cards');
const cardsList = document.querySelector('.cards__list');
const cardtemplate = document.querySelector('#card-template').content;

const buttonOpenPopupPhoto = document.querySelector('.image-popup__photo');
const buttonOpenPopupText = document.querySelector('.image-popup__text');
const buttonClosePopupPhoto = document.querySelector('.image-popup__close');

/* Общая функция открытия popup */
function openPopup(element) {
  element.classList.add('popup_opened');
}


/* Открытие popup профиля */
buttonEdit.addEventListener('click', function () {
    //popup.classList.add('popup_opened');
    openPopup(popup);
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

/* Попап картинки */
function openImgPopup(evt) {
  //buttonOpenPopupImg.classList.add('popup_opened');
  openPopup(buttonOpenPopupImg);
  buttonOpenPopupPhoto.src = evt.target.src;
  buttonOpenPopupPhoto.alt = evt.target.alt;
  buttonOpenPopupText.textContent = evt.target.alt;
}

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
function createCard(element, link) {
  const cardElement = cardtemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = element;
  cardElement.querySelector('.card__like').addEventListener('click', likeCard); 
  cardElement.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').addEventListener('click', openImgPopup);

  //cardsList.prepend(cardElement);

  return cardElement;
}
/* Функция добавления карточек из массива */
  initialCards.forEach(function(element){
    const newCard = createCard(element.name, element.link);
    addCard(newCard, cardsList);
  })

  function addCard(card, link) {
    link.prepend(card);
  } 



/* Добавление карточки из формы */
function addFromFormCard(element) {
  element.preventDefault();
  const card = createCard(cardName.value, cardLink.value);
  addCard(card, cardsList);
  closePopup(cardPopup);
}


/* Открытие popup создания карточки*/ 
buttonCreate.addEventListener('click', function () {
  cardName.value = ('');
  cardLink.value = ('');
  //cardPopup.classList.add('popup_opened');
  openPopup(cardPopup);
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


buttonClosePopupPhoto.addEventListener('click', function() {
  closePopup(buttonOpenPopupImg);
})


/* Действие при нажатии кнопки сохранить в popup создания карточки */
cardPopup.addEventListener('submit', addFromFormCard);

/* like карточки*/
function likeCard (element) {
  element.target.classList.toggle('card__like_active');
}

/* delete карточки*/
function deleteCard (element) {
  element.target.closest('.card').remove();
}



