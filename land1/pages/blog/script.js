"use strict";

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