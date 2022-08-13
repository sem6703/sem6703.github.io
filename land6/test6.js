(function (){//test № 6
const a=[
{ask:'Перестановка элементов массива в случайном порядке - это...',
o:[
'перетасовка',
'shuffle',
'*перемешивание',]},
];
	const au=document.querySelector('.a6');	
	const k6=document.querySelector('#k6');	
	const tst=au.querySelector('.tst');
	const scat=document.querySelectorAll('.a6, .overlay');
	const cr6js=document.querySelector('.cr6js');
	cr6js.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	k6.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	fn(au,a);
})();