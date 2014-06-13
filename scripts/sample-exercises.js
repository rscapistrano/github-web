/*
JavaScript
	- Weak typing

Operators with =
	= assignment
	== equality (values can be equal, but type can be different)
	=== strict equality  (values and types must be the same)
*/




// Call Prompt in JS
var name = prompt('What is your name?');
alert('Hello, ' + name);


// Create Variables
// Leaving out 'var' creates a global variable and future headaches

var cat = 'Teega', colorFur = 'Undecided', favortiteCatFoor = 'Bif';





// Create an Object

var animal1 = {
   'genus'        : 'cat',
   'species'      : 'biter',
   'callType'     : 'hissing',
   'quote'        : 'will look cute for bif',
   'maxOffspring' : 0,
   'noisy'        : false,
   'deadly'       : true
}

// Identify Object Value
animal1['quote']

// or 
animal1.quote

// Display a value in html page
document.body.innerText = animal1.quote


// Adding a property to an Object
animal1.whereItLives = 'manhattan highrise';
// or
Animal1['whereItLives'] = 'manhattan highrise';

// Deleting a property to an Object
delete animal1.color;





/* References
	• This statement does not make the same copy of an object so changes to animal2 will apply to animal1.
	• This gives you two objects that point to the same value. You will only run into this when dealing with objects.
	• To copy an object, you will need to create another variable with the same properties.
*/ 
var animal2 = animal1;





// Regular Expressions

var string1 = 'this is the best video'
var string2 = 'i love this video'
var string3 = 'it is the best ever'

var regex = /this/;

console.log( regex.test(string1) );
console.log( regex.test(string2) );
console.log( regex.test(string3) );





/* CONDITIONAL CODE

{ braces - code block }

if ( condition ) {
	your conditional code goes here..
}
*/

// Simple If Statement
var a = 5;
var b = 10;

if ( a < b ) {
	alert('Yes, a is less than b.');
}

if ( a > b ) {
	alert('Yes, a is greater than b.');
}

if ( a === b ) {
	alert('a and b are exactly equal');
}



// Complex Conditions

var balance = 0;

if ( balance > 0 ) {

	alert('The balance is positive');

} else {
	alert('Panic attack coming in 3, 2, 1...');
}





// Conditional Ifs

var	answer = window.promt('Type YES, NO, or MAYBE. Then click Ok.');

	if (answer === 'YES') { console.log('You brown noser!'); }

	else if (answer === 'NO') { console.log('How dare you deny me!'); }

	else if (answer === 'MAYBE') { console.log('What the fuck! Make up your mind!'); }

	else { console.log('This game is over.'); }





/* Conditionals Switch
	This is best used when you have several cases.
*/ 

var gasGrade = 'Premium';

switch ( gasGrade ) {
	case 'Regular' :
			alert('It is $3.15');
			break;   // Jump us out of the switch statement and move on to the next.

	case 'Premium' :
			alert('It is $3.35');
			break;

	case 'Diesel'  :
			alert('It is $3.47');
			break;

	default        :
			alert('Unknown gas grade');
			break;    // Not necessary because we are at the very end.
}




var	answer = window.promt('Type YES, NO, or MAYBE. Then click Ok.');

Switch (answer) {

	case 'YES' :
		console.log('You brown noser!');
		break;

	case 'MAYBE' :
		console.log('What the fuck! Make up your mind!');
		break;

	case 'NO' :
		console.log('How dare you deny me!');
		break;

	default :
		console.log('This game is over.');
		break;
}








// Terse Ifs: One-liners

var	cherub = 'Cupid';
  // cherub = 'Some other guy';

if (cherub === 'Cupid') console.log('Ouch, an arrow! Oh, I\'m in love!');





// Terse Ifs: Ternary Operator

var animal = 'cat';
// animal = 'dog';

animal === 'cat' ? console.log('You will be a cat herder') : console.log('You will be a dog catcher');

// var job = (animal === 'cat' ? 'cat herder' : 'dog catcher');





// For Loops - Sequencial

for (var i = 0; i < 100; i ++ 1) {
	console.log(i);
}





// Common use case; looping over an array

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i+= 1) {
	if (document.title === pageNames[i]) {
		console.log('We are here: ' + pageNames[i]);
	} else {
		console.log('We are not here: ' + pageNames[i]);
	}
}





// Replace redundancy
var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (i = 0; i < pageNames.length; i+= 1) {
	var currentPageTitle = pageNames[i];

	if (document.title === currentPageTitle) {
		console.log('We are here: ' + currentPageTitle);
	} else {
		console.log('We are not here: ' + currentPageTitle);
	}
}





/* For Loops - Enumerative
   	Used for arrays and objects
	It's NOT adviced to use a 'for in' loop for an array since in an array, the order is important
	You can use it on other objects.
*/

// iterate over an array

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog'];

for (var p in pageNames) {
	console.log(p + ' is ' + pageNames[p]);
}


// Iterate over an object

var pages = {
	first  : 'Home',
	second : 'About Us',
	third  : 'Contact Us',
	fourth : 'JavaScript Playground',
	fifth  : 'Blog'
};

for (var p in pages) {
	if (pages.hasOwnProperty(p)) {
		console.log(p + ' is ' + pages[p]);
	}
}






/* WHILE LOOPS
When do you use a while loop?
When you don't know how many times you need to loop over something. Don't know the end point.
*/

var i = 0;
while (i < 10) {
	console.log(i + '... this will go until we hit 10.');
	i += 1;
}

// Another example
var myArray = [true, true, true, false, true, true]

var myItem = null;
while (myItem !== false) {
	console.log('myArray has ' + myArray.length + ' items now. this loop will go on until we pop a false.');
	myItem = myArray.pop();
}

/* DO WHILE LOOP
	If you set myItem to one of the values in the array, it will not execute
	In this case, use a 'do while loop' so the code gets executed at least once
*/ 
var myArray = [true, true, true, false, true, true];

var myItem = false;
  do {
	console.log('myArray has ' + myArray.length + ' items now. this loop will go on until we pop a false.');
	myItem = myArray.pop();
} while (myItem !== false);


// How to lock your web browser with an infinite loop...just for fun.
counter = 1;
while (true) {
	console.log(counter);
	counter ++;
	break; 		// Comment out the break for funtimes. 
				// Ok, that was fun. Don't do that again.
}





/* BASIC FUNCTIONS
	Functions are all objects in JavaScript
	You can pass functions into other functions; they can be passed around as values
*/

// Things that Teega likes to do

console.log('bite');
console.log('eat bif');
console.log('chase flies');
console.log('look cute for bif and sleep');

// Create a function to wrap up those 4 lines above so I can use them over and over again.

function teegaActivities() {
	console.log('bite');
	console.log('eat bif');
	console.log('chase flies');
	console.log('look cute for bif and sleep');
}

// Invoke the function
teegaActivities();


// Case 1: Time for something real that we can do with functions - Modify Data

function fuddify(speech) {
	// If it's not a string, return an error message
	if (typeof speech	!== 'string') return 'Nice twy, wabbit!';

	// Otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w');
	speech - speech.replace(/R/g, 'w');
	return speech;
}

// Process a string immediately and assign it to a variable
var utterance = fuddify('You screwy rabbit.')


// Case 2: Answer to a question that we ask over and over again

function isOdd(num) {
	if (num % 2 === 0) {
		return false;
	} else {
		return true;
	}
}

function isEven(num) {
	if (num % 2 !== 0) {
		return false;
	} else {
		return true;
	}
}



// Arguments and Functions: What to say and how many times to say it?

function saySomething(sayWhat, howMany) {
	// This pattern works for default values
	// Check if the argument is undefined, and if it is, provide a default value

	var sayWhat = (typeof sayWhat !== 'undefined') ? sayWhat : 'Blah, blah, blah...';
	var howMany = (typeof howMany !== 'undefined') ? howMany : 10;

	for (var i = 0, i < howMany; i += 1) {
		console.log(sayWhat + " (" + i + ")");
	}
}

// Adding Machine

function addingMachine() {
	// Initialize the total we'll be returning
	var total = 0;

	for (var i = 0; i < arguments.length; i += 1) {
		// Grab the next number
		var number	= arguments[i];

		// Check if the argument is a number
		// If so, add it to the running total
		if (typeof number === 'number') {
			total += number;
		}
	}

	// Done - Return the total
	return total;
}

// Invoke the function
addingMachine (1,2,12,45,20)





// Understanding Variable Scope

var myNum = 32;
var myResult = 'Success';

function randomizer(limit) {

	var myNum = Math.floor(Math.random() * limit);

	console.log('myNum is ' + myNum);
	console.log('Global myNum is ' + window.myNum);

	return myNum;
}










