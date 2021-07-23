const input = require('readline-sync');
let str = "LaunchCode";

// let newString = str.slice(0,3);
// let otherStr = str.slice(3, str.length);
// console.log(otherStr);
// let pigLatinStr = otherStr + newString;
// console.log(pigLatinStr);


// let myNewStr = `Pig Latin: ${otherStr}${newString}`;
// console.log(myNewStr);

// let oneStr = str.slice(3) + str.slice(0,3);
// console.log(oneStr);
//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


//Use a template literal to print the original and modified string in a descriptive phrase.



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let indexStart = input.question("Enter how many characters to change:");
indexStart = Number(indexStart);

if (indexStart > str.length) {
  indexStart = 3;
}

let newString = str.slice(0,indexStart);
let otherStr = str.slice(indexStart, str.length);

let myNewStr = `Pig Latin: ${otherStr}${newString}`;
console.log(myNewStr);


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.