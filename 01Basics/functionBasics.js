// Basics of function

function calcAge(birthYear,currentYear=2020){
    return currentYear - birthYear;
}

// console.log(calcAge(1986));
var ageRam = calcAge(1986);
var ageSan = calcAge(1994);
// console.log(ageRam, ageSan);

// Call Function in a function
function retirementYear(birthYear, name){
    var age = calcAge(birthYear)
    var retirement = 65 - age;
    console.log(name+' retires at '+retirement+' years!')
}

// retirementYear(1986,'Ramraj');

// Function declaration Syntax: //
// function whatDoYouDo (job, firstName){ }

// Function expression Syntax: //
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids to play cricket';
        case 'driver':
            return firstName + ' drives a cab in chennai';
        case 'software engineer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' pursuing graduation';
    }
}

console.log(whatDoYouDo('driver','Ramraj'));
console.log(whatDoYouDo(job='teacher',firstName='Sangeetha'));


// Exercise: create a function takes a name and returns hello followed by name

// Without arguments
// var msg = function(){
//     name = prompt("What is your name?");
//     return "Hello "+name;
// }

// With arguments
// var msg = function(name){
//     // name = prompt("What is your name?");
//     return "Hello "+name;
// }
// console.log(msg('Mahathi'));

// Exercise 1: Add two values with a func
var result = function(a,b){
    return a + b ;
}

// console.log(result(10,20));

console.log(result('10',20)); // Note: String + int will concatenate