

function getComputerChoice() {
    let a = Math.random()  
    let cChoice
    if (a <=0.333) {
        cChoice = "rock"
    }

    else if (a > 0.333 && a <= 0.666) {
        cChoice = "paper"
    }

    else {
        cChoice = "scissors"
    }
    
    console.log(`The computer chooses ${cChoice}`)

    return cChoice
}


function getHumanChoice() {
    const input = prompt(`What do you choose? Rock, Paper or Scissors?`).toLowerCase()
    let hChoice
    if (input ===`rock` ) {
        hChoice = `rock`
    }
    else if (input === `paper` ) {
        hChoice = `paper`
    }
    else if (input === `scissors` ) {
        hChoice = `scissors`
    }
    else {
        console.log(`Please choose a valid option`)
    }

    console.log(`You chose ${hChoice}`)
    return hChoice

}



function playRound(cChoice, hChoice) {
 
    if (hChoice == "rock" && cChoice == "paper") {
        computerScore+=1
        
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else if (hChoice == "rock" && cChoice == "scissors") {
        humanScore+=1
       
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else if (hChoice == "paper" && cChoice == "scissors") {
        computerScore+=1
        
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else if (hChoice == "paper" && cChoice == "rock") {
        humanScore+=1
       
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else if (hChoice == "scissors" && cChoice == "rock") {
        computerScore+=1
        
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else if (hChoice == "scissors" && cChoice == "paper") {
        humanScore+=1
    
        console.log(`Human:${humanScore} Computer:${computerScore}`)
        console.log(`-----------------`)
    }

    else {
        console.log(`Human:${humanScore}Computer:${computerScore}`) 
        console.log(`-----------------`)
        
    }


}




let humanScore = 0
let computerScore = 0

function playGame() {
    humanScore = 0
    computerScore = 0
    
    for (let i=0; i<3; i++){
        const cChoice = getComputerChoice();
        const hChoice = getHumanChoice();
       playRound(cChoice, hChoice);
    


    }

    if (humanScore > computerScore) {
        console.log(`!!!Human wins!!!`)
    }

    else if (computerScore > humanScore) {
        console.log(`!!!Computer wins!!!`)
    }
 
    else {
        console.log(`!!!Draw!!!`)
    }

} 



playGame()


