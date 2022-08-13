(function(){
	window.addEventListener('resize',()=>{console.log(window.innerWidth)});
});// вывод ширины экрана в консоль

(function(){
	const mjs=document.querySelector('.mjs');
	const mob=document.querySelector('.mob');
	const moli=document.querySelectorAll('.mob li');
	const mshow=()=>{
		mob.classList.toggle('vid');
		}
	mjs.addEventListener('click',mshow);	
	moli.forEach(x=>x.addEventListener('click',mshow));
})();// моб меню

	
(function(){
	let hr = document.querySelector('#hr'); 
	let mn = document.querySelector('#mn'); 
	let sc = document.querySelector('#sc'); 
	 
	setInterval(() => { 
		let day = new Date(); 
		let hh = day.getHours() * 30; 
		let mm = day.getMinutes() * 6; 
		let ss = day.getSeconds() * 6; 
	 
		hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`; 
		mn.style.transform = `rotateZ(${mm}deg)`; 
		sc.style.transform = `rotateZ(${ss}deg)`; 
	} 
,1000)})();//часы	

function sendrequest(x) {// отправка запроса
	const SERVER_URL = 'https://academy.directlinedev.com';
	let url = x.url,
		x$method = x.method,
		method = x$method === void 0 ? 'GET' : x$method,
		headers = x.headers,
		x$body = x.body,
		body = x$body === void 0 ? null : x$body;
	let kkk={
		method: method,
		headers: headers,
		body: body
		};		
	return fetch(SERVER_URL + url + '?v=1.0.0', kkk);
	}

(function (){
	const fm=document.querySelector('.a__form');
	const s=document.querySelector('.hi__btn');
	const scat=document.querySelectorAll('.a, .overlay');
	const crjs=document.querySelector('.crjs');
	crjs.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});
	s.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});
	fm.addEventListener('submit',(e)=>{
		e.preventDefault();	
		let bj = JSON.stringify({
			email: fm.elements.email.value,
			phone: '+79033333333',
			name: 'an',
			message: fm.elements.txt.value
			});	
		let data = {
			to: fm.elements.email.value,
			body: bj
			};
		let jjj={
			method: 'POST',
			url: '/api/emails',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		  };	
		sendrequest(jjj).then((res)=>{	  
			return res.json();
		  }).then((res)=>{	  
			if (res.success) {
				e.target.reset();
			} else {
				throw res;
			}
		  }).catch( (err)=>{	  
			e.target.reset();
			alert(err._message+' извиняйте');
		  });	
		[...scat].forEach(x=>x.classList.toggle('hidden'));	  
		});
})();// отправка запроса сообщение


(function (){//slider
	let cur=0;
	const tape=document.querySelector('.pf_tape');	
	const toleft=document.querySelector('#ljs');//('.ab_bok1');
	const toright=document.querySelector('#rjs');//('.ab_bok2');
	const foo=()=>{tape.style.transform= `translateX(-${cur}%)`}	
	toleft.addEventListener('click',()=>{cur=(cur<=200)?cur+100:cur; foo()});
	toright.addEventListener('click',()=>{cur=(cur>=100)?cur-100:cur; foo()});
})();//slider

function fn(au,a){
	const w=au.querySelector('.tst');	
	const wins=[];// выигрышная комбинация
	a.forEach((xx,ii)=>{
		wins.push([]);
		xx.o.forEach((x,i)=>{
			if (x[0]==='*'){wins[ii].push(i)}
			});
		xx.o=xx.o.map(x=>(x[0]==='*')?x.slice(1):x);// звездочку стираю
		});

	let n=0;
	a.forEach(xx=>{
		n++;
		let d='', k=0;
		xx.o.forEach((x,i)=>{
		d+=`<label class="tlb"><input class="${(wins[n-1].length === 1)?'trd':'tch'}" type="${(wins[n-1].length === 1)?'radio':'checkbox'}" name="${n}"><span class="tsp">${x}</span></label>\n`;
	});
	w.innerHTML+=
	`
	<div class="tdon">
	<h5 class="th5">
	${xx.ask} 
	</h5>
	${d}
	<button class="tbt" type="button"
	onclick="let s=this.parentNode;
	let e=s.querySelectorAll('input');
	let e2=[...e].map((x,i)=>(x.checked)?i:-1).filter(x=>x>-1);
	s.style.background =
					(JSON.stringify(e2)===JSON.stringify([${wins[n-1]}]))?
					'#00ff0064':'#ff000042'
	">Принять</button>
	</div>  
	`;
	});	
	const alli=w.querySelectorAll('.trd,.tch');// нахожу чеки и радио
	alli.forEach(x=>x.addEventListener('change',(e)=>{ // нейтральный цвет
		e.target.parentNode.parentNode.style.background='#ffffff42'
		}));	
}