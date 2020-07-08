console.log('Hello World..!');
console.log('I am coming with JS..!');

//string variables
var firstname = 'Ramraj';
var lastname = 'Sekar';

// concatenation
console.log(firstname +' '+ lastname)

// JS is a dynamic typed programming language: data types are assigned automatically
// primitive data types: 
// Number,String, Boolean, Undefined[variable without value], Null[non-existent]

var age = 33;

var fullAge = true;
console.log(fullAge);

// Undefined variable
var role;
role = "Software Engineer";
console.log(role);

// other way to declare variables
var state, city, married;
state = "Tamil Nadu";
city = 'Chennai';
married = true;
console.log(firstname +' '+ lastname +' is married: '+ married + " and he is from " +city+','+state)

var fullName;

// Variable Mutation
age = 34;
fullName = firstname +' '+ lastname;

// #Create alert
// alert("My Name is: "+fullName+" and I'm "+age+" years old.");

// // Prompt: Get input from user
// var company = prompt("Which company you work for?");
// console.log("Company name is: ",company);


// MATH OPERATORS
var currentYear,dob
currentYear = 2020
dob = currentYear - age;
console.log(dob);
console.log(dob * 20);
console.log(dob / 20);
console.log(41 % 20);

// LOGICAL OPERATORS
sangDob = 1990;
var older = dob < sangDob;
console.log(older);

//typeof operator to get the data type of variable
console.log(typeof sangDob); 