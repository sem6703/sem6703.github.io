const over=document.querySelector('.overlay');
const m1=document.getElementById('m1');
const m2=document.getElementById('m2');
const m3=document.getElementById('m3');

const sign = document.querySelector('.sign_js');
sign.addEventListener('click',(e) => {m1.style.display='block'; over.classList.remove('unshow')});
const reg = document.querySelector('.reg_js');
reg.addEventListener('click',(e) => {m2.style.display='block'; over.classList.remove('unshow')});

const charm = document.querySelector('.charm_js');
charm.addEventListener('click',(e) => {charm.style.right='-100%';});

const burger = document.querySelector('.burger');
burger.addEventListener('click',(e) => {charm.style.right='0px';});

const up = document.querySelector('.button-to-top_js');
up.addEventListener('click',(e) => {window.scrollTo({top: 0, behavior: 'smooth',})});
const sm = document.querySelector('.send_js');
sm.addEventListener('click',(e) => {m3.style.display='block'; over.classList.remove('unshow')});	
const m1close = document.querySelector('.m1_js');
m1close.addEventListener('click',(e) => {m1.style.display='none';overlay.classList.add('unshow')});
const m2close = document.querySelector('.m2_js');
m2close.addEventListener('click',(e) => {m2.style.display='none';overlay.classList.add('unshow')});
const m3close = document.querySelector('.m3_js');
m3close.addEventListener('click',(e) => {m3.style.display='none';overlay.classList.add('unshow')});

window.addEventListener('scroll', () => {
	up.style.display=(window.pageYOffset > 100)?'block':'none';
	});			

var xe=false;


// логин форма
// Ссылка на бек
const BASE_SERBER_PATH = 'https://academy.directlinedev.com';
 
  const fl = document.forms.lform;
  
  function login(e) {
    e.preventDefault();
    let data = {};
    data.email = lform.email.value;
    data.password = lform.password.value;
    sendRequest({
      method: 'POST',
      url: '/api/users/login',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          console.log('Вы успешно вошли!')
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId', res.data.userId);
          //rerenderLinks();
          //interactionModal(modalLogin);
          setTimeout(() => {
            location.pathname = '/11/profile';
          }, 2000)
        } else {
          throw res
        }
      })
      .catch(err => {
        if (err._message) {
          alert(err._message);
        }
		
        clearErorrs(lform);
        errorFormHandler(err.errors, lform);//
      });
  }
  
  lform.addEventListener('submit', login);

const fi = document.forms.filter;//<form name="registerForm" class="modal__form form-row">

/**/


function sendRequest({url, method = 'GET', headers, body = null}) {
  return fetch(BASE_SERBER_PATH + url + '?v=1.0.0.', {
    method,
    headers,
    body,
  });
}

function setErrorChecked(inputs, errorMessage) {

  const error = errorCreator(errorMessage);
  
  inputs[0].parentElement.parentElement
  .insertAdjacentElement('afterend', error);
  function handler() {
    error.remove();
    for(let input of [...inputs]) {
      input.removeEventListener('input', handler); 
      input.classList.remove('is-invalid');
    }
  }
  for(let input of [...inputs]) {
    input.classList.add('is-invalid');
    
    input.addEventListener('input', handler, {once: true});
  }
}

function setError(input, messageError) {
//console.log('ups...',messageError);

  if(input[0]) {
    setErrorChecked(input, messageError);
  } else {console.log('ups!...',input);
    setErrorText(input, messageError);
  }
}

function setErrorText(input, errorMessage) {
  const error = errorCreator(errorMessage);
  input.classList.add('is-invalid');
  input.insertAdjacentElement('afterend', error);
  
  input.addEventListener('input', function() {
    error.remove();
    input.classList.remove('is-invalid');
  }, {once: true});
  
}

function errorCreator(message) {
  let messageError = document.createElement('div');
  messageError.classList.add('invali');
  //messageError.classList.add('invalid-feedback');
  messageError.classList.add('invalid-feedback_js');
  messageError.innerText = message;
  return messageError;
}

function errorFormHandler(errors, form) {
  if(Object.keys(errors).length) {//console.log('privet');
    Object.keys(errors).forEach(key => {
      const messageError = errors[key];
      const input = form.elements[key];
	  //console.log('ups...',errors[key]);
      setError(input, messageError);
    })
    return;
  }
}

function clearErorrs(element) {
  const messages = element.querySelectorAll('.invalid-feedback_js');
  const invalids = element.querySelectorAll('.is-invalid');
  messages.forEach(message => message.remove());
  invalids.forEach(invalid => invalid.classList.remove('is-invalid'));
}
/**/
function register(e) {
  e.preventDefault();
  //loaderRegister.classList.remove('hidden');
  let data = {};
  data.email = fi.email.value;
  data.name = fi.name.value;//'John';//
  data.surname = fi.surname.value;//'Smith';//
  data.password = fi.password.value;//'123';//
  data.location = fi.location.value;//'ussr';//
  data.age = +fi.age.value;
  sendRequest({
    method: 'POST', 
    url: '/api/users', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(res => {
      if(res.success) {
        //interactionModal(modalRegister); показать скрыть форму
        alert(`Пользователь c id ${res.data.id} & email ${res.data.email} создан!`);
        fi.email.value = '';
        fi.name.value = '';//
        fi.surname.value = '';//
        fi.password.value = '';//
        fi.location.value = '';//
        fi.age.value = '';
      } else {
        throw res;
      }
    })
    .catch(err => {
      clearErorrs(fi);
      errorFormHandler(err.errors, fi);
    })
    .finally(() => {
      //loaderRegister.classList.add('hidden');// прелоадер
    });
}
		
fi.addEventListener('submit', register);


window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        if(m1.style.display!=='none') {// log in sicn in
			m1.querySelector('.closer').click(); // клик по первому найденному с классом closer
    
        }
        if(m2.style.display!=='none') {
			m2.querySelector('.closer').click(); // клик по первому найденному с классом closer

        }		
        if(m3.style.display!=='none') {
			m3.querySelector('.closer').click(); // клик по первому найденному с классом closer
  
        }		
    }
})

//************************   слайдер   **********************************//
function Slider(selector,options={initialActiveIndex:0}){//initialActiveIndex=0
const slider = document.querySelector(selector);//('.slider');
const wrapper = slider.querySelector('.slider__wrapper');
const innerWrapper = wrapper.querySelector('.slider__inner-wrapper');
const slides = [...wrapper.querySelectorAll('.slider__slide')];
const buttonBack=slider.querySelector('.slider__button_back');
const buttonNext=slider.querySelector('.slider__button_next');
const pagination=slider.querySelector('.slider__pagination');
const slideCount=slides.length;
let dots=[];
const aniDur=500; // время аминации
let id=null;
let percentDiff=0.2; // размер свайпа
let clientX=0;
let lastClientX=0;
let checkerMouseDown=false;


let isTouched=false;

wrapper.addEventListener('touchstart',(e)=>{
isTouched=true;
const touch=e.touches[0];

clientX=touch.clientX;
lastClientX=touch.clientX;
});

wrapper.addEventListener('touchmove',(e)=>{
if(!isTouched){return;}
const touch=e.touches[0];
lastClientX=touch.clientX;
//setActiveSlide(activeSlideIndex,false,(clientX-lastClientX)*0.5);
setActiveSlide(activeSlideIndex,false,clientX-lastClientX);
});

wrapper.addEventListener('touchend',(e)=>{
if(!isTouched){return;}
isTouched=false;
//const touch=e.touches[0];
if(clientX-lastClientX > percentDiff * siledWidth){
	nextSlide();
} else if (lastClientX-clientX > percentDiff * siledWidth){
	prevSlide();
}
});

wrapper.addEventListener('mousedown',(e)=>{
checkerMouseDown=true;
clientX=e.clientX;
});


//css user-select: none // не выделять текст
function endMouseEvent(e){
if(!checkerMouseDown){return;}
checkerMouseDown=false;
if(clientX-e.clientX > percentDiff * siledWidth){
	nextSlide();
} else if (e.clientX-clientX > percentDiff * siledWidth){
	prevSlide();
} else{
setActiveSlide(activeSlideIndex);
}


}



wrapper.addEventListener('mouseup',endMouseEvent);
wrapper.addEventListener('mouseout',endMouseEvent);

let siledWidth = 0;
let activeSlideIndex=0; // курсор слайдов

initWidth();
createDots();
setActiveSlide(activeSlideIndex,false);//(0);

window.addEventListener('resize',()=>{ // злой юзер меняет ширину окна
	initWidth();
	setActiveSlide(activeSlideIndex, false);// анимашку не играть
});

buttonNext.addEventListener('click', ()=>{
	//setActiveSlide(activeSlideIndex+1)
	nextSlide();
});

buttonBack.addEventListener('click', ()=>{
	//setActiveSlide(activeSlideIndex-1)
	prevSlide();
	//console.log('prev');
});


function nextSlide(){setActiveSlide(activeSlideIndex+1)}

function prevSlide(){setActiveSlide(activeSlideIndex-1)}





function createDots(){ // все точки создать
	for (let i=0;i<slideCount; i++){
		const dot = createDot(i);
		dots.push(dot);
		pagination.insertAdjacentElement('beforeend',dot);
	}
	//alert(`созданно ${slideCount}`);
}

function createDot(index){ // создание одной точки
	//const dot=document.createElement('button');
	const dot=document.createElement('li');
	dot.classList.add('slider__dot');//_active
	dot.tabIndex = 0;

	if(index===activeSlideIndex){
		dot.classList.add('slider__dot_active');
	}
	dot.addEventListener('click',()=>{
		setActiveSlide(index);
	});
	return dot;
}


// diff растояние которо наш слайд должен
function setActiveSlide(index, withAnimation=true, diff=0){ // навигация в слайдах
//console.log(`tut ${index}`);
	if(index <0 || index >=slides.length) { return;}// выход за границы массива
	if(withAnimation){
		clearTimeout(id);
		innerWrapper.style.transition=`transform ${aniDur}ms`;
		id = setTimeout(()=>{
		innerWrapper.style.transition='';
		},aniDur);
	}
	
	buttonBack.removeAttribute('disabled');// страховка от неуместной недоступности
	buttonNext.removeAttribute('disabled');
	if(index===0){ // недоспутна кн назад
		buttonBack.setAttribute('disabled','');
		
	}
	if(index===slides.length-1){ // недоступна кн вперед
		buttonNext.setAttribute('disabled','');
	}	
	
	
	innerWrapper.style.transform=`translateX(-${siledWidth * index}px`; // двигаю киноленту
	dots[activeSlideIndex].classList.remove('slider__dot_active');
	dots[index].classList.add('slider__dot_active');
	
	activeSlideIndex=index;
}//end of setActiveSlide




function initWidth(){ // суммарная длина всех слайдов?
siledWidth=wrapper.offsetWidth;
slides.forEach(slide => {
	slide.style.width = `${siledWidth}px`;
});
//console.log(siledWidth);

//(siledWidth)
}

return {
//nextSlide: nextSlide// когда название ключа и переменой совпадают можно сокращенную запись
nextSlide, prevSlide,
}
}//end Slider

const cust=new Slider('.slider',{
	initialActiveIndex:1,
});
//************************   конец слайдера   *****************************************//
// курсор табу
const cursor = document.querySelectorAll(".taboo");
const sword=document.querySelector(".sword");
const mouseMove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  sword.style.left = x + "px";
  sword.style.top = y + "px";
};
for (let i=0; i<cursor.length; i++){
cursor[i].addEventListener("mousemove", mouseMove);
cursor[i].addEventListener("mouseout", (e)=>{sword.style.display='none';});
cursor[i].addEventListener("mouseover", (e)=>{sword.style.display='block';});
}


