console.log("JS linked")
function getCompChoice() {
    let choice = Math.floor(Math.random() * 10);
    let compChoice = ""
    if (choice < (3)){
        compChoice = "rock"
    }
    else if (choice < (6)){
        compChoice = "paper"
    }
    else compChoice = "scissors"
    return compChoice
}

function getPlayerChoice() {
    let getChoice = prompt("Rock, paper, or scissors?", "")
    let playerChoice = getChoice
    return playerChoice
}

function getWin(pChoice, cChoice){
    if(pChoice === "rock" && cChoice === "scissors"){
        alert(`Computer picked ${cChoice}, you won`)
        return 1
    }
    else if(pChoice === "paper" && cChoice === "rock"){
        alert(`Computer picked ${cChoice}, you won`)
        return 1
    }
    else if(pChoice === "scissors" && cChoice === "paper"){
        alert(`Computer picked ${cChoice}, you won`)
        return 1
    }
    else if(pChoice === cChoice){
        alert(`Computer picked ${cChoice}, tied`)
        return 2
    }
    else{
        alert(`Computer picked ${cChoice}, you lost`)
        return 0
    }
}

function playRound() {
    let compScore = 0
    let playerScore = 0
    let roundPlayed = prompt("How many rounds do you want to play?", "1")
    for (i = 0; i < roundPlayed; i++){
        let play = getPlayerChoice()
        console.log(play)
        win = getWin(play, getCompChoice())
        console.log(win)
        if(win === 1){
            playerScore++
            console.log("P++")
        }
        else if(win === 0){ 
            compScore++
            console.log("C++")
        }
        else console.log("tie")
    }
    if (playerScore>compScore){
        alert(`Player won with a score of ${playerScore}-${compScore}`)
    }
    else if (playerScore === compScore){
        alert(`Tie with a score of ${playerScore}-${compScore}`)
    }
    else alert(`Computer won with a score of ${playerScore}-${compScore}`)
}