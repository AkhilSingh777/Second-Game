// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Main function to play the game
function play(userChoice) {
    // Define possible choices
    const choices = ['rock', 'paper', 'scissor'];
    // Randomly select computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    // Determine the result
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        // User wins
        result = `You win! Computer chose ${computerChoice}.`;
        userScore++;
    } else {
        // Computer wins
        result = `You lose! Computer chose ${computerChoice}.`;
        compScore++;
    }

    // Update the result message on the page
    document.getElementById('result').innerText = result;
    // Update the user and computer scores on the page
    document.getElementById('user').innerText = userScore;
    document.getElementById('Comp').innerText = compScore;
}