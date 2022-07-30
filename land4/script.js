(function () {// bax rate
	const i=document.querySelector('.in_js');	
	const o=document.querySelector('.out_js');
	i.addEventListener('submit',(e)=>{
		e.preventDefault();
		void (async()=>{
			const u=await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
			const t=await u.json();
			o.value='1$ = '+t.Valute['USD'].Value+' rub';
			})();			
		});
})();


(function () {//моб меню
const mobs=document.querySelectorAll('.mobile li, .mmm');
const mob=document.querySelector('.mobile');
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
lng.forEach(x=>{x.addEventListener('click',
	(e)=>{
		e.stopPropagation();
		lng.forEach(x=>{x.classList.toggle('hidden');});
		})
	});
})();

(function (){//slider
const slider=(x)=>{
	x.innerHTML=`
	<button class="brands__prev pointer"> 
		<img src="img/arrowprev.svg" alt="arrow prev">
	</button>

	<div class="brands__window">
		<div class="brands__tape">
			<img src="img/pic8.png">
			<img src="img/pic9.png">
			<img src="img/pic10.png">
			<img src="img/pic11.png">
			<img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
			<img src="img/pic8.png">
			<img src="img/pic9.png">
			<img src="img/pic10.png">
			<img src="img/pic11.png">
			<img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
			<img src="img/pic8.png">
			<img src="img/pic9.png">
			<img src="img/pic10.png">
			<img src="img/pic11.png">
			<img src="img/pic12.png" style="margin-left:14px; margin-right:14px">
		</div>
	</div>

	<button class="brands__next pointer"> 
		<img src="img/arrownext.svg" alt="arrow next">
	</button>
	`;

	x.setAttribute('style','display:flex;');
	x.style.justifyContent='space-between';
	x.style.alignItems='center';
	x.style.width = '100%';
	
	const tape=x.querySelector('.brands__tape');
	const pred=x.querySelector('.brands__prev');
	const next=x.querySelector('.brands__next');
	let step=146+((3273-146*15)/14);
	let ip='translateX(-'+step * 5+'px)';
	tape.style.transform = ip; // ip
	let a=0;

	const f=(e)=>{ // slowly move
		tape.style.transition = 'transform 500ms';
		tape.style.transform = 'translateX(-'+step * (5+e)+'px)';
		a=e;
		}

	pred.onclick=()=>{
		if(a===-5){
			tape.style.transition = '';
			tape.style.transform = ip;
			a=0;
			setTimeout(()=>{f(-1)},0);// fast
			return};
		if(a>-5)f(a-1)};
	next.onclick=()=>{
		if(a===5){
			tape.style.transition = '';
			tape.style.transform = ip;
			a=0;
			setTimeout(()=>{f(+1)},0);// fast move
			return};
		if(a<5)f(a+1)};
}

slider(megaslider);
})();



