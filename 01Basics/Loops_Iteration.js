// Loops & Iteration

// Generate values from 1 to 10
// for (var i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("===================");
// for (var i=1;i<=20;i+=2){
//     console.log(i);
// }

// Example Array: Get values from array
var john = ['Sangee',1986,'Mahathi','Sekar','Abi']
// for (var i=0;i<john.length;i++){
//     console.log(john[i]);
// }

// // WHILE Loop: We can only pass condition
// i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

// Continue & break statement: Continue will break current iteration and proceed
// with next loop and break will terminate loop

// for (var i=0;i<john.length;i++){
//     if(typeof(john[i]) !== 'string') continue;
//     console.log(john[i]);
// }
// // OUTPUT: Sangee,Maahthi,Sekar,Abi

// for (var i=0;i<john.length;i++){
//     if(typeof(john[i]) !== 'string') break;
//     console.log(john[i]);
// }
// OUTPUT: Sangee

// Challenge: Reverse print the array values

// for (var i=john.length-1;i>=0;i--){
//     if(typeof(john[i]) !== 'string') continue;
//     console.log(john[i]);
// }

//  Tip Calculator Solution 1
var johnBills = [124,48,268,180,42];

var tipCalc = function(bills) {
    var billAmount= [];
    var tipAmount=[];
    var tip;
    for(var i=0;i < bills.length;i++){
        if (bills[i] < 50){
            tip = bills[i] * 0.2;
            tipAmount.push(tip);
            billAmount.push(bills[i]+tip);
        }
        else if(bills[i] >= 50 && bills[i] <= 200){
            tip = bills[i] * 0.15;
            tipAmount.push(tip);
            billAmount.push(bills[i]+tip);
        }
        else{
            tip = bills[i] * 0.1;
            tipAmount.push(tip);
            billAmount.push(bills[i]+tip);
        }
    }
    return billAmount+'&&'+tipAmount
}

// console.log(tipCalc(johnBills))

var markBills = [77,375,110,45];

var tipAvgCalc = function(bills) {
    var billAmount= [];
    var tipAmount=[];
    var tip=0;
    for(var i=0;i < bills.length;i++){
        if (bills[i] < 100){
            tip = bills[i] * 0.2;
            tipAmount.push(tip);
            // billAmount.push(bills[i]+tip);
        }
        else if(bills[i] >= 100 && bills[i] <= 300){
            tip = bills[i] * 0.15;
            tipAmount.push(tip);
            // billAmount.push(bills[i]+tip);
        }
        else{
            tip = bills[i] * 0.25;
            tipAmount.push(tip);
            // billAmount.push(bills[i]+tip);
        }
        tip = tip + tip
    }
    return tip/bills.length
    // return billAmount+'&&'+tipAmount
}


//  Tip Calculator alternate solution
var newJohn = {
    fullName : 'John Smith',
    bills : johnBills,
    tipPaid : function(){
        // var billAmount= [];
        // var tipAmount=[];
        this.billAmount = []
        this.tipAmount = []
        var tip;
        for(var i=0;i < this.bills.length;i++)
        {
            if (this.bills[i] < 50){
                tip = this.bills[i] * 0.2;
                // this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
            else if(this.bills[i] >= 50 && this.bills[i] <= 200){
                tip = this.bills[i] * 0.15;
                // this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
            else{
                tip = this.bills[i] * 0.1;
                // this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
            this.billAmount[i] = this.bills[i] + tip;
            this.tipAmount[i] = tip;
            
        }
    },
    avgTip : function(){
        var x = 0;
        for(var i=0;i < this.tipAmount.length;i++){
            x = x + this.tipAmount[i];
            // console.log(x)
        }
        // x = x + x
        return (x/(this.tipAmount.length))
    }
}

// console.log(newJohn)

var newMark = {
    fullName : 'Mark Smith',
    bills : markBills,
    tipPaid : function(){
        this.tipAmount=[];
        var tip;
        for(var i=0;i < this.bills.length;i++){
            if (this.bills[i] < 100){
                tip = this.bills[i] * 0.2;
                this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
            else if(this.bills[i] >= 100 && this.bills[i] <= 300){
                tip = this.bills[i] * 0.15;
                this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
            else{
                tip = this.bills[i] * 0.25;
                this.tipAmount.push(tip);
                // this.billAmount.push(this.bills[i]+tip);
            }
        }
    },
}

function calcAvg(inTip){
    var x = 0;
    for(var i=0;i < inTip.length;i++){
        x = x + inTip[i];
        // console.log(x)
    }
    return (x/(inTip.length));
}

// newJohn.tipPaid();
// console.log(newJohn);

// newMark.tipPaid()
// console.log(newMark.tipAmount);
// console.log(newJohn.avgTip());

// markAvg = calcAvg(newMark.tipAmount);
// johnAvg = newJohn.avgTip();

// if(markAvg > johnAvg){
//     console.log(newMark.fullName+" paid highest tip of $"+markAvg);
// } else if(markAvg < johnAvg){
//     console.log(newJohn.fullName+"John paid highest tip of $"+johnAvg);
// } else{
//     console.log("Both paid equal tip amount of $"+johnAvg);
// }

// WHILE LOOP
var num = 0;

while (num < 10){
    num++;
    console.log(num);
}

// For loop using let
for (let i=1;i <= 10;i++){
    console.log(i);
}