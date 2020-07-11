// Conditional and Boolean


var name = "Ramraj";
var maritalStatus = 'Single';

if (maritalStatus == "Married") {
    console.log(name + " is married!")
} else {
    console.log(name + " is single!")
}

name = 'Sangeetha';
var isMarried = true;
if (isMarried) {
    console.log(name + " is married!")
} else {
    console.log(name + " is singe!")
}


var ramAge, sanAge;

if (name === 'Ramraj'){
    console.log(name+" is Male!")
} else {
    console.log(name+" is Female!")
}

ramAge = 34;
sanAge = 44;

if (ramAge > sanAge){
    console.log("Ram is elder than San")
} else if (ramAge < sanAge){
    console.log("Ram is younger than San")
} else{
    console.log("Both are at same age")
}


// AND -- &&
// OR  -- ||
// NOT -- !

age = 19
if (age < 12) {
    console.log(name+ " is a child")
} else if (age >= 13 && age < 19) {
    console.log(name+ " is a adolescence")
} else if (age >= 19 && age < 30) {
    console.log(name+ " is a Adult")
} else {
    console.log(name+ " is a Senior Adult")
}


// Ternary Operator is a Condition Operator In simple format

age >= 18 ? console.log(name + " drinks coffee")
: console.log(name+ " drinks juice");
name = "Ramraj"
var drink = age >=18 ? 'coffe' : 'juice';
console.log(name+ " drinks " + drink)

// Switch Statement: alternate for if else condition

var job = "Tester";
// job = 'Teacher';
switch(job) {
    case 'Software Engineer-1':
    case 'Software Engineer-2':
        console.log('Develop or Test Software');
        break;
    case 'Teacher':
        console.log("Teaches kids how to read");
        break;
    case 'Driver':
        console.log("Drives a vehicle");
        break;
    default:
        console.log("Looking for job");
}


age = 50;
switch(true){
    case age < 13:
        console.log("Child")
        break;
    case age >= 13 && age < 20:
        console.log("Teenage")
        break;
    default:
        console.log("Adult")
}


// Truthly or Falsly values & equality operators

//Falsly values are: undefine, null, 0, '', NaN
//Truthly values are: NOT falsly values

var love;
love = false;
if (love || love === false){
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT defined');
}

// NOTE: == will convert data type and compares where as === is opposite
//  where both side should be equal data type

a = 23;
if (a == '3'){
    console.log("The == does type coercion!!")
} else if(a === 23){
    console.log("Within === condition")
}