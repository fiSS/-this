let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.apply(age, ["Вася","Пупкин"]);

//1 способ
// function User(name, id) { //фунция с помощью this стала конструктором, с помощью неё можем создавать новых пользователей
//     this.name = name;       //такие ф-ии предназначены для конструирования объектов и создания копий
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello! ' + this.name); //обращаемся к свойству в этом объекте
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' Ушел');
// }
// //конструкторы нужны для создания новых однотипных объектов
// let ivan = new User('Ivan', 25), //Создать экземпляр объекта, используя  new
//     alex = new User('Alex', 20); //Конструктором становится любая функция, вызванная через new.

    
//     console.log(ivan);
//     console.log(alex);

//     alex.exit();

//2 способ
 // function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         //return this.a + this.b; //контекст исполнения будет весь объект window
//         return a + b; //необходимо использовать замыкание функций, в себе ф-я sum a и b не находит, поднимается на уровень выше в функцию showThis
//     }
//     console.log(sum());
// }

// showThis(4, 6);
// showThis(4, 63);

//3 способ
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'john'

// };

// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);

// }
// //насильно связали функцию с данными (let user = {name: 'john')
// console.log(sayName.call(user, ' smith')); //в метод call можем передать обычную строку
// console.log(sayName.apply(user, [' Snow'])); // в apply можем передать массив с кучей данных

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2); //то что попадает в bind заменяет значение в this
// console.log(double(3));
// console.log(double(32))

// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.backgroundColor = 'red';
// })

//1. просто вызов функции - window/undefind(use strict)
//2.Метод объекта - this = объект
//3.Конструктор (new) - this = новый созданный объект
//4.Указание конретного контекста - call, pply, bind