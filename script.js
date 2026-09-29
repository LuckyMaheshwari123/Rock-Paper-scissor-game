// Score tracking variables
var userscore = 0;
var computerscore = 0;

function getcomputerchoice() {
    // Perfectly scales 0, 1, or 2 with equal probability
    let a = Math.random() * 3;
    return Math.floor(a); 
}

function humanInput() {
    let x = prompt("Enter the number 0 for rock, 1 for paper, 2 for scissor:");
    let choice = Number(x);
    
    if (isNaN(choice) || choice < 0 || choice > 2 || x === null || x === "") {
        console.log("Invalid choice! Please enter 0, 1, or 2.");
        return null; 
    }

    console.log("Human choice:", choice);
    return choice;
}


function roundPlay() {
       let humanChoice = humanInput();
       
       // Stop the round if the human entered an invalid choice
       if (humanChoice === null) return; 

       let computerChoice = getcomputerchoice();
       console.log("Computer choice:", computerChoice);

       // Comparing choices and tracking scores
       if (humanChoice == computerChoice) {
          console.log("There is a tie!");
       }
       else if (humanChoice == 0 && computerChoice == 2) {
           console.log("You won the match since rock breaks the scissors!");
           userscore++;
       }
       else if (humanChoice == 0 && computerChoice == 1) {
           console.log("You lose the match since paper covers the rock!");
           computerscore++;
       }
       else if (humanChoice == 1 && computerChoice == 0) {
           console.log("You won the match since paper covers the rock!");
           userscore++;
       }
       else if (humanChoice == 1 && computerChoice == 2) {
           console.log("You lose the match since scissors cut the paper!");
           computerscore++;
       }
       else if (humanChoice == 2 && computerChoice == 0) {
             console.log("You lose the match since the scissors break by rock!");
             computerscore++;
       }
       else if (humanChoice == 2 && computerChoice == 1) {
            console.log("You won the match because scissors cut the paper!");
            userscore++;
       }
       
       // Print current standings
       console.log(`Current Score -> You: ${userscore} | Computer: ${computerscore}\n---`);
}

// Call this function in your console to play a round!
roundPlay();
roundPlay();
roundPlay()
roundPlay()
roundPlay()
console.log("your score is " + userscore);
console.log("computer score is "+ computerscore);