console.log("Hello!");
console.log("Hello" + " " + "world!");
console.log(123);

// alert("Hello");
// alert("Hello" + " " + "world!");

// document.getElementById("out").innerHTML = "<b>2023</b>";
// document.querySelector(".header").innerHTML = "Привет";
// document.querySelector("#one").innerHTML = "Hi";
// document.getElementById("one").innerHTML = "Пока";

//var a;

// let a;
// a = document.querySelector("#lor"); //присваеваем путь
// a.innerHTML = "<b>2023</b>";    //изменяем содержимое

// let a = 6;
// let b = "Hello";
// console.log("Первая a = ", a);
// console.log(b);

// alert("Первая a = " + a + " " + b);

// let inputIn = document.querySelector(".input_in");
// let button = document.querySelector("button");
// button.onclick = () =>
// {
//     console.log("Работает!!!");
//     console.log(inputIn.value);
//     let b = inputIn.value;
//     alert(b * 2);
//     clickk();
// }
// let clickk = () =>
// {
//     for(let i = 0; i<2; i++)
//     {
//         alert(inputIn.value);
//     }
// }

// document.querySelector("button").onclick =() =>
// {
//     console.log("Работает!");
//     console.log(document.querySelector(".input_in").value);
//     let b = document.querySelector(".input_in").value;
//     console.log(b*2);
// }

// let inputIn = document.querySelector(".input_in");
// let button = document.querySelector("button");
// let d = document.querySelector(".aut");
// button.onclick = function()
// {
//     console.log("Работает");
//     console.log(inputIn.value);    //получить значение
//     let b = +inputIn.value;    //явное преобразование в числовую переменную
//     console.log(b+10);
//     d.innerHTML = "строка строка строка";
//     inputIn.value = "";
// }

let iptOne = document.querySelector(".inputOne");
let iptTwo = document.querySelector(".inputTwo");
let button = document.querySelector("button");

button.onclick = function()
{
    let a = +iptOne.value+ +iptTwo.value;
    let b = +iptOne.value* +iptTwo.value;
    let c = +iptOne.value/ +iptTwo.value;
    alert(a + " " + b + " " + c);
}