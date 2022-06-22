//first version
const a = "abc"; //string

let c = 32;  //number

const bool = true;
const bool2 = false; //boolean

// console.log(typeof c)
// console.log(typeof a)
const obj = {  //object
    key: "value",
    username: "Bekova Aidana",
    data: {
        first_name: "Lake",
        last_name: "Rus"
    }
}
// console.log(obj.username)
// console.log(obj.data.last_name)

// const arr = ["DADA", 234, true, false]
// console.log(arr[2], arr[0])
// console.log(arr)
// console.log(typeof arr)

// const name = prompt("What is your name?")
// console.log("Hello" + name)
// const name = alert("нельзя!")
// console.log(name)
// const first_number = prompt('First number?')
// const last_number = prompt('Last number?')
// if(first_number < last_number){
//     console.log(first_number + "<" + last_number)
// } else if(first_number > last_number){
//     console.log(first_number + ">" + last_number)
// }else {
//     console.log(first_number + "=" + last_number)
// }

// const age = prompt('How old are you?')
//
// if(age < 18){
//     console.log('вам нельзя!')
// } else if (age > 18){
//     console.log('вам можно!')
// } else {
//     console.log('спорно')
// }

const arr2 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
console.log(arr2[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0])

// SECOND VERSION

/*
многострочник комментарий
*/

var num1 = Number.parseInt(prompt('Enter number 1: '));
var num2 = Number.parseInt(prompt('Enter number 2: '));
console.log('First number:', num1);
console.log('First number:', num2);
console.log('+', num1 + num2);
//весь код выше можно прописать на одну строчку как ниже
// var num1=Number.parseInt(prompt('Enter number 1: '));var num2=Number.parseInt(prompt('Enter number 2: '));console.log('First number:',num1);console.log('First number:',num2);console.log('+',num1+num2)

console.log('isFinite 5', isFinite(5));
console.log('isFinite Infinity', isFinite(Infinity));
console.log('isNaN NaN', isNaN(NaN));


//boolean
var isProgrammer = true;
var isLead = false;
//нестрогое сравнение - non strict
console.log('==', 5 == '5');
console.log('!=', 5 != 7);
//строгое сравнение - strict
console.log('===', 5 === '5');
console.log('!==', 5 !== 7);
//и так далее <, >, <=, >=

var name = 'Max';
var age = 525;

if (age < 0 || age > 150) {    // || означает  "и" ,типо and
    console.log('Invalid age');
    console.log(age);
} else if (age > 0 || age < 18) {
    console.log('Hi', name);
} else if (age >= 18 && age <= 35) {   // && ознает "или", типо or
    console.log('Hello', name);
} else {
    console.log('Welcome, dear', name);
}

//string
var ivan = 'Ivan';
//конкатенация(сложение строк)
var message = 'Hello, ' + "\ndear " + ivan;
//интерполяция
var message2 = `Hello, dear ${ivan}`;
console.log(message);
console.log(message2);

//escaping - экранирование
var path = 'C:\\Code\\"JavaScript1"\\lesson1';
console.log(path);
//------------------------------------------------------------------------
var size = "M";
var euSize = 0;
if (size === "S") {
    euSize = 36;
} else if (size === 'M') {
    euSize = 42;
} else if (size === "L") {
    euSize = 48;
} else {
    euSize = 1;
}
console.log('europiean size', euSize)
//упрощенная версия кода выше
switch (size) {
    case 's':
    case 'S':
        console.log('Small');
        break;
    case 'm':
    case 'M':
        console.log('Medium');
        break;                      //завершает выполнение ветки
    case 'l':
    case 'L':
        console.log('Large');
        break;
    default:
        console.log('Unknown size')
}