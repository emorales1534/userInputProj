const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let getRandomInt = function ( min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let randonInRange = function(min, max){
    return getRandomInt(min, max)
}

// let secretNumber = randonInRange(0, 100);

let checkGuess = function(answer){
    if(answer > el){
        console.log("Too high");
        return false;
    };
    if(answer < el){
        console.log("Too low");
        return false;
    };
    if(answer === el){
        console.log("Correct!");
        return true;
    };
};
let enterMin = function(){
    rl.question('Enter a min number: ', answer)
}
// let askGuess = function(){
//     rl.question('Enter a guess: ', answer => {
//         if(!(checkGuess(Number(answer)))){
//             // checkGuess(answer);
//             return askGuess()
//         };
//         rl.close()
//     });

// };

let askRange = function(){
    let num1;
    let num2;
    let el;
    rl.question('Enter a max number: ', answer => {
        num1 = Number(answer);
        rl.question('Enter a min number: ', answer => {
            num2 = Number(answer);
            console.log(`I'm thinking of a number between ${num1} and ${num2}...`);
            el = randonInRange(num1, num2);
            let askGuess = function(){
                rl.question('Enter a guess: ', answer => {
                    if(!(checkGuess(Number(answer)))){
                        // checkGuess(answer);
                        return askGuess()
                    };
                    rl.close()
                });
            
            };
            let checkGuess = function(answer){
                if(answer > el){
                    console.log("Too high");
                    return false;
                };
                if(answer < el){
                    console.log("Too low");
                    return false;
                };
                if(answer === el){
                    console.log("Correct!");
                    return true;
                };
            };
            askGuess()
            
        }
        
        )
    } );
    let randonInRange = function(num2, num1){
        return getRandomInt(num2, num1)
    }
    
}

// let askGuess = function(){
//     rl.question('Enter a guess: ', answer => {
//         if(!(checkGuess(Number(answer)))){
//             // checkGuess(answer);
//             return askGuess()
//         };
//         rl.close()
//     });

// };

// askGuess();
// console.log(randonInRange(0, 3))
askRange()