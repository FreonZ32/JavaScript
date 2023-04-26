//HW_1
document.getElementById("HW1_button").onclick = ()=>
{
    let name = prompt("Введите имя");
    if(name==="")
    {
        alert("Введите имя чтобы продолжить!");
        name = "";
    }
    else
    {
        alert("Привет, " + name + "!");
        name = "";
    }
}
//HW_2
document.getElementById("HW2_button").onclick = ()=>
{
    const dateNow = 2023;
    let date =prompt("Введите год своего рождения!");
    if(+date > dateNow){ alert("Вы из будущего?"); return; }
    if(date.length != 4 || !(Number.isInteger(+date)) || Number.isNaN(Number(date))) { alert("Неправильный формат даты! Пример: 2010"); return; }
    let age = +dateNow - +date;
    if(age<5) 
    alert("Вам " + age + " годика!");
    else 
    alert("Вам " + age + " лет!")
}
//HW_3
document.getElementById("HW3_button").onclick =()=>
{
    let a = prompt("Введите длину стороны квадрата");
    if( Number.isNaN(Number(a))) { alert("Введите число, а не кукавки!!!"); return; }
    alert("Периметр квадрата равен: " + a*4);
}
//HW_4
document.getElementById("HW4_button").onclick =()=>
{
    let a = prompt("Введите радиус окружности");
    if( Number.isNaN(Number(a))) { alert("Введите число, а не кукавки!!!"); return; }
    alert("Площадь круга равна: " + Math.PI*(a**2));
}
//HW_5
document.getElementById("HW5_button").onclick =()=>
{
    let l = prompt("Введите расстояние между городами");
    let h = prompt("Введите расстояние между городами");
    alert("Вы должны двигаться со скоростью " + l/h + " Км/ч");
}
//HW_6
document.getElementById("HW6_button").onclick =()=>
{
    const euro = 0.90620;
    let dollar = prompt("Введите сколько у вас в Долларах");
    alert("В евро у вас " + dollar*euro);
}
//HW7
document.getElementById("HW7_button").onclick =()=>
{
    const file = 820;
    let size = prompt("Введите сколько у вас Гб");
    alert("Всего влезет " + Math.trunc(size*1000/file) + " файлов по 820 Мб");
}
//HW8
document.getElementById("HW8_button").onclick =()=>
{
    let money = prompt("Введите сколько у вас на кармане");
    let cost = prompt("Введите сколько стоит шоколадка");
    let n = Math.trunc(money/cost);
    let m = +money-(n*+cost);
    alert("Всего можно купить: " + n + "\nСдачи останется: " +  m);
}
//HW9
document.getElementById("HW9_button").onclick =()=>
{
    let number = prompt("Введите число (целое)");
    if(Number.isNaN(Number(number))){alert("По русски же написано, ЧИСЛО нужно!"); return;}
    if(!(Number.isInteger(+number))){alert("По русски же написано, ЦЕЛОЕ!"); return;}

    // let l= 0;
    // while(number)
    // {
    //     l = +l * 10 + +number % 10;
    //     number = Math.floor(+number / 10);
    // }
    // alert(l);

    let reverse = number.split("").reverse().join("");
    alert(reverse);
}
//HW10
document.getElementById("HW10_button").onclick =()=>
{
    let number = prompt("Введите число");
    let answer = (Number(+number)%2 == 0)? "четное" : "не четное";
    alert("Ваше число " + answer);
}