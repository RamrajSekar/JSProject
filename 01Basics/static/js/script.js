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
    refresh.innerHTML = "<button class='btn btn-primary' align='center' onClick='window.location.reload();'>"+'Reset'+"</button>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(msgDiv);
    document.getElementById("flex-box-rps-div").appendChild(refresh);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}


// Challenge 4: Change the color of all buttons

// To get all the buttons from HTML in an array
var allButtons = document.getElementsByTagName('button');

// Store all the available class of buttons to reset back the btn color
let copyAllBtns = [];
for(let i=0;i<allButtons.length;i++){
    copyAllBtns.push(allButtons[i].classList[1])
}

function buttonColorChange(button){
    // Get value of a dropdown
    // console.log(button.value)
    if (button.value == 'red'){
        buttonRed();
    } else if (button.value == 'green'){
        buttonGreen();
    } else if (button.value == 'random'){
        buttonRandom();
    } else if (button.value == 'reset'){
        buttonReset();
    }
}

function buttonRed(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-success');
    }
}

function buttonRandom(){
    let btnName = ["btn-primary", "btn-danger", "btn-success", "btn-warning"]
    // console.log(rndNum);
    for(let i=0;i<allButtons.length;i++){
        // This random() should be within loop to generate the random numb
        let rndNum = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(btnName[rndNum]);
    }
}

function buttonReset(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllBtns[i]);
    }
}

// Completed video till 4:45:25
// Challenge 5: Blackjack Game
// How it works:
// Closer to 21 you win else bot wins
// Stand button will be played by bot which should show cards automatically
// Hit will be played by user
// Should not be able to hit deal button before everyone turns are over
// Shoud not able to click HIT button once STAND is clicked

let blackJack = {
    'you': {"scoreSpan":'#your-result','div':'#your-box','score': 0},
    'bot': {"scoreSpan":'#bot-result','div':'#bot-box','score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsValue':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'tie':0,
    'isStand': false,
    'turnsOver': false,
}

// const makes the var constant as it's not going to change
const YOU = blackJack['you'];
const BOT = blackJack['bot'];
// Object to read audio file
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lostSound = new Audio('sounds/aww.mp3');
// const hitSound = new Audio('sounds/swish.m4a')
// addEventListener is the alternate option instead of writing alert in html
// querySelector is to handle the CSS element arg should refer attribute followed by # symbol
// addEventListener take two args one the event[click,enter] and other is a function
document.querySelector('#hitbtn').addEventListener('click',blackJackHit);

document.querySelector('#standbtn').addEventListener('click',botLogic);

document.querySelector('#dealbtn').addEventListener('click',blackJackDeal);

// document.querySelector('#standbtn').addEventListener('click',blackJackStand);
function randomCard(){
    let rndIndex = Math.floor(Math.random() * 13);
    return blackJack['cards'][rndIndex];
}

function blackJackHit(){
    if (blackJack['isStand']===false){
        let card = randomCard();
        console.log(card);
        showCard(YOU,card);
        updateScore(card,YOU);
        showScore(YOU);
        // console.log(YOU['score']);
        // showCard(BOT);
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// This async funciton will wait for the function to complete per sleep time mentioned
async function botLogic(){
    blackJack['isStand'] = true;
    while (BOT['score'] < 16 && blackJack['isStand'] === true) {
        let card = randomCard();
        console.log(card);
        showCard(BOT,card);
        updateScore(card,BOT);
        showScore(BOT);
        await sleep(1000);
    }
    blackJack['turnsOver'] = true;
    showResult(computeWinner());
    // if(BOT['score'] > 15){
    //     blackJack['turnsOver'] = true;
    //     showResult(computeWinner());
    // }
}

// function blackJackStand(){
//     let cardImgs = document.createElement('img');
//     cardImgs.src = 'images/Q.png';
//     document.querySelector(BOT['div']).appendChild(cardImgs);
// }

// Show cards until score is <= 21
function showCard(activePlayer,card){
    if(activePlayer['score'] <= 21){
        let cardImgs = document.createElement('img');
        cardImgs.src = `images/${card}.png`; // path for img file and concatenate filename with arg called string templating with backtick
        document.querySelector(activePlayer['div']).appendChild(cardImgs);
        hitSound.play(); // to play audio file
    } 
}

function blackJackDeal(){
    if (blackJack['turnsOver']===true){
        // showResult(computeWinner());
        // querySelectorAll returns all the img tag mentioned
        let yourImgs = document.querySelector('#your-box').querySelectorAll('img');
        let botImgs = document.querySelector('#bot-box').querySelectorAll('img');
        // console.log(yourImgs.length);
        for(let i=0;i<yourImgs.length;i++){
            yourImgs[i].remove();
        }
        for(let i=0;i<botImgs.length;i++){
            botImgs[i].remove();
        }
        YOU['score'] = 0;
        BOT['score'] = 0;
        document.querySelector('#your-result').textContent = 0;
        document.querySelector('#your-result').style.color = 'white';
        document.querySelector('#bot-result').textContent = 0;
        document.querySelector('#bot-result').style.color = 'white';
        document.querySelector('#blackjack-result').textContent = "Let's Play!";
        document.querySelector('#blackjack-result').style.color = 'black';
    
        blackJack['isStand'] = false;
        blackJack['turnsOver'] = false;
    }
}

function updateScore(card, activePlayer){
    if(card === 'A'){
    // if adding 11 keeps me below 21 add 11 else add 1
        if (activePlayer['score']+blackJack['cardsValue'][card][1] <= 21) {
            activePlayer['score'] += blackJack['cardsValue'][card][1];
        }
        else{
            activePlayer['score'] += blackJack['cardsValue'][card][0];
        }
    } else {
        activePlayer['score'] += blackJack['cardsValue'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function computeWinner(){
    let winner;
    // condition: when user doesn't bust
    if(YOU['score'] <= 21){
        if(YOU['score'] > BOT['score'] || (BOT['score'] > 21)){
            // console.log('You Won!');
            blackJack['wins']++;
            winner = YOU;
        } else if (YOU['score'] < BOT['score']){
            // console.log('You Lost!');
            blackJack['losses']++;
            winner = BOT;
        } else if (YOU['score'] === BOT['score']){
            // console.log('You Tied!');
            blackJack['tie']++;
            winner = 'Tied';
        }
    }//condition: when bot busts
    else if(YOU['score'] > 21 && BOT['score'] <=21){
        // console.log('You Lost!');
        blackJack['losses']++;
        winner = BOT;
    }//condition: when both you and bot busts
    else if(YOU['score'] > 21 && BOT['score'] > 21){
        // console.log('You Tied!');
        blackJack['tie']++;
        winner = 'You Tied';
    }
    return winner;
}

function showResult(winner){
    let msg, msgColor;
    if(blackJack['turnsOver'] === true){
        if (winner === YOU){
            document.querySelector('#wins').textContent = blackJack['wins'];
            msg = 'You Won!';
            msgColor = 'green';
            winSound.play();
        }else if (winner === BOT){
            document.querySelector('#losses').textContent = blackJack['losses'];
            msg = 'You Lost!';
            msgColor = 'red';
            lostSound.play();
        }else{
            document.querySelector('#draws').textContent = blackJack['tie'];
            msg = 'You Tied!';
            msgColor = 'black';
            // lostSound.play();  
        }
        document.querySelector('#blackjack-result').textContent = msg;
        document.querySelector('#blackjack-result').style.color = msgColor;
    }
}