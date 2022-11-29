 function getComputerChoice (any) {
    let x = Math.floor(Math.random() * 3);
    if (x==0) {
        let computerChoice ='ROCK'
        return computerChoice;
    } else if (x==1){
        let computerChoice = 'PAPER'
        return computerChoice;
    } else{
        let computerChoice = 'SCISSORS'
        return computerChoice;
    }
   
}

console.log(getComputerChoice());

