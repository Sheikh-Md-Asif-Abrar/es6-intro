const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = "BDonald Trump";

const multiLine = 'First Line Text \n' +
'Second line of code \n' +
'Third line of text \n' + 
'Fourth line of string';
// console.log(multiline)


const newMultiline = `First Line Text  
Second line of code
Third line of text 
Fourth line of string`;

// console.log(newMultiline)

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
// console.log(summary)

const newSummary = `sum of ${a} and ${nums.length} is: ${a+b}`
console.log(newSummary)


const name = 'Hero';
const greetings =`Welcome Home!${name}`;
// const greetings = 'Welcome Home!'+''+name;
console.log(greetings)