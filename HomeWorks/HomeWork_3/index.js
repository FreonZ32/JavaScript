let superNumbers = [6,28,496,8128,33550336,8589869056,137438691328,2305843008139952128n, 2658455991569831744654692615953842176n];

//HW_1
document.getElementById("HW1_button").onclick = ()=>
{
    let f = prompt("Введите первое число");
    let s = prompt("Введите второе число");
    let a = Сomparison(f,s);
    alert(a);

}
function Сomparison( first, second)
{
    if(first == second)return 0;
    return (first > second) ? 1 : -1;
}

//HW_2
document.getElementById("HW2_button").onclick = ()=>
{
    let n = prompt("Введите число");
    alert(factorial(n));
}
function factorial(n)
{
    if(n == 1)return 1;
    else return n*factorial(n - 1);
}

//HW_3
document.getElementById("HW3_button").onclick = ()=>
{
    let f = prompt("Введите первое число");
    let s = prompt("Введите второе число");
    let t = prompt("Введите третье число");
    alert(combination(f,s,t));
}
function combination(a,b,c)
{
    return a + b + c;
}

//HW_4
document.getElementById("HW4_button").onclick = ()=>
{
    let f = prompt("Введите длину стороны квадрата");
    alert( "S = " + Square(f));
}
document.getElementById("HW4_1_button").onclick = ()=>
{
    let f = prompt("Введите длину");
    let s = prompt("Введите ширину");
    alert( "S = " + Square(f,s));
}
function Square(a, b=0)
{
    return (b == 0)? a*2 : a*b;
}

//HW_5
document.getElementById("HW5_button").onclick = ()=>
{
    let f = prompt("Введите число");
    if(perfectNumber(f))alert("Это идеальное число");
    else alert("Это не идеальное число.");
}
function perfectNumber(n)
{
    for(let i = 0; i < superNumbers.length-1; i++)
    if(n == superNumbers[i])return 1;
    return 0;
};

//HW_6
document.getElementById("HW6_button").onclick = ()=>
{
    let f = prompt("Введите первое число диапазона");
    let s = prompt("Введите конечное число диапазона");
    let n = perfectNumberS(f,s);
    if(n.length == 0)alert("Идеальных чисел нет");
    else alert(n);
}
function perfectNumberS(f,s)
{
    let numbers = [];
    for(f; f < s; f++)
        for(let i = 0; i < superNumbers.length-1; i++)
        if(f == superNumbers[i])numbers.push(f);
    return numbers;
}

//HW_7
document.getElementById("HW7_button").onclick = ()=>
{
    TimeOnBoard(10);
}
function TimeOnBoard(hh,mm = "00",ss = "00")
{
    if(hh>23 || hh < 0 || mm >59 || mm <0 || ss>59 || ss< 0)return 0;
    else 
    {
        let f = new Date("2000-01-01T"+ hh +":"+ mm + ":" + ss + ".000Z");
        alert( f.toLocaleTimeString());
    }
}

//HW_8
document.getElementById("HW8_button").onclick = ()=>
{
    TimeOnBoardInSec(15);
}
function TimeOnBoardInSec(hh,mm = "00",ss = "00")
{
    if(hh>23 || hh < 0 || mm >59 || mm <0 || ss>59 || ss< 0)return 0;
    else 
    {
        let f = new Date("2000-01-01T"+ hh +":"+ mm + ":" + ss + ".000Z");
        const seconds = f.getHours() * 3600 + f.getMinutes() * 60 + f.getSeconds();
        return seconds;
    }
}

//HW_9
document.getElementById("HW9_button").onclick = ()=>
{
    TimeConverter(9802);
}
function TimeConverter(t)
{
    let hours = Math.floor(t / 60 / 60);
    let minutes = Math.floor(t / 60) - (hours * 60);
    let seconds = t % 60;
    return hours + ":" + minutes + ":" + seconds;
}

//HW_10
document.getElementById("HW10_button").onclick = ()=>
{
    alert(TimeComparison("23:19:30", "15:20:30"));
}
function TimeComparison(firstTime, secondTime)
{
    let ft = firstTime.split(":");
    let st = secondTime.split(":");
    return TimeConverter(TimeOnBoardInSec(ft[0],ft[1],ft[2]) - TimeOnBoardInSec(st[0],st[1],st[2]));
}
