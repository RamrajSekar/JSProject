// Challenge 1: Get your age in days formula yourAge * 365 days
// document.getElementById()
function ageInDays(){
    let birthYear = parseInt(prompt("Which year you born?"));
    // To generate only year
    let getYear = new Date();
    let currentYear = getYear.getFullYear();
    let reqMsg = "Please enter your birth year!";
    let nonIntMsg = "Verify your input!";
    let ageInDays = (currentYear - birthYear) * 365;
    console.log(birthYear,currentYear);
    // document.getElementById("flex-box-result").innerHTML = ageInDays; // THis is one option
    // Other other option is create html tags here and append value to it
    var h1 = document.createElement('h1');
    var answer;
    if(isNaN(birthYear) || birthYear === null){
        // answer = document.createTextNode(reqMsg);
        alert(reqMsg);
    }else if(Number.isInteger(birthYear) && birthYear > 0){
        // answer = document.createTextNode(nonIntMsg);
        // alert(nonIntMsg);
        answer = document.createTextNode('You are '+ageInDays+' days old.');
    }else{
        // answer = document.createTextNode('You are '+ageInDays+' days old.');
        alert(nonIntMsg);
    }
    // var answer = document.createTextNode('You are '+ageInDays+' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(answer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
// Challenge 2:
function generateCat(){
    var image = document.createElement("img"); 
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.append(image)
}

// // Challenge 3: Rock, Paper, Scissors
function rpsGame(yourImg){
    // console.log(yourImg);  // returns the html tag
    // console.log(yourImg.id); // returns the attribute value as well
    let humanChoice, botChoice;
    humanChoice = yourImg.id;
    console.log("Your choice: "+humanChoice);
    botChoice = numToChoice(randRpsInt());
    console.log("Bot choice: "+botChoice);
    results = decideWinner(humanChoice, botChoice); // result in array 0(lost),1(won)
    console.log(results);
    message = finalMessage(results); // return a mess {'msg':"you won or loss",'color':'green'}
    rpsFrontEnd(yourImg.id,botChoice, message);
    console.log(message);
}

// Generates random numb bt 0 to 2
function randRpsInt(){
    return Math.floor(Math.random() * 3);
}

// Get a value from array by index
function numToChoice(num){
    return ['rock','paper','scissor'][num]
}

function decideWinner(human,bot){
    // rock breaks scissor, scissor cuts paper
    let rpsDb = {
        'rock': {'scissor':1,'rock':0.5,'paper':0},
        'paper': {'scissor':0,'rock':1,'paper':0.5},
        'scissor': {'scissor':0.5,'rock':0,'paper':1}
    };
    let yourScore = rpsDb[human][bot];
    let botScore = rpsDb[bot][human];
    // if (human != bot){
    //     return 0
    // } else if ( bot != human){
    //     return 1
    // }
    return [yourScore, botScore];
}

//option 1: to pass array and loop thru it
// function finalMessage(inputResult){
//     for(var i=0;i<=inputResult.length;i++){
//         let gameOutput = inputResult[i];
//         let msg;
//         if (gameOutput === 0){
//             msg = "Bot Won";
//         }else if(gameOutput === 1){
//             msg = "You Won";
//         }else{
//             msg = "Both tied"
//         }
//         return msg
//     }
// }

//option 2: directly pass the array values
function finalMessage([humanResult,botResult]){
    if (humanResult === 0){
        return {'message':'Bot Won!', 'color':'red'};
    } else if (humanResult === 1){
        return {'message':'You Won!', 'color':'green'};
    } else{
        return {'message':'You tied!', 'color':'orange'};
    }
    
}

function rpsFrontEnd(human,bot,msg){
    let imgDb = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    // let's remove all the image as soon as you click an img
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    var refresh = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='"+imgDb[human]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    msgDiv.innerHTML = "<h1 style='color: "+msg.color+"; font-size: 60px; padding: 30 px '>" +msg.message+"</h1>"
    botDiv.innerHTML = "<img src='"+imgDb[bot]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    refresh.innerHTML = "<button class='btn btn-primary' onClick='window.location.reload();'>"+'Refresh Page'+"</button>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(msgDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
    document.getElementById("flex-box-rps-div").appendChild(refresh);
}


// Stopped video at 03:55:56