document.addEventListener('DOMContentLoaded', function() {

  // CUSTOMSELECT 
  const customSelect = document.querySelector('.custom__select'),
        selected = customSelect.querySelector('.custom__select-selected'),
        dropdown = customSelect.querySelector('.custom__select-dropdown'),
        options = customSelect.querySelectorAll('.custom__select-option');

  selected.addEventListener('click', () => dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block');

  options.forEach(option => option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      dropdown.style.display = 'none';
    })
  );

  document.addEventListener('click', (e) => { if (!customSelect.contains(e.target)) dropdown.style.display = 'none'});
  
  // FORM
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
        NAME_RE = /^[A-Za-zА-Яа-яЁё]+$/;

  const inputName = document.querySelector('.name__input'),
        inputEmail = document.querySelector('.email__input');
  const formBtn = document.querySelector('.form__btn');
  const modal = document.querySelector('.modal'),
        modalError = document.querySelector('.modal__error'),
        closeBtn = document.querySelector('.close'),
        closeErrorBtn = document.querySelector('.close__error');

  const isNameValid = (value) => {return NAME_RE.test(value)}; 
  const isEmailValid = (value) => {return EMAIL_REGEXP.test(value)};
  
  const formBtnClick = () => {
    if (isEmailValid(inputEmail.value) && isNameValid(inputName.value)) {modal.style.display = 'block'}
    else modalError.style.display = 'block';
  }

  formBtn.addEventListener('click', formBtnClick);

  const closeModal = () => {
    modal.style.display = 'none';
    modalError.style.display = 'none';
    inputName.value = '';
    inputEmail.value = '';
  }

  modal.addEventListener('click', (e) => {if (e.target === closeBtn) closeModal()});
  modalError.addEventListener('click', (e) => {if (e.target === closeErrorBtn) closeModal()});
  window.addEventListener('click', (e) => {if (e.target === modal || e.target === modalError) closeModal()});
  
  // SCROLL
  const menu = document.querySelector('.menu__items'),
        menuItems = document.querySelectorAll('.menu__item'),
        burger = document.querySelector('.menu__burger');
  
  const headerButtons = document.querySelectorAll('.header__button');
  const orderSection = document.querySelector('.main');
  const burgerEvent = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
  }
  const scrollMove = () => { orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' })};
  burger.addEventListener('click', burgerEvent);

  const menuOrderScroll = () => {
    burgerEvent();
    scrollMove();
  }
  const btnOrderScroll = () => { scrollMove()};
  
  menuItems.forEach((item) => item.addEventListener('click', menuOrderScroll));
  headerButtons.forEach((btn) => btn.addEventListener('click', btnOrderScroll));
});