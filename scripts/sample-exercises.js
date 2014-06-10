/*
Sample file of exercises
*/

var animal1 = {
   'genus'        : 'cat',
   'species'      : 'biter',
   'callType'     : 'hissing',
   'quote'        : 'will look cute for bif',
   'maxOffspring' : 0,
   'noisy'        : false,
   'deadly'       : true
}





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