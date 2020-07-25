// Data types in Java script

let a = 20; //integer
let b = 'Ram'; //String
let c = true; //boolean
let d = {name:'Raj',age:22,city:'chennai'}; //object similar to dict
let e = ['apple','banana','orange','grapes']; // array similar to list
let f; //undefined variable
let g = null; //variable with null value


// More String
let fruit = 'Banana';
let moreFruit = fruit+'\napple'; // To print in new line
console.log(fruit);
console.log(moreFruit);

console.log(fruit.length); // Get length of string

console.log(fruit.indexOf('B')); // Get index value a char in string

console.log(fruit.indexOf('q'))// If return value is -1 sepecified char is not available in string

// Slicing with string
console.log(fruit.slice(0,3));

// To find and replace
console.log(fruit.replace('Ban','Ga'));

// To upper or lower
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.toLocaleUpperCase());

// To get the char by index
console.log(fruit.charAt(2));
console.log(fruit[3]);

// To split a string
a = 'apple,berry,orange,banana'
console.log(a.split(',')); // Split by comma
console.log(fruit.split('')); // Split by char


// Array
// To create array options
let myFruits = ['banana','apple','papaya','orange'];
let myfruits = new Array('banana','apple','papaya','orange');

// Get value from array by index
console.log(myFruits[1]);

// To change value
myFruits[1] = 'Guava'
console.log(myFruits);

// To get all values from array
for(let i=0;i<myFruits.length;i++){
    console.log(myFruits[i]);
}


// Array common methods
// console.log('to string: ',myFruits.toString()); // Converts array to string

// console.log(myFruits.join('-')); // To join the values in an array

// console.log(myFruits.pop(), myFruits); // To remove last value in an array
// // To append value in end
// console.log(myFruits.push('Blackberries'), myFruits); 
// myFruits[myFruits.length] = 'Orange';
// console.log(myFruits);
// console.log(myFruits.shift(), myFruits); // To remove first value in an array
// console.log(myFruits.unshift('kiwi'), myFruits); // To append first value in array

let vegs = ['Carrot','Tomato','Potato','Beans'];

// To combine two arrays
// let groceris = myFruits + vegs; // This will combine but result as string
let groceris = myFruits.concat(vegs); // This will combine as array
// console.log(groceris);
// console.log(typeof(groceris));
// To slice
// console.log(groceris.slice(0,4));
// console.log(groceris.reverse());
// console.log(groceris.sort());

// Sorting with numbers
// let someNums = [5,8,1,3,9];
let someNums = [5,8,1,3,9,9,6,7];
// console.log(someNums.sort());
// console.log(someNums.sort(function(a,b) {return(a-b)})); //asc order
// console.log(someNums.sort(function(a,b) {return(b-a)})); //desc order

// To declare empty array and add values to it
// let emptyArray = new Array();  OR
let emptyArray = [];
for(let i=1;i<=10;i++){
    emptyArray.push(i);
}
// console.log(emptyArray);

// Objects in detail

let student = {
    first:'Mahathi', 
    last:'Ramraj',
    age:5,
    city:'chennai',
    studentInfo: function(){
        return 'Student Name is: '+ this.first +' '+ this.last
    }
};

console.log(student.first);
console.log(student['last']);

// TO change value
student.first = 'Sangeetha'; 
student.age = 23;
console.log(student.first +' age is: '+ student.age);

console.log(student.studentInfo());