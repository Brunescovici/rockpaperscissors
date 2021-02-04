let playerChoice, computerChoice, deleteResTimeout;

// 1 is rock, 2 is paper, 3 is scissors

start();

function start() {
    document.querySelector(".rock").addEventListener('click', setRock);
    document.querySelector(".paper").addEventListener('click', setPaper);
    document.querySelector(".scissors").addEventListener('click', setScissors);
}

function setRock() {
    playerChoice = 1;
    setcompChoice();
}

function setPaper() {
    playerChoice = 2;
    setcompChoice();
}

function setScissors() {
    playerChoice = 3;
    setcompChoice();
}

function setcompChoice() {
    clearTimeout(deleteResTimeout);
    deleteResults();
    computerChoice = Math.floor(Math.random() * 3) + 1;
    document.querySelectorAll(".player").forEach(player => {
        player.classList.add("shake");
        console.log(player.id);
    });
    setTimeout(setImage, 1800);
}

function compare() {
    if(computerChoice == playerChoice)
        document.querySelector("#draw").style.display = "block";
    else if(computerChoice > playerChoice && computerChoice-playerChoice!=2)
        document.querySelector("#lose").style.display = "block";
    else if(computerChoice < playerChoice && playerChoice-computerChoice!=2)
        document.querySelector("#win").style.display = "block";
    else if(computerChoice-playerChoice==2)
        document.querySelector("#win").style.display = "block";
    else
        document.querySelector("#lose").style.display = "block";
    console.log("comp choice: " + computerChoice);
    console.log("my choice: " + playerChoice);
    deleteResTimeout = setTimeout(deleteResults, 5000);
}

function setImage() {
    let player = document.querySelector("#player1");
    let comp = document.querySelector("#player2");
    player.classList.remove("shake", "rock", "paper", "scissors");
    comp.classList.remove("shake", "rock", "paper", "scissors");
    if(playerChoice == 1)
        player.classList.add("rock");
    else if(playerChoice == 2)
        player.classList.add("paper");
    else
        player.classList.add("scissors");
    if(computerChoice == 1)
        comp.classList.add("rock");
    else if(computerChoice == 2)
        comp.classList.add("paper");
    else
        comp.classList.add("scissors");
    compare();
}

function deleteResults() {
    document.querySelectorAll("#texts div").forEach(result => {
        result.style.display = "none";
    });
}