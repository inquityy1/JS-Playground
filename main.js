// This is hello world program of java script

/* 
	This is
	hello world program
	of java script	
*/

//	console.log("hello world");

//objecst

// const obj ={
//	name: 'Sandi',
//	Age: 24
// }; 

// console.log(obj.Age);

// array

// const a1 = [1,2,3,4,5];
// const a2 = [1,2,null,4,'five'];
// const a3 = ['hello','world','array'];

// const a4 = [
//	[1,2,3],
//	[4,5,6]
// ];

// a3[0] = 'welcome';
// console.log(a3[0]);


// Date and time

// const dt = new Date(2018, 9, 13, 14, 0);

// console.log(dt);


// map

// const roles = new Map();

//roles.set(t1, 'User1');

// create set

// const roles2 = new Set();

// specify roles to the user
// roles.add('User1');

// string concatenation

//let temp = 20.5;
//let strcat = `Weather of india is #{temp \u00b0C}`;

//let str = "One line\n Second line"

//console.log(strcat);
//console.log(str);

//let result1 = 5 * '5';

//let result2 = 5 + '5';

//console.log(result1);
//console.log(result2);

// If Controle Statement

/*
if(expression)
	statement1; // statement executive if ecpression = true
else
	statement2; // statement execute when if expression = false
*/

// let time = 13;// 13 = 1pm

// if (time < 12) {// assume 12 as 12pm
//	console.log('Good Morning');
// } else if (time < 17) {
//	console.log('Good Afternoon');
// } else {
//	console.log('Good Evening')
// }


/*
switch(expression){
	case value1:
		// executed when the result of the value matches value1
		[break];
	case value2:
		[break];
		// executed when the result of the value matches value2 
	case value3:
		// executed when the result of the value matches value3
		[brake];
	case valueN:
		// executed when the result of the value matches valueN
		[break];
	default:
		// executed when none of the value matches to the expression
		[break];
}
*/

/*
let ans = 3;

switch (ans) {
	case 1:
		console.log("you have select JavaScript");
		break;
	case 2:
		console.log("you have select Python");
		break;
	case 3:
		console.log("you have select PHP");
		break;
	case 4:
		console.log("you have select Asp.net");
		break;
	default:
		console.log("Sorry, you chose wrong answer...!");
		break;
} 
*/


/*
	Loops
	
	JavaScript has 4 Looping statements
	1) While loop
	2) do/While loop
	3) for loop
	4) for/in loop
*/

// While Loop
/*
while(expression){
	statement1;
	statement2;
	statementN;
}
*/

// let count = 0;

// while (count < 10) {
//	console.log(count); // print count variable value on console
//	count++ // increase count variable value by 1
// }

// Do/While Loop

/*
do {
	statement1;
	statement2;
	statementN;
} while(expression);
*/

// let count = 0;

// do{
//	console.log("Count Value " + count);
//	count++;
// } while (count < 5);

// For Loop

// for (initialization; expression; increment/decrement)
//	statement;


// for (let count = 0; count < 5; count++) {
//	console.log('number: ' + count);
// }

// for (let i = 0, j = 5; i < 5; i++, j--) {
//	console.log(i + ' and ' + j);
// }

// for (let i = 1; i < 4; i++) {
//	for(let k = 1; k < 4; k++) {
//		console.log(i + ', ' + k);
//	}
//	console.log("\n");
// }


/* For...in Loop */

// for (variable in object)
//	statement;

// const obj = {a:1, b:2, c:3, d:4};

// for (let o in obj){
//	console.log(o + ' : ' + obj[o])
// }

/*
	variable o =
	console.log() =
*/

// for... of loop


// for (variable of object)
//	statement;


// let ary = [1, 2, 3, 4, 5];

// let str = 'tuition';

// for (let value of ary){
//	value += 1;
//	console.log(value);
// }

//   EXPRESSION

// let y;
// j = y = 4 * 5;
//  j = y = 20;
// j = 20;

// console.log(j);
// console.log(y);

// % - when u working with that u want to know how much is the rest
// 7%3=1

//    STRICT AND ABSTRACT EQUALITY

// let x = 10, str = '10';

// console.log(x == str);

// console.log(x === str);

// console.log(x === Number(str));

// console.log(x != str)




// Destructing Assignment Operator

// const obj = { a:1, b:2, c:3, e:5};

// ({a, b, c, d, e} = obj);


// console.log(a);
// console.log(b);
// console.log(c);


// console.log(d);

// const arry = [1, 2, 3, 4, 5, 6];

// let [a, b, c, ...rest] = arry;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(rest);


// let x;

// x = 5 + 3 * 2;

// x = 20 /4 + 2 * (7 + 4 - 2);
	// x = 20 / 4 + 2 * (9);
	// x = 5+ 2 * (9);
	// x = 5 + 18;
	// x = 23;

// console.log(x);


/*  Member acces(.) */

// object.property;

// const obj = { id: '1', name: 'daily'};

// console.log(obj.name);

// console.log(obj['name']);


/* in Operator */

// const car = { cname: 'BMW', model: 'i8', year: 2015 };

// console.log('model' in car);


/* Operator new */

// class Model {
//	constructor() {
		
//	}
// }

// const c1 = new Model();

// const c2 = new Model();


/* instanceof Operator */

// const d = new Date();

// console.log(d instanceof Date);

// const arry = [1, 2, 3];

// console.log(arry instanceof Array);

// console.log(arry instanceof Date);

// const obj = { x:1, y:2, z:3};

// console.log('x' in obj);


// delete obj.x;

// console.log('x' in obj);

// const arry2 = [1, 2, 3, 4];

// console.log(arry2[3]);

// delete arry[3];

// console.log(arry[3]);


/* conditional operator (?:) */

// 1operand ? 2operand : 3operand;


// let print = "hey everyone";

// if (print) {
//	console.log(print);
// } else {
//	print = "welcome";
//	console.log(print);
// }


// Usinng Conditional Operator

// print = print ? print : "welcome";

// console.log(print);


/* Jump Statement */


/* Break */

// break;


// for (let i = 1; i <= 5; i++) {
// 	if( i == 3) break;
// 	console.log(i);
// }

// break labelname;

/* Labeled Statement */

// identifier : statement;

// let a = 1;

// label : while(a == 1){
//	console.log(a);
//	break label;
// }


/* continue statement */

// continue;

// continue labelname;

// let x = 0;

// while (x < 10){
	
//	x++;
	
//	if (x == 5) {
//		continue;
//	}
	
//	console.log(x)
// }

/* return statement */

// function add(x) {
//	return x + x;
// }

// console.log(add(3));


// function funname([arg, ..., argn]){
//	statements;
// }

function Magic() {
	return "hello function";
}


const obj = { f:Magic};

console.log(obj.f());





















