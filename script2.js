let computerChoice = ' ';
let playerChoice = ' ';
let computerScore = 0;
let playerScore =0;
function getComputerChoice (any) {
   let x = Math.floor(Math.random() * 3);
   if (x==0) {
        computerChoice ='ROCK'
       return computerChoice;
   } else if (x==1){
        computerChoice = 'PAPER'
       return computerChoice;
   } else{
        computerChoice = 'SCISSORS'
       return computerChoice;
   }
  
}
function playRound(playerSelection, computerSelection) {
   input = prompt("Please make your selection", "Choice");
   playerChoice = input.toUpperCase();
   console.log(playerChoice);
   console.log(computerChoice);
   if (playerChoice !='ROCK' && playerChoice !='PAPER' && playerChoice !='SCISSORS')
       {alert('enter a playable value');
       return 0;}
   switch (playerChoice ==='ROCK'){ 
       case computerChoice === 'ROCK':
           alert('It is a tie!');
           return 0;
           break;

       case computerChoice ==='PAPER':
           alert('You lost this round! Better luck next time!');
           computerScore ++;
           return 0;
           break;
       case computerChoice === 'SCISSORS':
           alert('Good job! You can do it!');
           playerScore ++;
           return 0;
           break;
           }
   

   switch (playerChoice ==='PAPER'){ 
       case computerChoice === 'PAPER':
           alert('It is a tie!');
           return 0;
           break;
       case computerChoice ==='SCISSORS':
           alert('You lost this round! Better luck next time!');
           computerScore ++;
           return 0;
           break;
       case computerChoice === 'ROCK':
           alert('Good job! You can do it!');
           playerScore ++;
           return 0;
           break;
           }
   
    switch (playerChoice === 'SCISSORS'){ 
       case computerChoice === 'SCISSORS':
           alert('It is a tie!');
           return 0;
           break;
       case computerChoice ==='ROCK':
           alert('You lost this round! Better luck next time!');
           computerScore ++;
           return 0;
           break;
       case computerChoice === 'PAPER':
           alert('Good job! You can do it!');
           playerScore ++;
           return 0;
           break;
           }        


   }

function game() {
   for (let i=1; i<=5; i++){
       getComputerChoice();
       playRound();
       }
   if (playerScore<computerScore)
       alert('You lost everything!'); 
   else if(playerScore>computerScore) 
   alert('WO-HOOOOOO! You won!');
   else alert ('Tied game!');




}
game();
