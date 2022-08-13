(function (){//test № 7
const a=[

{ask:'Что будет выведено в консоль?<div style="text-align:left"> var a=null;<br> console.log(!a && typeof a === "object");</div>',
o:[
'false',
'*true',
]},


{ask:'Что будет выведено в консоль?<div style="text-align:left"> const x=function(){};<br>x.length;<br>const y=function(a,b,c){};<br>y.length;</div>',
o:[
'*0, 3',
'3',
'undefined',
]},

{ask:'NaN===NaN',
o:[
'*false. NaN никогда не равен сам себе',
'true',
]},

{ask:'typeof NaN',
o:[
'object',
'*number',
'symbol',
]},

{ask:'typeof null',
o:[
'*object',
'number',
'symbol',
]},

{ask:'window.isNaN(2/"foo")',
o:[
'false',
'*true. вернет true только для фактических значений NaN, когда результат просто не число',
]},

{ask:'window.isNaN("foo")',
o:[
'false',
'*true',
]},

{ask:'Number.isNaN(2/"foo")// не делает приведения',
o:[
'false',
'*true',
]},

{ask:'Number.isNaN("foo")',
o:[
'*false',
'true',
]},

{ask:'var a=1, b=a; b++; // Чему равна a?',
o:[
'*1',
'2',
]},

{ask:'var x=[1,2,3], y=x; y.push(4); // Чему равнo x? ',
o:[
'[1,2,3]',
'*[1,2,3,4]',
]},

{ask:'a="hello";a[2]="Z"; // Чему равнo a? ',
o:[
'*hello',
'heZlo',
]},


{ask:'b=["h","e","l","l","o"];b[2]="Z"; // Чему равнo b? ',
o:[
'["h","e","l","l","o"]',
'*["h","e","Z","l","o"]',
]},

{ask:'let a="hello"; a.toUpperCase(); // Чему равна а?',
o:[
'*hello',
'HELLO',
]},

{ask:'Что будет выведено в консоль? let fiz=[0,1]; let buz=fiz; buz[0]="a"; fiz',
o:[
'*["a",1]',
'[0,1]',
]},

{ask:'Что из этого явное преобразование?',
o:[
'*String(123) ',
'123+&apos;&apos;',
'!!x',
]},



{ask:'Что из этого неявное преобразование?',
o:[
'String(123)',
'*123+&apos;&apos;',
'*+true',
]},


{ask:'Что будет результатом? String(null) // ',
o:[
'*"null" ',
'"false" ',
'"1,2,3"',
]},

{ask:'Что будет результатом? String(undefined) // ',
o:[
'*"undefined" ',
'"null" ',
'"false"',
]},

{ask:'Что будет результатом? String(true) // ',
o:[
'*"true" ',
'"1" ',
'"[object Object]"',
]},

{ask:'Что будет результатом? String(false) // ',
o:[
'*"false" ',
'"undefined" ',
'"null"',
]},

{ask:'Что будет результатом? String(1) // ',
o:[
'*"1" ',
'"true"',
]},
{ask:'Что будет результатом? String(100000*900000) //  ',
o:[
'"+Inf"',
'*"9e+10"',
'"90000000000"',
]},
 {ask:'Что будет результатом? String({}) // ',
o:[
'*"[object Object]"',
'undefined',
'0',
]}, 
{ask:'Что будет результатом? var x={toString: ()=>&apos;20&apos;}; String(x) //',
o:[
'*"20"',
'"" ',
'"[object Object]"',
]},

{ask:'Что будет результатом? String([1,2,3]) //',
o:[
'*"1,2,3" ',
'"[object Object]"',
]},


{ask:'Чему равно Number(null) ',
o:[
'false ',
'true ',
'*0 ',
'1 ',
'NaN',
]},


{ask:'Чему равно Number(undefined) ',
o:[
'false ',
'true ',
'0 ',
'1 ',
'*NaN',
]},

{ask:'Чему равно Number(true) ',
o:[
'false ',
'true ',
'0 ',
'*1 ',
'NaN',
]},

{ask:'Чему равно Number(false) ',
o:[
'false ',
'true ',
'*0 ',
'1 ',
'NaN',
]},

{ask:'Чему равно Number(22) ',
o:[
'false ',
'true ',
'*22 ',
'NaN',
]},

{ask:'Чему равно Number("hello") ',
o:[
'false ',
'true ',
'0 ',
'1 ',
'*NaN',
]},

{ask:'Чему равно Number("0") ',
o:[
'false ',
'true ',
'*0 ',
'1 ',
'NaN',
]},

  
{ask:'Чему равно Boolean(undefined) //',
o:[
'*false',
'true',
]},

{ask:'Чему равно Boolean(null) // ',
o:[
'*false ',
'true',
]},

{ask:'Чему равно Boolean(NaN) // ',
o:[
'*false ',
'true',
]},

{ask:'Чему равно Boolean(-0) // ',
o:[
'*false ',
'true',
]},

{ask:'Чему равно Boolean(+0) // ',
o:[
'*false ',
'true',
]},

{ask:'Чему равно Boolean("") // ',
o:[
'*false ',
'true',
]},
  
{ask:'Чему равно Boolean(1) //',
o:[
'false',
'*true',
]},
  
{ask:'Чему равно Boolean(-1) //',
o:[
'false',
'*true',
]},
  
{ask:'Чему равно Boolean("a") //',
o:[
'false',
'*true',
]},
  
{ask:'Чему равно Boolean({}) //',
o:[
'false',
'*true',
]},
  
{ask:'Чему равно Boolean(()=>{}) //',
o:[
'false',
'*true',
]},
  
{ask:'Чему равно Boolean([]) //',
o:[
'false',
'*true',
]},

    
{ask:'Приведение комплексных данных [].toString()',
o:[
'*&apos;&apos;',
'"[object Object]"',
'0',
]},
   
{ask:'x={}; x.valueOf=()=>22; Number(x);',
o:[
'0',
'*22',
'undefined',
]},
   
{ask:'y=[];  y.toString=()=>&apos;22&apos;;Number(y) //',
o:[
'0',
'*22',
'undefined',
]},

  
{ask:'z={}; z.valueOf() ',
o:[
'*{}',
'null',
'0',
]},
   
{ask:'z={}; z.toString()',
o:[
'{}',
'*"[object Object]"',
'NaN',
]},
   
{ask:'z={}; Number(z)',
o:[
'{}',
'"[object Object]"',
'*NaN',
]},


{ask:'Какой атрибут выполняет скрипт после полной загрузки страницы?',
o:[
'*defer',
'onload',
'byReady',
]},




{ask:'var a=1,b="a", c=null; a&&b ',
o:[
'1 ',
'*"a" ',
'null',
]},

{ask:'var a=1,b="a", c=null; a||b ',
o:[
'*1 ',
'"a" ',
'null',
]},

{ask:'var a=1,b="a", c=null; b&&c ',
o:[
'1 ',
'"a" ',
'*null',
]},

{ask:'var a=1,b="a", c=null; c||a ',
o:[
'*1 ',
'"a" ',
'null',
]},




{ask:'a={valueOf:()=>22, toString: ()=>44}; String(a) ',
o:[
'*44 ',
'22 ',
'&apos;44&apos;',
]},

{ask:'a={valueOf:()=>22, toString: ()=>44}; a+"" ',
o:[
'44 ',
'*22 ',
'11',
]},


{ask:'"22"==true ',
o:[
'*false ',
'true',
]},


{ask:'false=="0" ',
o:[
'false ',
'*true',
]},

{ask:'false==0 ',
o:[
'false ',
'*true',
]},

{ask:'false=="" ',
o:[
'false ',
'*true',
]},

{ask:'false==[] ',
o:[
'false ',
'*true',
]},

{ask:'""==0 ',
o:[
'false ',
'*true',
]},

{ask:'""==[] ',
o:[
'false ',
'*true',
]},

{ask:'0==[] ',
o:[
'false ',
'*true',
]},


{ask:'true+false ',
o:[
'*1 ',
'10',
'true',
]},

{ask:'12/"6" ',
o:[
'NaN ',
'*2',
]},

{ask:'"number"+15+3 ',
o:[
'*number153 ',
'NaN',
]},

{ask:'15+3+"number" ',
o:[
'*18number ',
'19',
]},

{ask:'[1]>null ',
o:[
'false ',
'*true',
]},

{ask:'"foo"++"bar"  ',
o:[
'*fooNaN ',
'true',
]},

{ask:'&apos;true&apos;==true ',
o:[
'*false ',
'true',
]},

{ask:'false==&apos;false&apos; ',
o:[
'*false ',
'true',
]},

{ask:'null==&apos;&apos; ',
o:[
'*false ',
'true',
]},

{ask:'!!"false"==!!"true" ',
o:[
'false ',
'*true',
]},

{ask:'[&apos;x&apos;]==&apos;x&apos; ',
o:[
'false ',
'*true',
]},

{ask:'[]+null+1 ',
o:[
'1',
'*&apos;null1&apos; ',
'true',
]},

{ask:'[1,2,3]==[1,2,3] ',
o:[
'*false ',
'true',
]},


{ask:'var hd=function(day){<br>if(day===&apos;sunny&apos;){var a=&apos;great&apos;}}<br>//Область видимости переменной а ....',
o:[
'Блочная',
'*Функциональная',
'Вложенная',
'Глобальная',
'Лексическая',
]},

{ask:'var hd=function(day){if(day===&apos;sunny&apos;){let b=&apos;great&apos;}//Область видимости переменной b .... ',
o:[
'*Блочная',
'Функциональная',
'Вложенная',
'Глобальная',
'Лексическая',
]},

{ask:'var hd=function(day){if(day===&apos;sunny&apos;){const c=&apos;great&apos;}//Область видимости константы c .... ',
o:[
'*Блочная',
'Функциональная',
'Вложенная',
'Глобальная',
'Лексическая',
]},

{ask:'try {var d="d"; throw "ex"}catch (e){}// Область видимости переменной e ....',
o:[
'*Блочная',
'Функциональная',
'Вложенная',
'Глобальная',
'Лексическая',
]},

{ask:'try {var d="d"; throw "ex"}catch (e){}// Область видимости переменной d ....',
o:[
'Блочная',
'*Функциональная',
'Вложенная',
'Глобальная',
'Лексическая',
]},

{ask:'Что произойдет при попытке получить v и c до их объявления?<br> v; c; var v=&apos;value&apos;; const c=3.14;',
o:[
'*v-undefined, c-is not defined',
'v-is not defined, c-undefined',
'*let и const подвержены Temporal Dead Zone, зато у var Hoisting.',
]},


{ask:'Что вернется?<div style="text-align:left"> let a=1;<br><span style="padding-left:10px">let f1=function(){return a};</span> <br><span style="padding-left:10px">let f2=function(f){let a=2; return f()};</span><br><span style="padding-left:10px">f2(f1);</span></div> ',
o:[
'*1, это лексическая область видимости',
'2',
]},

{ask:'В ECMASCRIPT область видимости<br> определяется ...',
o:[
'*в момент определения функции',
'в момент вызова функции',
'в момент обращения к переменной',
]},

{ask:'Что будет выведено?<div style="text-align: left"><br>function cr(){<br>let ix=[];<br>let i=0;<br>while (i<10){<br>let fn=function(){alert(i)};<br>ix.push(fn);<br>i++;<br>}<br>return ix;<br>}<br>let ixs=cr();<br>ixs[0]();<br>ixs[2]();<br></div>',
o:[
'*10 10',
'0 2',
]},




{ask:'Причина возникновения замыкания?<br><div style="text-align: left">function cr(){<br><span style="padding-left:10px">let ix=[];</span><br><span style="padding-left:10px">let i=0;</span><br><span style="padding-left:10px">while (i<10){</span><br><span style="padding-left:20px">(function w(j){let fn=function(){alert(j)};</span><br><span style="padding-left:30px">ix.push(fn);</span><br><span style="padding-left:20px">})(i)</span><br><span style="padding-left:20px">i++;</span><br><span style="padding-left:10px">}</span><br><span style="padding-left:10px"></span>return ix;<br>}<br>let ixs=cr();<br>ixs[0]();<br>ixs[2]();</div>',
o:[
'*переменная перестала существоавать к моменту обращения',
'лексическое окружение предписывает',
'самовызывающая функция',
]},

{ask:'this по умолчанию, если не strict mode, это ....',
o:[
'новый сконструированный объект',
'явно указанный объект',
'тот самый объект контекста',
'*глобальная область видимости',
'undefined',
]},
{ask:'Если функция вызвана с неявной привязкой(например по ссылке внутри объекта), тогда this ....',
o:[
'новый сконструированный объект',
'явно указанный объект',
'*тот самый объект контекста',
'глобальная область видимости',
'undefined',
]},
{ask:'Если функция явно вызвана с помощью call,apply, bind, тогда this это...',
o:[
'новый сконструированный объект',
'*явно указанный объект',
'тот самый объект контекста',
'глобальная область видимости',
'undefined',
]},
{ask:'Если функция вызвана с new, тогда this это...',
o:[
'*новый сконструированный объект',
'явно указанный объект ',
'тот самый объект контекста',
'глобальная область видимости',
'undefined',
]},

{ask:'Что будет выведено в консоль?<br><div style="text-align:left">function foo(){<br><span style="padding-left:10px">var a=2;</span><br><span style="padding-left:10px">this.bar();</span><br>}<br>function bar(){<br><span style="padding-left:10px">var a=1;</span><br><span style="padding-left:10px">console.log(this.a);</span><br>}<br>foo();</div>',
o:[
'*undefined',
' 1',
'2',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">//new<br>function user(name){this.name=name}<br>const john=new user(&apos;John&apos;);<br>console.log(john.name);// </div><br>',
o:[
'*John',
'name',
]},


{ask:'Что будет выведено в консоль?<div style="text-align:left">//apply<br>var foo=function(name){console.log(this.greet.name)}<br>var obj={greet:&apos;hello&apos;}<br>var args={"frend"};<br>foo.apply(obj,args);//  <br></div>',
o:[
'hello frend',
'hello',
'*SyntaxError',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">//call<br>var foo=function(){console.log(this.greet)}<br>var obj={greet:&apos;hello&apos;}<br>foo.call(obj);// <br></div>',
o:[
'*hello',
'true',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">function f(){console.log(this)}<br>const boo=f.bind(123);<br>//f();//[object Window]<br>boo(); //  <br></div>',
o:[
'[object Window]',
'*123',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">//bind<br>var obj={greet:&apos;hello&apos;}<br>var foo=function(){console.log(this.greet)}.bind(obj);<br>foo();//  </div>',
o:[
'*hello',
'0',
]},

{ask:'Что будет выведено в консоль?//default<div style="text-align:left">function foo(){console.log(this.a)}<br>var a=2;<br>foo();// </div>',
o:[
'*2',
'SyntaxError',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">function foo(){<br><span style="padding-left:10px">console.log(this.a)</span><br><span style="padding-left:10px">}</span><br>var obj={a:1, foo: foo}<br>var bar=obj.foo;<br>var a=2;<br>bar();<br></div>',
o:[
'SyntaxError',
'1',
'*2',
]},

{ask:'Что будет выведено в консоль?<br><div style="text-align:left">function printn(){<br><span style="padding-left:10px">console.log(this.name)</span><br>}<br>var person={<br><span style="padding-left:10px">name: &apos;Kop&apos;,</span><br><span style="padding-left:10px">printn:printn</span><br><span style="padding-left:10px">};</span><br>let name=&apos;Joanna&apos;;<br>person.printn();<br>Юзай правило неявной привязки</div>',
o:[
'Joanna',
'*Kop',
'undefined',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">var firstn=&apos;Joanna&apos;;<br>function printfn(){<br><span style="padding-left:10px">console.log(this.firstn);</span><br><span style="padding-left:10px">}</span><br>var person={<br><span style="padding-left:10px">firstn:&apos;Riply&apos;,</span><br><span style="padding-left:10px">printfn: printfn(),</span><br><span style="padding-left:10px">}</span><br></div>',
o:[
'*Joanna',
'Riply',
'undefined',
]},

{ask:'Что будет выведено в консоль?<div style="text-align:left">function foo(){<br><style="padding-left:10px">console.log(this.a)}</span><br><style="padding-left:10px">var obj={a:1, foo: foo}</span><br><br>var bar=obj.foo;<br>var a=2;<br>bar();<br></div>',
o:[
'SyntaxError',
'1',
'*2',
]},



{ask:'Какое свойство связанное с наследованием, есть у любого обьекта?',
o:[
'parentNode',
'parent',
'*__proto__',
]},

{ask:'Тип от которого наследуются все объекты в js?',
o:[
'*object',
'null',
'class',
]},

{ask:'Важнейшие понятия асинхронности в js',
o:[
'*CallStack',
'*Event Loop',
'*Promises',
]},

{ask:'setTimeout(0) выполнится через ....',
o:[
'0мс',
'*4мс',
]},

{ask:'Какой из стеков имеет приоритет?',
o:[
'*микро. тот где промисы',
'макро. тот где таймеры',
]},


{ask:'Что будет?<div style="text-align:left">function f1(){<br><span style="padding-left:10px">return new Promise(function(resolve,reject){</span><br><span style="padding-left:20px">setTimeout(function(){resolve("one")},1000)})}</span><br><br>function f2(){<br><span style="padding-left:10px">return new Promise(function(resolve,reject){</span><br><span style="padding-left:20px">setTimeout(function(){resolve("two")},2000)})}</span><br><br>f1()<br><span style="padding-left:10px">.then(f2())</span><br><span style="padding-left:10px">.then(function(result){console.log(result)});</span></div>',
o:[
'*one',
'two',
]},


{ask:'Другое название микротаска ....',
o:[
'Call Queue',
'Event Loop',
'*Message Queue',
'Call Stack',
]},

{ask:'Какой это синтаксис ES?<div style="text-align:left">const random=()=>Promise.resolve(Math.random());<br>const sum2=async()=>{<br><span style="padding-left:10px">const first=await random();</span>	<br><span style="padding-left:10px">const second=await random();</span>	<br><span style="padding-left:10px">const third=await random();</span>	<br><span style="padding-left:10px">console.log(`Result ${first+second+third}`);</span>	<br>	}<br>sum2()</div>',
o:[
'устаревший',
'*современный',
]},

];	
	const au=document.querySelector('.a7');	
	const k7=document.querySelector('#k7');	
	const tst=au.querySelector('.tst');
	const scat=document.querySelectorAll('.a7, .overlay');
	const cr7js=document.querySelector('.cr7js');
	cr7js.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});	
	k7.addEventListener('click',()=>{[...scat].forEach(x=>x.classList.toggle('hidden'))});
	fn(au,a);
})();