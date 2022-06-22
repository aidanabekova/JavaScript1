// function sayHello() {
//     console.log('Hello')
// }
// function getFullName() {
//     if(age < 18) {
//         console.log('Close')
//     } else {
//         console.log(`${user.first_name} ${user.last_name} Open`)
//     }
// }
//
// const age = prompt('How old are you?')
// const user = {
//     first_name: 'Aidana',
//     last_name: 'Bekova'
// }
// getFullName(user, age)

// const anonym = function (users) {
//     console.log(user, users)
// }
// anonym()

// function numbers(number1, number2) {
//     if(number1 > number2) {
//         console.log('Первое больше')
//     } else if (number1 < number2) {
//         console.log('Второе больше')
//     } else {
//         console.log('Они равны')
//     }
// }
// const  number = {
//     number1: prompt('First number:'),
//     number2: prompt('Second number:')
// }
// numbers(number.number1 , number.number2)
//
// function twoMass(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         alert('Первый больше')
//     } else if (arr1.length < arr2.length) {
//         alert('Второй больше')
//     } else {
//         alert('Они равны')
//     }
// }
//
// const arr1 = [1233, 1234, 2345, 56, 4, 343123]
// const arr2 = [3456, 5432, 23445, 4443]
// twoMass(arr1, arr2)

// function getFullName(user) {
//     console.log(user.first_name, user.last_name)
// }
//
// function callBack() {
//     console.log('I am Call Back')
// }
//
// const user = {
//     first_name: 'Jack',
//     last_name: 'Barbaro'
// }
// getFullName(user, callBack())

// const button = document.getElementById('button');
// const input = document.getElementById('input');
//
// button.onclick = function () {
//     // alert(input.value)
//     console.log(input.value)
// }


//SECOND VERSION
//циклы
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var fruits = ['banana', 'orange', 'pineapple', 'raspberry'];
// var numbers = [4, 1, 7, 3, 9, 5 ,0, 8];
// var i = 0;
// while (fruits[i] !== 'pineapple'){
//     console.log(fruits[i]);
//     i++;
// }

// i=0;
// var isEven = false;
// var evenNumber;
// //цикл с предусловием
// while(!isEven || i >= numbers.length) {
//     evenNumber = numbers[i];
//     isEven = evenNumber % 2 === 0;
//     i++;    //i++ выход из цикла
// }
// console.log('Even number is', evenNumber ? evenNumber : 'not found');

//цикл с постусловием
// var blackList = ['ksenya', 'anna', 'max', 'john', 'rain'];
// var name;
// do {
// name = prompt('What is your name?');
// } while (name === '' || blackList.includes(name.toLowerCase()));//это цикл ,который не будет работать дальше, пока ты что-то не введешь в prompt
// console.log('Your name is', name);
//includes это метод массива в жс,в который мы передаем что-то , а он говорит есть такой элемент в массиве или нет

// break continue

// var names = ["eugene", "aidar", "ksenya", "anna", "olya", 'john'];
//
// for (var i = 0; i < names.length; i++) {
//   if (blackList.includes(names[i].toLowerCase())) {
//     console.warn(`${names[i]} ${i} in blacklist!!!`);
//     continue;
//   }
//
//   console.log(`Welcome, dear guest ${names[i]}`);
// }

// for..of
// for (var name of names) {
//     if (blackList.includes(name.toLowerCase())) {
//         console.warn(`${name} in blacklist!!!`);
//         continue;
//     }
//     console.log(`Welcome, dear guest ${name}`);
// }

// var newWord = '';
// for (const letter of 'object') {
//     newWord += letter + '_';
// }
// console.log(newWord);

//Задача на удаление дубликатов из массива
//первый вариант решения
var array = [1, 2, 2, 3, 4, 5, 3, 5, 6, 6];
var distinct = [];
for (const item of array) {
    if (distinct.includes(item)) continue;
    distinct.push(item);
}
console.log(distinct);
//второй вариант решения
var distinct2 = Array.from(new Set(array));   //решение в одну строку.Объяснение: set - это множество,где хранятся только уникальные данные
//и вот с помощью nw Set мы создали новое множество и внутрь закинули наш список с цифрами ,я затем переопределили множество в список с помощью Array.from
console.log(distinct2);

//ФУНКЦИИ

