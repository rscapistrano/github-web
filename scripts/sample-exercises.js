/** JavaScript
 *   s- Weak typing
 *
 * Operators with =
 *	= assignment
 *	== equality (values can be equal, but type can be different)
 *	=== strict equality  (values and types must be the same)
 */


/**
 * Splitting code into different files
 *   Linking to multiple JavaScript files
 *   	<script src = 'script1.js'></script>
 *   	<script src = 'script2.js'></script>
 *   	<script src = 'script3.js'></script>
 *
 *   Order is important
 *   
 */



/**
 * DOM - Document Object Language
 * 	It's a web page pieces with agreed upon/set of terms
 *
 * What can you do with the DOM?
 *  - get title text
 *  - get 2nd paragraph
 *  - get 3rd link in the menu and set it to invisible
 *  - change the background color of all paragraphs
 *  - get all the elements in the list
 *  - find the image called 'cutekitty' and move it 40 pixels to the right
 *  - change a link so it performs a JavaScript function when clicked
 *  
 */


// Call Prompt in JS
var name = prompt('What is your name?')
alert('Hello, ' + name)


// Create Variables
// Leaving out 'var' creates a global variable and future headaches

var cat = 'Teega', colorFur = 'Undecided', favortiteCatFoor = 'Bif'





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
animal1.whereItLives = 'manhattan highrise'
// or
Animal1['whereItLives'] = 'manhattan highrise'

// Deleting a property to an Object
delete animal1.color





/**
 * Working with Arrays
 * 	-	Arrays have an internal order
 * 	-	Contains elements; collections
 * 	-	0-based, first position is 0
 */

var multiValues = []

multiValues[0] = 50		// set index 0 = 50

multiValues[1] = 123	// set index 1 = 123

multiValues[2] = 'Secured Kitty'	// set index 2 = 'Secured Kitty'

// OR
var multiValues = [ 50, 123, 'Secured Kitty']

var stateAbbreviation = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC', 'PR', 'VI', 'AS', 'GU', 'MP']

var stateName = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'Washington DC', 'Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Guam', 'Northern Mariana Islands']



// Iterating Through Collections

var i = 0 										// start at zero

while ( i < multiValues.length ) {				// check condition

	alert('The value is ' + multiValues[i])		// use the index to access the current element

	i++											// increment the index
}


// New array sample

var myArray = [123, 1232, 456, 12]

var total = 0

for ( var i = 0; i < myArray.length; i++ ) {
	total = total + myArray[i]				// add the current element to the total
}

alert('The total is ' + total)				// show answer after we are done with the loop





/**
 * References
 * This statement does not make the same copy of an object so changes to animal2 will apply to animal1.
 * This gives you two objects that point to the same value. You will only run into this when dealing with objects.
 * To copy an object, you will need to create another variable with the same properties.
 */

var animal2 = animal1





/**
 * CONDITIONAL CODE
 * { braces - code block }
 * if ( condition ) {
 * 		your conditional code goes here..
 * }
 */


// Simple If Statement
var a = 5
var b = 10

if ( a < b ) {
	alert('Yes, a is less than b.')
}

if ( a > b ) {
	alert('Yes, a is greater than b.')
}

if ( a === b ) {
	alert('a and b are exactly equal')
}



// Complex Conditions

var balance = 0

if ( balance > 0 ) {

	alert('The balance is positive')

} else {
	alert('Panic attack coming in 3, 2, 1...')
}





// Conditional Ifs

var	answer = window.promt('Type YES, NO, or MAYBE. Then click Ok.')

	if (answer === 'YES') { console.log('You brown noser!') }

	else if (answer === 'NO') { console.log('How dare you deny me!') }

	else if (answer === 'MAYBE') { console.log('What the fuck! Make up your mind!') }

	else { console.log('This game is over.') }





/**
 * Conditionals Switch
 * This is best used when you have several cases.
 */


var gasGrade = 'Premium'

switch ( gasGrade ) {
	case 'Regular' :
			alert('It is $3.15')
			break   // Jump us out of the switch statement and move on to the next.

	case 'Premium' :
			alert('It is $3.35')
			break

	case 'Diesel'  :
			alert('It is $3.47')
			break

	default        :
			alert('Unknown gas grade')
			break    // Not necessary because we are at the very end.
}




var	answer = window.promt('Type YES, NO, or MAYBE. Then click Ok.')

Switch (answer) {

	case 'YES' :
		console.log('You brown noser!')
		break

	case 'MAYBE' :
		console.log('What the fuck! Make up your mind!')
		break

	case 'NO' :
		console.log('How dare you deny me!')
		break

	default :
		console.log('This game is over.')
		break
}




// Terse Ifs: One-liners

var	cherub = 'Cupid'
  // cherub = 'Some other guy'

if (cherub === 'Cupid') console.log('Ouch, an arrow! Oh, I\'m in love!')




// Terse Ifs: Ternary Operator

var animal = 'cat'
// animal = 'dog'

animal === 'cat' ? console.log('You will be a cat herder') : console.log('You will be a dog catcher')

// var job = (animal === 'cat' ? 'cat herder' : 'dog catcher')





/**
 * Iteration
 * 	 Keep repeating statements multiple times.
 * 	 The main issue with loops is not when to loop, it's when to stop.
 * 	 If we need to loop 1000 times, who is keeping track?
 * 	 All loops contain conditions that control how long or many times they loop.
 */


// Example: replace if with 'while'
var a = 1

while ( a < 10 ) {
	alert(a)		// If you don't add something to change the value of a, you're going to be dizzy
	a++				// So you need to a line to increment the value 'a'
}



/**
 * Example: add 100 to amount 10 times
 *
 * Checklist for a loop
 * 	1. create an index
 * 	2. check condition
 * 	3. increment index
 * 	
 */

var amount = 0

// 1. create index
var i = 0

// 2. check condition
while ( i < 10 ) {
	amount = amount + 100

	// 3. increment the index
	i++
}

alert( 'The value is ' + amount )




/**
 * For Loops - Enumerative
 * Used for arrays and objects
 * It's NOT adviced to use a 'for in' loop for an array since in an array, the order is important
 * You can use it on other objects.
 */


// For Loops - Sequencial

for (var i = 0 i < 100 i ++ 1) {
	console.log(i)
}



// Common use case looping over an array

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog']

for (i = 0 i < pageNames.length i+= 1) {
	if (document.title === pageNames[i]) {
		console.log('We are here: ' + pageNames[i])
	} else {
		console.log('We are not here: ' + pageNames[i])
	}
}



// Replace redundancy
var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog']

for (i = 0 i < pageNames.length i+= 1) {
	var currentPageTitle = pageNames[i]

	if (document.title === currentPageTitle) {
		console.log('We are here: ' + currentPageTitle)
	} else {
		console.log('We are not here: ' + currentPageTitle)
	}
}


// iterate over an array

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog']

for (var p in pageNames) {
	console.log(p + ' is ' + pageNames[p])
}


// Iterate over an object

var pages = {
	first  : 'Home',
	second : 'About Us',
	third  : 'Contact Us',
	fourth : 'JavaScript Playground',
	fifth  : 'Blog'
}

for (var p in pages) {
	if (pages.hasOwnProperty(p)) {
		console.log(p + ' is ' + pages[p])
	}
}




/**
 * WHILE LOOPS
 * When do you use a while loop?
 * When you don't know how many times you need to loop over something. Don't know the end point.
 */



var i = 0
while (i < 10) {
	console.log(i + '... this will go until we hit 10.')
	i += 1
}

// Another example
var myArray = [true, true, true, false, true, true]

var myItem = null
while (myItem !== false) {
	console.log('myArray has ' + myArray.length + ' items now. this loop will go on until we pop a false.')
	myItem = myArray.pop()
}


/**
 * DO WHILE LOOP
 * If you set myItem to one of the values in the array, it will not execute
 * In this case, use a 'do while loop' so the code gets executed at least once
 */
	
 
// Basic Structure

var a = 1 				// setup index
do {
	// your code
	a++ 				// increment index
} while ( a < 10 )  	// check condition



// Example 

var myArray = [true, true, true, false, true, true]

var myItem = false
  do {
	console.log('myArray has ' + myArray.length + ' items now. this loop will go on until we pop a false.')
	myItem = myArray.pop()
} while (myItem !== false)


// How to lock your web browser with an infinite loop...just for fun.
counter = 1
while (true) {
	console.log(counter)
	counter ++
	break 		// Comment out the break for funtimes. 
				// Ok, that was fun. Don't do that again.
}





/**
 * BASIC FUNCTIONS
 * Functions are all objects in JavaScript
 * You can pass functions into other functions they can be passed around as values
 */
	

// Things that Teega likes to do

console.log('bite')
console.log('eat bif')
console.log('chase flies')
console.log('look cute for bif and sleep')

// Create a function to wrap up those 4 lines above so I can use them over and over again.

function teegaActivities() {
	console.log('bite')
	console.log('eat bif')
	console.log('chase flies')
	console.log('look cute for bif and sleep')
}

// Invoke the function
teegaActivities()


// Case 1: Time for something real that we can do with functions - Modify Data

/**
 * Replaces r and g with w
 * @param  {string} speech
 * @return {string}
 */

function fuddify(speech) {
	// If it's not a string, return an error message
	if (typeof speech	!== 'string') return 'Nice twy, wabbit!'

	// Otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w')
	speech - speech.replace(/R/g, 'w')
	return speech
}

// Process a string immediately and assign it to a variable
var utterance = fuddify('You screwy rabbit.')



// Case 2: Answer to a question that we ask over and over again

/**
 * Identify if a number is odd
 * @param  {num}  num
 * @return {Boolean}
 */
function isOdd(num) {
	if (num % 2 === 0) {
		return false
	} else {
		return true
	}
}

/**
 * Identify if number is even
 * @param  {num}  num
 * @return {Boolean}
 */

function isEven(num) {
	if (num % 2 !== 0) {
		return false
	} else {
		return true
	}
}



/**
 * Arguments and Functions: What to say and how many times to say it?
 * This pattern works for default values
 * Check if the argument is undefined, and if it is, provide a default values
 * @param  {[string]} sayWhat
 * @param  {[number]} howMany
 * @return {[type]}
 */

function saySomething(sayWhat, howMany) {

	var sayWhat = (typeof sayWhat !== 'undefined') ? sayWhat : 'Blah, blah, blah...'
	var howMany = (typeof howMany !== 'undefined') ? howMany : 10

	for (var i = 0, i < howMany i += 1) {
		console.log(sayWhat + " (" + i + ")")
	}
}




/**
 * Tells me the value of a variable
 * @return {num}
 */
function myFunction () {
	var a = 5
	var b = 10
	var c = 20
	var d = a + b + c
	alert( 'The value of d is: ' + d )
}

// Call the function
myFunction()



/**
 * Setting parameters and arguments
 */

function addTwoNumbers(num1, num2) {
	var result = num1 + num2
	alert(result)
}

// Call function
addTwoNumbers (5,25)


/**
 * Return results instead of pop up
 * @param {num} num1
 * @param {num} num2
 */
function addTwoNumbers(num1, num2) {
	var result = num1 + num2
	return result
}

// Call function; change each call to variables with the answers in pop up
var x = addTwoNumbers (1,13)
alert(x)

var y = addTwoNumbers (29,56)
alert(y)

var z = addTwoNumbers (75,67)
alert (z)



/**
 * It adds all the entered inputs
 * @return {number}
 */

function addingMachine() {
	// Initialize the total we'll be returning
	var total = 0

	for (var i = 0 i < arguments.length i += 1) {
		// Grab the next number
		var number	= arguments[i]

		// Check if the argument is a number
		// If so, add it to the running total
		if (typeof number === 'number') {
			total += number
		}
	}

	// Done - Return the total
	return total
}

// Invoke the function
addingMachine (1,2,12,45,20)




/**
 * Understanding Variable Scope
 * 	 Local Variable - When defining a variable within a function, that variable is only available within that function
 * 	 Global Variable - When a variable is defined outside of a function, then that variable can be called from anywhere
 */


/**
 * Random number
 * @type {Number}
 */
var myNum = 32

/**
 * This is my return text
 * @type {String}
 */
var myResult = 'Success'


function randomizer(limit) {

	var myNum = Math.floor(Math.random() * limit)

	console.log('myNum is ' + myNum)
	console.log('Global myNum is ' + window.myNum)

	return myNum
}




/**
 * Addition vs Concatenation
 * Arithmetic operations on mixed types
 */


// Mixing string with number

var foo = 5
var bar = '5'
alert ( foo + bar )		// treated as a string, output is 55

var foo = 5
var bar = '5'
alert ( foo * bar )  	// treated as a number, output is 25

var foo = 5
var bar = '5'
alert ( foo / bar )		// treated as a number, output is 1

var foo = 5
var bar = 'b'
alert ( foo * bar )		// output should be a NaN



// Turn a value into a number

var foo = '55'
var myNumber = Number(foo)	// make foo which is a string into a number

// Check if output is a number post conversion

if ( !isNaN (myNumber) ) {			// use double negative - if not not a number
	alert('It is not a number!')
}




/**
 * Finding Patterns in strings
 */

var phrase = 'this is a simple phrase.'

phrase.length						// this checks the lenght of the string, including spaces
alert ( phrase.toUpperCase() )		// converts the string to upper case


// String comparison

var str1 = 'Helo'
var str2 ='hello'

str1 == str2 		// false
str1 === str2 		// false


// check if the strings are the same word or not

if ( str1.toLowerCase() == str2.toLowerCase() ) {
	alert('Yes, the strings are the same word.')

} else alert('No, the strings are different words.')




/**
 * Finding Patterns in Strings
 */

var phrase = 'We want a groovy key word.'

var position = phrase.indexOf ('groovy') 	// this will give me the first placement of 'groovy'
											// the count starts at 0, 'w' in 'we' is 0
											// 'groovy' starts at 10

var position = alert( phrase.lastIndexOf('word') )	// Find the last occurance of a word in string


// Determine if a word occurs in a string
// Returns -1 when term is not found

if ( phrase.indexOf('dddd') == -1 ) {
	alert('That word is not in the string.')
}


// String Methods - SLICE
// This allows you to pull out parts of a string and store it in another variable
// other methods are .substring() and .substr()

var phrase = 'Yet another phrase.'
			//0123456

var segment = phrase.slice(6,11)	// pull out the char on the 6th position to th 10th


// String Comparison

var lowerCaseA = 'a'
var upperCaseA = 'A'

lowerCaseA < upperCaseA		// false, capital letters come before lower case




/**
 * Regular Expressions
 */


var myReg = /^hello/			// ^ at the start

var myReg = /hello$/			// $ at the end

var myReg = /hel+o/				// + once or more (hello, helo, hellllllo)

var myReg = /hel*o/				// * zero or more (heo, hello, helo, hellllllo)

var myReg = /hel?o/				// ? zero or one (heo, helo)

var myReg = /hello|goodbye/		// either | or

var myReg = /he..o/				// . any character

var myReg = /\wello/			// \w alphanumeric or _

var myReg = /\bhello/			// \b word boundary such as a space or new line

var myReg = /[crnld]ope/		// [...] range of characters

var myReg = /^[0-9]{5} (?:-[0-9]{4}?$)/		// identifying a zip code

var myReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/	// identify email address

var myString = 'Does this sentence have the word hello in it?'
	if ( myReg.test(myString)) {
		alert('Yup!')
	};



// Regular Expressions

var string1 = 'this is the best video'
var string2 = 'i love this video'
var string3 = 'it is the best ever'

var regex = /this/

console.log( regex.test(string1) )
console.log( regex.test(string2) )
console.log( regex.test(string3) )





























