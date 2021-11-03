$(document).ready(function () {
const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
    loop: true,

 
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

 
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
    loop: true,

 
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

 
});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
console.log('клик по кнопке меню');
document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
});

var modalButton = $('[data-toggle=modal]')
var closeModalButton = $('.modal__close')
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
var modalOverlay = $('.modal__overlay');
var modalDialog = $('.modal__dialog');
modalOverlay.addClass('modal__overlay--visible');
modalDialog.addClass('modal__dialog--visible');

// When the modal is shown, we want a fixed body
document.body.style.overflow = 'hidden';
}
function closeModal(event) {
  event.preventDefault();
var modalOverlay = $('.modal__overlay');
var modalDialog = $('.modal__dialog');
modalOverlay.removeClass('modal__overlay--visible');
modalDialog.removeClass('modal__dialog--visible');
// When the modal is hidden, we want to remain at the top of the scroll position
document.body.style.overflow = 'visible';

}

//обработка форм
$('.form').each(function(){
$(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "name, required to contain minimum 2 symbols"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone required",
    },
  },
});
});

//маска для телефона

$('.phone').mask('+7 (999) 999-99-99');

AOS.init();



});
