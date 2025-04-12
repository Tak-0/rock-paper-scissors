

function getComputerChoice() {
    let a = Math.random()
    
    if (a <=0.333) {
        choice = "rock"
    }

    else if (a > 0.333 && a <= 0.666) {
        choice = "paper"
    }

    else {
        choice = "scissors"
    }
    
    console.log(`The computer chooses ${choice}`)

    return choice
}



function getHumanChoice() {
    const input = prompt(`What do you choose? Rock, Paper or Scissors?`)
    let choice
    if (input === `Rock` ||input ===`rock` ) {
        choice = `rock`
    }
    else if (input === `Paper` ||input === `paper` ) {
        choice = `paper`
    }
    else if (input === `Scissors` ||input === `scissors` ) {
        choice = `scissors`
    }
    else {
        console.log(`Please choose a valid option`)
    }

    console.log(`You chose ${choice}`)
    return choice

}

getHumanChoice()
