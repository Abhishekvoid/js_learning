const quotes = [
	"The quick brown fox jumps over the lazy dog.",
	"Jackdaws love my big sphinx of quartz.",
	"How vexingly quick daft zebras jump!",
	"The five boxing wizards jump quickly.",
	"Sphinx of black quartz, judge my vow.",
	"Jaded zombies acted quaintly but kept driving their oxen forward."
];

// Selecting DOM elements
const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

// Initializing game variables
let quoteIndex = 0;
let startTime = null;
let endTime = null;
let score = 0;

// Function to start the game
function startGame() {
	// Selecting a random quote from the array
	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	quoteElement.textContent = quote;

	// Starting the timer
	startTime = Date.now();
}

// Adding event listener to the input field
inputElement.addEventListener("input", function() {
	// Checking if the input matches the current quote
	if (inputElement.value === quotes[quoteIndex]) {
		// Incrementing the quote index and clearing the input field
		quoteIndex++;
		inputElement.value = "";

		// Checking if the game is over
		if (quoteIndex === quotes.length) {
			// Stopping the timer and calculating the score
			endTime = Date.now();
			const elapsedTime = (endTime - startTime) / 1000;
			score = Math.floor(quoteIndex / elapsedTime);

			// Displaying the score
			scoreElement.textContent = `Your score: ${score}`;

			// Resetting the game variables
			quoteIndex = 0;
			score = 0;
		} else {
			// Displaying the next quote
			quoteElement.textContent = quotes[quoteIndex];
		}
	}
});

// Starting the game
startGame();