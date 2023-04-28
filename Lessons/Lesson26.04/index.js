let f1 = document.getElementById("ButOne");
function one()
{
    console.log("Hello!");
}

//one(); //Вызывает сразу

//f1.onclick = one;

//document.getElementById('ButOne').onclick = one;

// function two()
// {
//  console.log("Hello!");
//  return 0;
// }
// console.log(1 + two());

// f1.onclick = function()
// {
//     console.log(two());
// }

// let a = 8;
// let v = 8;
// function um()
// {
//     console.log(a*v);
//     return 1;
// }
// f1.onclick = um;
// console.log(11*um());

// let r = 12;
// let t = 4;
// function swap()
// {
//     console.log(r, t);
//     r = ~(r^t);
//     t = ~(r^t);
//     r = ~(r^t);
//     console.log(r, t);
// }
// swap();

// let Per1 = document.getElementById("fone");
// let Per2 = document.getElementById("ftwo");
// let but = document.getElementById("ButTwo");
// function um2()
// {
//     console.log(Per1.value * Per2.value);

//     console.log(document.getElementById("fone").value * document.getElementById("ftwo").value);
// }
// but.onclick = um2;

// let b = 8;
// let t = 10;
// function um3()
// {
//     return b*t;
// }
// let c1 = um3();
// console.log(c1);
// let c2 = 10*um3();
// console.log(c1,c2);
// alert(c1 + " " + c2);

// function um4(a,v)
// { return a*v; }
// um4();     //ничего не произойдет
// let t = 10;
// console.log(um4(4, 5));
// console.log(um4(4, t));

// //Анонимные функции
// f1.onclick = function()
// {
//     console.log("ВО");
// }
// f1.onclick = () =>
// {
//     console.log("ВО");
// }

// let log = document.getElementById("log");
// let pass = document.getElementById("pass");
// let btn = document.getElementById("gobtn");
// btn.onclick = function()
// {
//     console.log(log.value);
//     console.log(pass.value);
//     if(log.value == "test" && pass.value == "test")
//     { alert("Вы ввели верные данные");}
//     else alert("Данные не верные");
// }

alert("После внесения на счет: 23789" );