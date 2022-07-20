(function () {//моб меню
const mobs=document.querySelectorAll('.mob li, .mmm');
const mob=document.querySelector('.mob');
let tm=null;
const mmm=()=>{
	mob.classList.toggle('vid');
	}
mobs.forEach(x=>x.addEventListener('click',mmm));
})();

(function () {//Elevator
  var lift = document.querySelector('.to-up-btn_js');
  //console.log(lift);
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

(function (){// смена языка 
const lng=document.querySelectorAll('.lng');
//console.log(lng);
lng.forEach(x=>{x.addEventListener('click',
	(e)=>{
		e.stopPropagation();
		lng.forEach(x=>{x.classList.toggle('hidden');});
		})
	});
})();

(function (){//slider
const feb2=(x)=>{// создание слайдера
	x.innerHTML=`
	<button class="pointer" style="width:42px;height:42px;background: transparent;border: none;padding:3px 0 0 0px"> 
	<svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M27.8106 10.6252H7.32406L14.1008 3.93617L12.6412 2.46973L4.90009 10.1107L3.41442 11.5771L4.90009 13.0178L12.6412 20.6588L14.1008 19.1923L7.50651 12.6834H27.8106V10.6252Z" fill="#214E41"/>
	</svg>
	</button>

	<div style="width:1046px;height:100px;border:0px solid black;overflow:hidden;
	margin-right:8px;">
		<div style="width:3273px; height:100px;background: white;
		display:flex;justify-content:space-between;align-items: center;">
	<img src="img/pic8.png"><img src="img/pic9.png"><img src="img/pic10.png">
	<img src="img/pic11.png"><img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
	<img src="img/pic8.png"><img src="img/pic9.png"><img src="img/pic10.png">
	<img src="img/pic11.png"><img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
	<img src="img/pic8.png"><img src="img/pic9.png"><img src="img/pic10.png">
	<img src="img/pic11.png"><img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
		</div>
	</div>

	<button class="pointer" style="width:42px;height:42px;background: none;border: none;padding:3px 0 0 3px"> 
	<svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.41443 12.5034H23.901L17.1242 19.1924L18.6099 20.6589L26.3249 13.0179H26.351L27.8106 11.5772L26.351 10.1108H26.3249L18.6099 2.46985L17.1242 3.93629L23.7446 10.4452H3.41443V12.5034Z" fill="#214E41"/>
	</svg>
	</button>
	`;

	x.setAttribute('style','display:flex;justify-content: space-between;align-items: center;');
	x.style.width = '100%';

	const lenta=x.childNodes[3].childNodes[1];//экран
	const pred=x.childNodes[1];//кнопка лево
	const next=x.childNodes[5];//кнопка право
	const step=146+((3273-146*15)/14);
	const ip=`translateX(-${step * 5}px)`;
	lenta.style.transform = ip;//ип
	let a=0;

	const f=(e)=>{ // плавно перемещаю кадр
		lenta.style.transition = 'transform 500ms';
		lenta.style.transform = `translateX(-${step * (5+e)}px)`;
		a=e;
		}

	pred.onclick=()=>{
		if(a===-5){
			lenta.style.transition = '';
			lenta.style.transform = ip;
			a=0;
			setTimeout(()=>{f(-1)},0);// телепортирую кадр
			return};
		if(a>-5)f(a-1)};
	next.onclick=()=>{
		if(a===5){
			lenta.style.transition = '';
			lenta.style.transform = ip;
			a=0;
			setTimeout(()=>{f(+1)},0);// телепортирую кадр
			return};
		if(a<5)f(a+1)};
}

feb2(megaslider);
})()



