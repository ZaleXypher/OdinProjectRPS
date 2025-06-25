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

function getWin(pChoice, cChoice){
    if(pChoice == "rock" && cChoice == "scissors"){
        winAnn.textContent = `Computer picked ${cChoice}, you won`
        return 1
    }
    else if(pChoice == "paper" && cChoice == "rock"){
        winAnn.textContent = `Computer picked ${cChoice}, you won`
        return 1
    }
    else if(pChoice == "scissors" && cChoice == "paper"){
        winAnn.textContent = `Computer picked ${cChoice}, you won`
        return 1
    }
    else if(pChoice == cChoice){
        winAnn.textContent = `Computer picked ${cChoice}, tied`
        return 2
    }
    else{
        winAnn.textContent =`Computer picked ${cChoice}, you lost`
        return 0
    }
}

function play() {
    currentRound += 1
    roundBoard.textContent = currentRound
    
    win = getWin(playerChoice, getCompChoice())
    if(win === 1){
        playerScore++
        humanBoard.textContent = playerScore
    }
    else if(win === 0){ 
        compScore++
        compBoard.textContent = compScore
    }
    else {
        playerScore++
        compScore++
        humanBoard.textContent = playerScore
        compBoard.textContent = compScore
    }

    if (currentRound >= roundPlays) {
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        if (playerScore>compScore){
            winAnn.textContent = `Player won with a score of ${playerScore}-${compScore}`
        }
        else if (playerScore == compScore){
            winAnn.textContent = `Tie with a score of ${playerScore}-${compScore}`
        }
        else winAnn.textContent = `Computer won with a score of ${playerScore}-${compScore}`
    }
}

function reset() { 
    roundPlays = roundInput
    currentRound = 1
    roundBoard.textContent = currentRound
    compScore = 0
    playerScore = 0
    humanBoard.textContent = playerScore
    compBoard.textContent = compScore
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
}

function showChoice(target) {
    console.log(target)
}
/*
function playRound() {
    let compScore = 0
    let playerScore = 0
    
    for (i = 0; i < roundPlays; i++){
        

        playerChoice = ""
    }

}
    */


const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
rock.addEventListener("click", (roc) => {playerChoice="rock"; play(); showChoice(roc.target)})
paper.addEventListener("click", (pap) => {playerChoice="paper"; play(); showChoice(pap.target)})
scissors.addEventListener("click", (sci) => {playerChoice="scissors"; play(); showChoice(sci.target)})

rock.disabled = true
paper.disabled = true
scissors.disabled = true


const playButt = document.querySelector("#roundsButt")
playButt.addEventListener("click", reset)

const rounds = document.querySelector("#rounds")
rounds.addEventListener("change", () => roundInput = rounds.valueAsNumber)
roundInput = rounds.valueAsNumber

const roundBoard = document.querySelector("#roundNum")

currentRound = 1
playerChoice = ""

const humanBoard = document.querySelector("#human")
const compBoard = document.querySelector("#comp")
const winAnn = document.querySelector(".winner")