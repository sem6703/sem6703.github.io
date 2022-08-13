(function (){//test № 2
let a=[

{ask:'Какая буква? — *  ',
o:[
'а',
'*н',
'ц',
]},

{ask:'Какая буква? — **  ',
o:[
'г',
'*д',
'у',
]},

{ask:'Какая буква? — ***  ',
o:[
'ж',
'*б',
'г',
'д',
]},

{ask:'Какая буква? — — — ',
o:[
'*о',
'с',
'ш',
]},


{ask:'Какой будет результат сортировки? [1,2,3].sort((a,b)=>1)',
o:[
'*[1,2,3]',
'[3,2,1]',
'Maximum call stack size exceeded',
]},


 

{ask:'Цикл событий (Event Loop) — это ....',
o:[
'неведомая хуйня',
'*то, что позволяет Node.js выполнять неблокирующие операции ввода/вывода (несмотря на то, что JavaScript является однопоточным) путём выгрузки операций в ядро системы, когда это возможно.',
]},


{ask:'[pascal]Что выведет код? <div style="text-align:left">a=&apos;abc&apos;;<br>b=&apos;abbc&apos;;<br>print(a&gt;b);</div>',
o:[
'false, length(b)&gt;length(a)',
'*true, &apos;c&apos;&gt;&apos;b&apos;',
]},





{ask:'<div style="text-align:left">async function fn(){ <br><span style="padding-left:20px"></span>return await Promise.resolve("mad");<br>} <br>const d=fn(); <br>console.log(d);</div><br>',
o:[
'*Promise {&lt;pending&gt;}',
'mad',
]},



{ask:'console.log(decodeURI("%D1%81%D0%BD%D1%83%D0%BB%D1%8F"))',
o:[
'piggy',
'*снуля',
]},

{ask:'Как называется срез в массиве?',
o:[
'*slice',
'store',
'scale',
'state',
'score',
]},

{ask:'Что возвращает асинхронная функция?',
o:[
'ничего',
'*promise',
'по усмотрению программиста',
]},

{ask:'Что такое &apos;??&apos;',
o:[
'*Оператор нулевого слияния. это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.',
'в ES6 знак удивления или сомнения',
]},
];

	const au=document.querySelector('.a3');	
	const k2=document.querySelector('#k2');	
	const tst=au.querySelector('.tst');
	const scat=document.querySelectorAll('.a3, .overlay');
	const cr3js=document.querySelector('.cr3js');
	cr3js.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	k2.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	fn(au,a);

})();	