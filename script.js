console.log("Hellow World")

        var humanScore = 0
        var computerScore = 0

        for (let i = 0; i < 5; i++) {
            function getRandomInt(max) {
            return Math.floor(Math.random() * max);
            }
            let RanNum = getRandomInt(3)
            //console.log(RanNum)

            function GetComputerChoice (RanNum) {
                if (RanNum==0) {
                    return "rock";
                }
                else if (RanNum == 1) {
                    return"paper";
                }
                else {
                    return "scissors";
                }
            }
            //console.log(GetComputerChoice(RanNum))
            console.log("Computer choice is",GetComputerChoice(RanNum))

            function getUserInput () {
            let userChoice = prompt("Write any one of Rock, Ppaper, Scissors",);
            let userChoiceProcssd = userChoice.toLowerCase()
            return userChoiceProcssd;
            }
            console.log("The number is: " + i);

            function playRound(humanChoice, computerChoice) {

            if (humanChoice === computerChoice) {
                alert ("Tie");
                return "Tidyee!";
            } 
            
            else if (
                (humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'paper' && computerChoice === 'rock') || 
                (humanChoice === 'scissors' && computerChoice === 'paper')
            ) {
                humanScore += 1; 
                alert ("Human wins");
                return "Human wins!";
            } 

            else {
                computerScore += 1; 
                alert ("Computer wins");
                return "Computer wins!";
            }
            }

            const humanSelection = getUserInput();
            const computerSelection = GetComputerChoice(RanNum);

            console.log("Human choice is",humanSelection)
            //console.log(computerSelection)
            
            console.log(playRound(humanSelection, GetComputerChoice(RanNum)));
            console.log("computer score", computerScore)
            console.log("human score", humanScore)
            }

            if (humanScore > computerScore) {
                alert ("You Won!!!")
                console.log ("Human Wins")
            }
            else if (computerScore > humanScore){
                alert ("Better luck next time")
                console.log ("Computer Wins")
            }        
            else {
                Console.log ("Tie")
            }