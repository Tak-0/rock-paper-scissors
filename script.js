console.log()

function getComputerChoice(choice) {
    if (Math.random() <=0.333) {
        let choice = "rock"
    }

    else if (Math.random() > 0.333 && Math.random() <= 0.666) {
        let choice = "paper"
    }

    else {
        let choice = "scissors"
    }
    return choice
}


