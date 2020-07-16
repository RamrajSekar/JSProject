// OBJECT AND PROPERTIES it is unordered collection of data which is similar to dictionary

// Aray vs Objects: Order of data matter a lot in array but not in objects

var ram = {
     fristName : 'Ramraj',
     lastName : 'Sekar',
     birthYear : 1986,
     isMarried : true,
     family : ['Sekar','Navamani','Sangeetha','Mahathi'],
     job : 'teacher',
     age:33
}

// console.log(ram);
// // To access/get values from an object

// // OPTION 1:
// console.log(ram.fristName);

// // OPTION 2:
// console.log(ram['lastName']);

// // OPTION 3:
// var x = 'birthYear';
// console.log(ram[x]);


// // To update a value in an object
// console.log("Before update: ", ram.job);
// ram.job = 'Software Engineer'
// console.log("After update: ", ram.job);
// ram['job'] = 'Senior Software Associate'
// console.log("After New update: ", ram.job);

// // TO create a new empty object and add values to it
// var sang = new Object();

// sang.name = 'Sangeetha';
// sang.age = 24;
// sang['parents'] = ['Bhaskaran','Kalaivani']

// console.log(sang)

// // Get the length of object
// console.log(Object.keys(sang).length)

// OBJECTS WITH METHOD
var vani = {
    fristName : 'Vani',
    lastName : 'Sekar',
    birthYear : 1983,
    isMarried : true,
    family : ['Sekar','Navamani','Manoj','Prajitha','Haritha'],
    job : 'QA Lead',
    // OPTION 1: with arg
    // calcAge : function(birthYear){
    //     return 2020 - birthYear;
    // }
    // OPTION 2: without arg here this refer to current object
    // calcAge : function(){
    //     return 2020 - this.birthYear;
    // }
    // OPTION 3: without arg add key/value directly this is the best practise
    calcAge : function(){
        this.age = 2020 - this.birthYear;
    }
}

// console.log(vani.calcAge(vani.birthYear));
// OR
// console.log(vani.calcAge());

// add key/value to object
// var age = vani.calcAge();
// vani.age = age
// or
// vani.age = vani.calcAge();

// While using option 3 in object remember that you have the call the func first
vani.calcAge();
console.log(vani);

// CHALLENGE: cALC BMI FOR MARK AND JOHN
// FORMULA: BMI = MASS / HEIGHT ^ 2 = MASS / HEIGHT * HEIGHT

var john = {
    name:'John',
    mass:92,
    height: 1.95,
    calcBmi : function(){
        this.johnbmi = this.mass / (this.height * this.height);
        return this.johnbmi
    }
}

var mark = {
    name:'Mark',
    mass:78,
    height: 1.69,
    calcBmi : function(){
        this.markbmi = this.mass / (this.height * this.height);
        return this.markbmi
    }
}

john.calcBmi();
// console.log(john.johnbmi);

mark.calcBmi();
// console.log(mark.markbmi);

// SOLUTION: 1
// if(john.johnbmi > mark.markbmi){
//     console.log("BMI of "+john.name+" is "+john.johnbmi+" and it is greater than "+mark.name)
// } else if(john.johnbmi < mark.markbmi){
//     console.log("BMI of "+john.name+" is "+john.johnbmi+" and it is lesser than "+mark.name)
// } else {
//     console.log("BMI of "+john.name+" is "+john.johnbmi+" and it is equal to "+mark.name)
// }

// SOLUTION: 2
if(john.calcBmi() > mark.calcBmi()){
    console.log("BMI of "+john.name+" is "+john.johnbmi+" and it is greater than "+mark.name)
} else if(john.johnbmi < mark.markbmi){
    console.log("BMI of "+mark.name+" is "+mark.markbmi+" and it is greater than "+john.name)
} else {
    console.log("They have same BMI of: "+mark.markbmi)
}