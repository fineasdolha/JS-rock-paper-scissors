//create an object that has the properties of the basic rock paper scissors game
let choices = [
    {
        "choice": "rock",
        "beats": "scissors",
        "losesTo": "paper"
    },
    {
        "choice": "paper",
        "beats": "rock",
        "losesTo": "scissors"
    },
    {
        "choice": "scissors",
        "beats": "paper",
        "losesTo": "rock"
    }
    ]
     
    let computerChoice = 0;
    let playerChoice =' ';
    //get computers random choice
    function computerSelection (){
        computerChoice = choices[getRandomInt(choices.length)].choice; 
    
    }
    function getRandomInt (){
        return Math.floor(Math.random()*3);
    }
    //get player's choice
    function playerSelection() {
        input = prompt("Choose your weapon :", " ");
        playerChoice = input;
        
    }
    
    
    let wins=0;
    let losses=0;
    let ties=0;
    let play=0;
    //construct a function for a round of the game
    function playRound (){
        computerSelection ();
        console.log(computerChoice); //give an unfair advantage to the human player
        playerSelection();
        playerChoice.toLowerCase;
        for (let gameTurn in choices) { 
            if (playerChoice === choices[gameTurn].choice) //check for valid input
                {    
                    if (choices[gameTurn].losesTo.includes(computerChoice))
                    {   
                        losses++;
                        play++; // count if the game is played 
                        console.log("You lost! The Computer has " +losses+ " points, and you have " + wins+" points!");
                    }   
                    else if (choices[gameTurn].beats.includes(computerChoice)) 
                    {
                        wins++;
                        play++;
                        console.log("YOU WON! and you have "+wins+" points, while The Computer has " +losses);
                    }
                
                    else if (playerChoice===computerChoice)
                    {
                        ties++;
                        play++;
                        console.log("It's a tie! The score is still "+ wins +"to"+ losses);
                    }   
                } else if (play===0)
                { 
                    console.log(play + "enter a playable value! try again!");
    
                }
    
        }
    }    
    
    function game (){
        for (let i=0; i<3; i++)
            playRound();
        if (wins>losses)
            alert("Congratulations! You won the game with a total of "+wins+" points!");
            else if (losses>wins)
                { 
                    let points = losses-wins;
                    alert("You lost the game at a difference of "+points+" !");
                
                }
                else if (play===0)  
                    alert("You've reached the maximum number of wrong tries");
                    else alert("It was a tie!");    
                
    }
    game();
    




