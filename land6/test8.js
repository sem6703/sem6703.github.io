(function (){//test № 8
const a=[
{ask:'Другое название микротаска ....',
o:[
'Call Queue',
'Event Loop',
'*Message Queue',
'Call Stack',
]},
];
	const au=document.querySelector('.a8');	
	const k8=document.querySelector('#k8');	
	const tst=au.querySelector('.tst');
	const scat=document.querySelectorAll('.a8, .overlay');
	const cr8js=document.querySelector('.cr8js');
	cr8js.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	k8.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	fn(au,a);
})();