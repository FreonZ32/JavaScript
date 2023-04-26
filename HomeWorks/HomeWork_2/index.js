//HW_1
document.getElementById("HW1_button").onclick = ()=>
{
    let n = prompt("Введите число");
    if(n >= 0 && n <12) alert("Вы ребенок!"); 
    else if(n >= 12 && n <18) alert("Вы подросток!");
    else if(n >= 18 && n <60) alert("Вы взрослый!");
    else if(n >= 60 && n <123) alert("Вы пенсионер!");
    else if(n >= 122) alert("Вы бессмертный!");
    else alert("Ошибка ввода!");
}
//HW_2
document.getElementById("HW2_button").onclick = ()=>
{
    let n = prompt("Введите число от 0 до 9");
    switch(+n)
    {
        case 0: alert(")");break;
        case 1: alert("!");break;
        case 2: alert("@");break;
        case 3: alert("#");break;
        case 4: alert("$");break;
        case 5: alert("%");break;
        case 6: alert("^");break;
        case 7: alert("&");break;
        case 8: alert("*");break;
        case 9: alert("(");break;
        default: alert("Ошибка ввода!");
    }
}
//HW_3
document.getElementById("HW3_button").onclick = ()=>
{
    let n = prompt("Введите трехзначное число");
    if(n.length>3 || Number.isNaN(Number(n))) { alert("Ошибка ввода!"); return;}
    if(n[0]==n[1]|| n[0] == n[2] || n[1] == n[2])alert("Есть одинаковые цифры");
    else alert("Одинаковыx чисел нет");
}
//HW_4
document.getElementById("HW4_button").onclick = ()=>
{
    let n = prompt("Введите год");
    if(n.length>4 || Number.isNaN(Number(n)) || +n<0) { alert("Ошибка ввода!"); return;}
    if(n%400 == 0 || (n%4 == 0 && n%100 != 0))alert("Год високосный");
    else alert("Год не високосный");
}
//HW_5
document.getElementById("HW5_button").onclick = ()=>
{
    let n = prompt("Введите пятизначное число");
    if(n.length != 5 || Number.isNaN(Number(n))) { alert("Ошибка ввода!"); return;}
    if(n[0] == n[4] && n[1] == n[3])alert("Число является палиндромом!");
    else alert("Число НЕ является палиндромом!");
}
//HW_6
document.getElementById("HW6_button").onclick = ()=>
{
    let n = prompt("Введите количество USD");
    let ansver = "Ваша сумма:\n";
    if(Number.isNaN(Number(n))) { alert("Ошибка ввода!"); return;}
    if(document.getElementById("HW6_Cb1").checked)
    { ansver+= "EUR: " +  +n*0.90 + "\n"; }
    if(document.getElementById("HW6_Cb2").checked)
    { ansver+= "UAN: " +  +n*6.92 + "\n"; }
    if(document.getElementById("HW6_Cb3").checked)
    { ansver+= "AZN: " +  +n*1.70 + "\n"; }
    if(ansver.length == 12){ alert("Выберите во что перевести!");return; }
    alert(ansver);
}
//HW_7
document.getElementById("HW7_button").onclick = ()=>
{
    let n = prompt("Введите сумму покупки");
    if(n>=200 && n<300) n = +n-(+n/100*3);
    if(n>=300 && n<500) n = +n-(+n/100*5); 
    if(n>=500) n = +n-(+n/100*7); 
    alert("Ваша цена со скидкой: " + n);
}
//HW_8
document.getElementById("HW8_button").onclick = ()=>
{
    let l = prompt("Введите длину окружности");
    let s = prompt("Введите периметр квадрата");
    if(s/8 > l/(Math.PI * 2))alert("Окружность войдет в данный квадрат");
    else alert("Окружность НЕ войдет в данный квадрат");
}
//HW_9
document.getElementById("HW9_button").onclick = ()=>
{
    let k = 0;
    let n = 3;
    while(+n)
    {
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        let c;
        switch(Math.floor(Math.random() * 3))
        {
            case 0:c = "*";break;
            case 1:c = "/";break;
            case 2:c = "+";break;
            case 3:c = "-";break;
        }
        let l = prompt("Сколько будет " + a + " " + c + " " + b + "?");
        let ansver;
        switch(c)
        {
            case "*":ansver = a*b;break;
            case "/":ansver = a/b;break;
            case "+":ansver = a+b;break;
            case "-":ansver = a-b;break;
        }
        if(ansver == l) {alert("Ваш ответ правильный!"); k+=2;}
        else alert("Ваш ответ НЕ правильный!");
        n--;
    }
    alert("Вы набрали " + k + " баллов!");
}
//HW_10
document.getElementById("HW10_button").onclick = ()=>
{
    var l = new Date(prompt("Введите дату"));
    l.setDate(l.getDate()+1);
    var newL = l.toLocaleDateString('en-US');
    alert(newL);
}