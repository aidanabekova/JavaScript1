//first version
// const array = [
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     },
//     {
//         username: 'Jack',
//         full_name: 'Lack Koin'
//     }
//
// ]
// инкрементация
// let i = 0; //i++
// i = i + 1
//
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
// for(let i = 0; i < array.length; i++){
//     if(i === 2){                                   //это универсальный for, чаще всего используется
//         break;
//     } else {
//         console.log(array[i])
//     }
// }
//
// for(let user of array){
//     console.log(user)
// }
//
// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
// }
// for(let key in obj){
//     console.log(obj[key])
// }
// let i = 0
// while(i < 5){
//     console.log('Hello world')
//     i++
// }

// const users = [
//     {
//         username: 'Jack',
//         salary: 500
//     },
//     {
//         username: 'John',
//         salary: 5000
//     },
//     {
//         username: 'Aibek',
//         salary: 10000
//     }
// ]


// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)
// const filteredUsers = []

// for(let user of users){
//     if(user.salary > 500){
//         filteredUsers.push()
//     }
// }
// console.log(filteredUsers)

// const destructUsers = users.map(user => ({
//     name: user.username,
//     salary: user.salary
// }))
// console.log(destructUsers)

// const robot = [
//     {
//         name: 'CCC',
//         value: 350
//     },
//     {
//         name: 'DDD',
//         value: 5000
//     },
//     {
//         name: 'HHH',
//         value: 10000
//     },
//     {
//         name: 'KKKK',
//         value: 9000
//     },
//     {
//         username: 'BBB',
//         value: 100000
//     }
// ]
// const filterRobot = robot.filter(robt => robt.value > 9000)
// console.log(filterRobot)


//SECOND VERSION
//типы данных
// function
var prepareToWork = function (name) {
    console.log("I'm", name, 'and i prepare for work...');
    console.log("1) Wake Up");
    console.log("2) Clean teeth");
    console.log("3) Have breakfast");
    console.log("4) Come out from home");
}
prepareToWork('Stefan Salvatore');
prepareToWork('Damon Salvatore');
console.log(typeof prepareToWork)
//object
var user = {
    name: 'Stefan',
    surname: 'Salvatore',
    age: 28,
    isMarried: false,
    technologies: undefined,
    sayHello: function () {
        console.log('Hello everyone!')
    }
}

var laptop = {
    vendor: 'MacBook',
    model: 'Air 2020',
    RAM: '8gb',
    CPU: {
        vendor: 'cheap m1'
    },
    turnOn: function () {
        console.log('Laptop is working...');
    },
    turnOff: function () {
        console.log("Laptop is shutting down...");
    }
}
console.log(typeof user);
console.log(laptop.model, laptop.vendor)
laptop.turnOn()
laptop = {}  //это не пустой объект, это объект у которого нет свойств и методов
// laptop.turnOff()
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var emptyObject = null;     //когда вы через точку обращаетесь к объекту, который содержит Null, то будет ошибка
console.log(typeof emptyObject)

//унарные операторы
console.log(!true); //!
console.log(-5); //-
//бинарные операторы: + - / % ** > < >= <= == === != !==
//тернарные операторы
var playerColor = 'white';
if (playerColor === 'while') {
    console.log('You start...');
} else {
    console.log('Wait your enemy...');
}
//упрощенная версия кода выше с помощью тернарных операторов
console.log(
    playerColor === 'white' ? 'You start...' : 'Wait your enemy...')


//есть сейф, сейф держит какой-то владелец, но продлить аренду сейфа может не только владелец,
// а лицо, которое он направил вместо себя. Нужно добавить поле, которое бы позволяла записывать туда человека в обход этого владельца,
//т.е если аренда продлевается,то в этой записи будет участвовать не владелец,а то лицо, которое продлило аренду
var clientID = 111;
var ownerID = 222;
console.log('Cell extend by', clientID ? clientID : ownerID);
var isReady = null;
console.log(isReady ? 'True' : 'False');

//truthy and falsy выражения - это означает, что мы можем использовать обычные типы данных и JS сам попытается их превратить в логическое
//есть falsy-выражение, некий ограниченный список,а truthy-это все то, что не входит в falsy.
//falsy: false, 0, "", '', ``, undefined, null, NaN, -0, 0n


//Array - массив
var numbers = [4, 2, 7, 4, 9, 1, 0, 3, 4, 6, 5, 7, 8];
console.log(numbers.sort())  //функция сортировки массивов
var others = [
    true,
    {},
    null,
    undefined,
    'Max',
    48,
    {login: '', password: ''}
];
var fruits = ['banana', 'orange', 'pineapple', 'raspberry'];
console.log(fruits[0][0]); //первая бувка первого объекта
console.log('Qwerty'[3]);  //3 буква слова qwerty
console.log(fruits[0]); //первый элемент в массиве
console.log(fruits[fruits.length - 1]); //последний элемент в массиве
console.log(fruits.length); //длина массива
//методы массива
// fruits.push('apple', 'cherry'); //добавляет новый элемент в конец массива
var firstFruit = fruits.shift();
console.log(firstFruit);  //вытаскивает первый элемент из массива и удаляет его
// var fruitsAdd = fruits.unshift('apple', 'cherry', 'strawberry');console.log(fruitsAdd); //добавляет элементы в начало массива
// fruits.splice(0, 3); //удаляет элементы с какого-то индекса, в нашем случае с 0 индекса удалит 3 элемента
// var deletedFruits = fruits.splice(fruits.length - 3); //удалит 3 элемента с конца массива
var lastFruits = fruits.pop()   //вытаскивает последний элемент из массива и удаляет его

//Задача из Яндекс:
//дан список тегов, нужно посчитать каких тегов сколько
var htmlTags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var htmlTagsCounter = {}
for (var i = 0; i < htmlTags.length; i++) {
    var currentTag = htmlTags[i];
    if (htmlTagsCounter.hasOwnProperty(currentTag)) {
        htmlTagsCounter[currentTag] += 1;
    } else {
        htmlTagsCounter[currentTag] = 1;
    }
}
console.log(htmlTagsCounter);
console.log(Object.keys(htmlTagsCounter).sort(function (tag1, tag2) {
        return htmlTagsCounter[tag2] - htmlTagsCounter[tag1];
    })
);

//объяснение i++
var num = 5;
console.log(num++); //num = num + 1 -> num += 1 -> num++; инкримент(увеличение)
// console.log(++num);
console.log(num--); //num = num -1 -> num -= 1 -> num--; динкримент(уменьшение)
// console.log(--num);

