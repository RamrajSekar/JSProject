// Array Basics

// Declare Array
var names = ['Ramraj','Sangeetha','Mahathi'];
// OR
var years = new Array(1986,1994,2015);

// To get value from an array by index
console.log(names[0]);
// To get values
console.log(names);

// To get length of array
console.log(names.length);
console.log(years.length);

// To replace a value in an array
names[1] = 'Sangee';
// To add a value in specific index
// names[5] = 'Abi';
// console.log(names); // output will be ["Ramraj", "Sangee", "Mahathi", empty × 2, "Abi"]
names[names.length] = 'Abi';
console.log(names); // output will be ["Ramraj", "Sangee", "Mahathi", "Abi"]


// Array with different data types

var ram = ['Ramraj','Sekar',1986,'Software Engineer',true]

// To add value at last index of an array
ram.push('Black')
console.log(ram) // output: ["Ramraj", "Sekar", 1986, "Software Engineer", true, "Black"]

//To add value at first index of an array
ram.unshift('Mr.') // output: ["Mr.", "Ramraj", "Sekar", 1986, "Software Engineer", true, "Black"]
console.log(ram)

//To remove the value from last index
ram.pop();
console.log(ram); // output: ["Mr.", "Ramraj", "Sekar", 1986, "Software Engineer", true]

//To remove the value from first index
ram.shift();
console.log(ram); // output: ["Ramraj", "Sekar", 1986, "Software Engineer", true]

// To get the index value of a particular value from an array
console.log(ram.indexOf(1986)); //output: 2

// To check if value exist in an array result will be -1
console.log(ram.indexOf(false)); //output: -1

// With ternery operator
var testAge = ram.indexOf(1986) === -1 ? "Ram did not born yet" : "Ram did born";
console.log(testAge) // output: Ram did born

// Challenge: Calculate the tip paid and total amount paid with tip

var bills = [124,48,268];
var billAmount;
var tipCalc = function(billAmt){
    if (billAmt < 50){
        billAmount = billAmt * 0.2;
    }
    else if(billAmt >= 50 && billAmt <= 200){
        billAmount = billAmt * 0.15;
    }
    else{
        billAmount = billAmt * 0.1;
    }
    return billAmount
}


// var finalBill = [bill[0]+tipCalc(bills[0]),bill[1]+tipCalc(bills[1]), bill[2]+tipCalc(bills[2])]

// var paidTip1 = tipCalc(bills[0]);
// var paidTip2 = tipCalc(bills[1]);
// var paidTip3 = tipCalc(bills[2]);

var paidTips = [tipCalc(bills[0]),tipCalc(bills[1]),tipCalc(bills[2])];
console.log(paidTips)

var finalBill = [bills[0]+tipCalc(bills[0]),bills[1]+tipCalc(bills[1]), bills[2]+tipCalc(bills[2])]
// console.log(paidTip2)
console.log(finalBill)