// Starting scores scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoiceDisplay = document.querySelector('#player-choice span');
const computerChoiceDisplay = document.querySelector('#computer-choice span');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Add event listeners to buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Function to generate computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
}

// Format choice with capital first letter
function formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Main game function
function playGame(playerChoice) {
    // grabs the computer's choice
    const computerChoice = getComputerChoice();
    
    // Showing the choices
    playerChoiceDisplay.textContent = formatChoice(playerChoice);
    computerChoiceDisplay.textContent = formatChoice(computerChoice);
    
    // Determines the winner
    const winner = determineWinner(playerChoice, computerChoice);
    
    // Update result display
    if (winner === 'tie') {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.style.backgroundColor = '#f0f0f0';
    } else if (winner === 'player') {
        resultDisplay.textContent = "You win! " + formatChoice(playerChoice) + " beats " + formatChoice(computerChoice);
        resultDisplay.style.backgroundColor = '#d4edda';
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultDisplay.textContent = "You lose! " + formatChoice(computerChoice) + " beats " + formatChoice(playerChoice);
        resultDisplay.style.backgroundColor = '#f8d7da';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}