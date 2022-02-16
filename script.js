"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var x = document.querySelector('.x_js');
var m1 = document.querySelector('.mm-wrapper_js');
var m2 = document.querySelector('.mm_js');
var y = document.querySelector('.y_js');
x.addEventListener('click', function () {
  m1.classList.remove('mm-hidden');
  m2.classList.remove('mm-hidden');
});
y.addEventListener('click', function () {
  m1.classList.add('mm-hidden');
  m2.classList.add('mm-hidden');
});

(function () {
  var lift = document.querySelector('.to-up-btn_js');
  var limitV = 500;
  if (!lift) return;
  lift.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > limitV) {
      lift.classList.remove('hidden');
    }

    if (window.pageYOffset < limitV) {
      lift.classList.add('hidden');
    }
  });
})(); //Elevator

/*****************slider****/
//Main slider


(function () {
  var slider = document.querySelector('.main-slider_js');

  if (!slider) {
    return;
  }

  var sliderWrapper = slider.querySelector('.slider-wrapper_js');
  var sliderInnerWrapper = sliderWrapper.querySelector('.slider-inner-wrapper_js');

  var slides = _toConsumableArray(sliderInnerWrapper.querySelectorAll('.slider-slide_js'));

  var btnPrev = slider.querySelector('.slider-btn-prev_js');
  var btnNext = slider.querySelector('.slider-btn-next_js');
  var pagination = slider.querySelector('.slider-pagination_js');
  var slidesCount = slides.length;
  var animationDuration = 500;
  var slideStorage = 0;

  if (!localStorage.getItem('activeSlide')) {
    slideStorage = 0;
  } else {
    slideStorage = +localStorage.getItem('activeSlide');
  }

  var id = null;
  var dots = [];
  var sliderWidth = 0;
  var activeSlide = 0;
  createDots();
  sliderInitWidth();
  setActiveSlide(slideStorage, false);
  window.addEventListener('resize', function () {
    sliderInitWidth();
    setActiveSlide(activeSlide);
  });
  btnPrev.addEventListener('click', function () {
    setActiveSlide(activeSlide - 1);
  });
  btnNext.addEventListener('click', function () {
    setActiveSlide(activeSlide + 1);
  });

  function createDots() {
    for (var i = 0; i < slidesCount; i++) {
      var li = document.createElement('li');
      var dot = createDot(i);
      dots.push(dot);
      li.appendChild(dot);
      pagination.insertAdjacentElement('beforeend', li);
    }
  }

  function createDot(index) {
    var dot = document.createElement('button');

    if (index === activeSlide) {
      dot.classList.add('main-slider__pagination_active');
    }

    dot.addEventListener('click', function () {
      setActiveSlide(index);
    });
    return dot;
  }

  function sliderInitWidth() {
    sliderWidth = sliderWrapper.offsetWidth;
    slides.forEach(function (slide) {
      slide.style.width = sliderWidth + 'px';
    });
  }

  function setActiveSlide(index) {
    var withAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (index < 0 || index >= slides.length) {
      return;
    }

    if (withAnimation) {
      clearTimeout(id);
      sliderInnerWrapper.style.transition = "transform ".concat(animationDuration, "ms");
      id = setTimeout(function () {
        sliderInnerWrapper.style.transition = '';
      }, animationDuration);
    }

    if (index === 0) {
      btnPrev.disabled = true;
    } else {
      btnPrev.disabled = false;
    }

    if (index === slides.length - 1) {
      btnNext.disabled = true;
    } else {
      btnNext.disabled = false;
    }

    sliderInnerWrapper.style.transform = "translateX(-".concat(sliderWidth * index, "px)");
    dots[activeSlide].classList.remove('main-slider__pagination_active');
    dots[index].classList.add('main-slider__pagination_active');
    localStorage.setItem('activeSlide', index);
    activeSlide = index;
  }
})(); //вкл