// Operator precedence

var currentYear = 2020;
var myBrithYear = 1986;
var currAge = 33;

// Multiple
var correctAge = (currentYear - myBrithYear) >= currAge;
console.log(correctAge);

// Grouping
var ageRam = currentYear - myBrithYear;
var ageSan = 24;

var average = (ageRam + ageSan) / 2;
console.log(average);

// Multiple assignments
var x, y;
// x = (3 + 5) * 4 - 6; //8 * 4 - 6 = 26
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 = 26
console.log(x, y);


// More Operators
// x = x * 2;
// or
x *= 2;
console.log(x);

x += 20;
console.log("Value of X is: ",x);

// To Increment
// x = x + 1;
// or
// x += 1
// or
x++
console.log('Incremented value of x is: ',x);

//To Decrement
x--
console.log('Decremented value of x is: ',x);



// CODING CHALLENGE //
// Calculate and Compare Ram and Raj BMI[Body Mass Index]: mass / height ^ 2 = mass / (height * height).
// mass in kg and height in meter.

// STEPS
// 1. Store both mass and height in a variable
// 2. Calculate their BMI's
// 3. Create a variable to check whether BMI of Ram is greater than Raj
// 4. Print the output of STEP: 3 to console like Is "BMI of Ram is greater than Raj?"

// Solution
var ramMass, ramHeight, ramBMI;
var rajMass, rajHeight, rajBMI;

ramMass = 60000/1000;
ramHeight = 6.5;
ramBMI = ramMass / (ramHeight * 2);

console.log(ramBMI);

rajMass = 65000/1000;
rajHeight = 7.5;
rajBMI = rajMass / (rajHeight * 2);

console.log(rajBMI);

var result = ramBMI > rajBMI;
console.log("BMI of Ram is greater than Raj?", result);




