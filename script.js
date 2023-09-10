const target = document.getElementById('target');
const gameContainer = document.querySelector('.game-container');
const scoreElement = document.getElementById('score');

let score = 0;
let gameInterval;

// Function to move the target randomly within the game container
function moveTarget() {
    const maxX = gameContainer.clientWidth - target.clientWidth;
    const maxY = gameContainer.clientHeight - target.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Function to handle target click
function handleTargetClick() {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    moveTarget();
}

// Function to start the game
function startGame() {
    gameInterval = setInterval(moveTarget, 1000); // Move the target every 1 second
    target.addEventListener('click', handleTargetClick);
}

// Function to end the game
function endGame() {
    clearInterval(gameInterval);
    target.removeEventListener('click', handleTargetClick);
    alert(`Game Over! Your Score: ${score}`);
    score = 0;
    scoreElement.textContent = 'Score: 0';
}

// Start the game when the page loads
startGame();

// Add a timer to end the game after 30 seconds (adjust as needed)
setTimeout(endGame, 30000);
