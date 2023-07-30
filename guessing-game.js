const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numAttempts = 5

let getRandomInt = function (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let randomInRange = function ( min, max) {
    return getRandomInt(min, max)
}

// let secretNumber = (randomInRange(min, max));


let askRange = function(){
    let min;
    let max;
    rl.question('Enter a min number: ', answer => {
        min = Number(answer);
        rl.question('Enter a max number: ', answer =>{
            max = Number(answer);
            let secretNumber = (randomInRange(min, max));
                
let checkGuess = function(num){
    if(num > secretNumber){
        console.log('Too high');
        return false
    };
    if(num < secretNumber){
        console.log('Too low');
        return false
    };
    if(num === secretNumber){
        console.log('You Win!');
        return true
    };
};

let askGuess = function(){
    rl.question('Enter a guess: ', answer => {
        if(checkGuess(Number(answer))){
    rl.close()}else{
        numAttempts--;
        if(numAttempts == 0){
            console.log('You Lose');
            rl.close()
        }else{
        askGuess()}
    }
    });
    
}

            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            askGuess()
        });
    });
};

// askRange()
