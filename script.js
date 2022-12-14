function getComputerChoice(){
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
}

function getPlayerChoice(){
    var choice = prompt("What is your choice?").toLowerCase();
    if (choice != "rock" && choice != "paper" && choice && "scissors"){
        alert("Please enter rock, paper, or scissors");
        choice = prompt("What is your choice?").toLowerCase();
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
   if (playerSelection == computerSelection){
    return ["this round is a tie", 0];
   } else if(playerSelection == "rock" && computerSelection == "paper"){
    return ["Computer wins this round!", 1];
   } else if(playerSelection == "rock" && computerSelection == "scissors"){
    return ["Player wins this round!", -1];
   } else if(playerSelection == "paper" && computerSelection == "rock"){
    return ["Player wins this round!", -1];
   } else if(playerSelection == "paper" && computerSelection == "scissors"){
    return ["Computer wins this round!", 1];
   } else if(playerSelection == "scissors" && computerSelection == "paper"){
    return ["Player wins this round!", -1];
   } else if(playerSelection == "scissors" && computerSelection == "rock"){
    return ["Computer wins this round!", 1];
   }else{
    return ["something went wrong", 0];
   }
}

function checkForWinner(i, round){
    if (i == 3){
        alert("Computer wins!");
    }else if(i == -3){
        alert("Player wins!");
    }else if(round == 5 && i > 0){
        alert("Computer wins!");
    }else if(round == 5 && i < 0){
        alert("Player wins!");
    }
}

function game(){
    var roundsWon = 0;
    alert("This is a best out of 5 rock paper scissors game vs the computer");
    for (var i = 0; i < 5; i++){
        var winner = playRound(getPlayerChoice(), getComputerChoice());
        alert(winner[0]);
        roundsWon += winner[1];
        console.log(roundsWon, i);
        checkForWinner(roundsWon, i + 1);
    }
}

game();