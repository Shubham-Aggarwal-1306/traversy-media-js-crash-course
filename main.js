// alert("Hello World");

console.log("Hello World");
console.error("This is an error");

const name = "John";
// const age = 30;

// console.log("My name is " + name + " and I am " + age);

// String, Numbers, Boolean, null, undefined

const s = "Hello World";

const age = 45;

const rating = 4.5;

const isCool = true;

const x = null;

const y = undefined;

let z;

console.log(typeof s);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

const st = 'Technology, computers, it, code';

console.log(st.length);

console.log(st.toUpperCase());

console.log(st.toLowerCase());

console.log(st.substring(0, 5));

console.log(st.substring(0, 5).toUpperCase());

console.log(st.split(', '));

// Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
    }
}


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];


const todoJSON = JSON.stringify(todos);

console.log(todoJSON);


for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.text);
}

//While loop
let i = 0;
while (i < 10) {
    console.log('While Loop Number: ' + i);
    i++;
}

//High Order Array Methods

//forEach, map, filter

todos.forEach(function (todo) {

    console.log(todo.text);
}

);

const todoText = todos.map(function (todo) {

    return todo.text;
}

);

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {

    return todo.isCompleted === true;
});


console.log(todoCompleted);


const color = x > 10 ? 'red' : 'blue';


switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}


function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

addNums(5, 4);

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1.getBirthYear());

class p {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const p1 = new p('John', 'Doe', '4-3-1980');

console.log(p1.getFullName());

console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');

// Multiple elements
console.log(document.querySelectorAll('.item'));

const btn = document.querySelector('.btn');

btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#f4f4f4';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter fields');
    } else {
        console.log('success');
    }
}

