let maximum = parseInt(prompt("Enter the maximum number !"))
while(!maximum){
    maximum = parseInt(prompt("enter the correct number"));
}  

const targetNum = Math.floor(Math.random() * maximum)+1;
console.log(targetNum);

let guess = prompt("Enter the first guess! (Type 'q' to quit the game)")
let attempt = 1;

 while(parseInt(guess)!==targetNum){
    if(guess === 'q')  break;
    guess = parseInt(guess);
    
    if(guess>targetNum) {
    guess =  parseInt(prompt("Too high! Enter the correct guess"))
    attempt++;
    }  
    else if(guess<targetNum){
    guess =  parseInt(prompt("Too low! Enter the correct guess"))
    attempt++;
} else{
     guess = prompt("Invalid guess. Please enter a number or 'q' to quit the game");
}
}  

if(guess ==='q') {
   console.log("OK, YOU QUIT!");
}
 else {
     console.log("CONGRATS YOU WIN!")
     console.log(`You got it! It took you ${attempt} guesses`)
}

    