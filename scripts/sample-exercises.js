/*
Sample file of exercises
*/


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





// Conditional Ifs

var	answer = window.promt('Type YES, NO, or MAYBE. Then click Ok.');

	if (answer === 'YES') { console.log('You brown noser!'); }

	else if (answer === 'NO') { console.log('How dare you deny me!'); }

	else if (answer === 'MAYBE') { console.log('What the fuck! Make up your mind!'); }

	else { console.log('This game is over.'); }





// Conditionals Switch

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