var wins = 0;
var losses = 0;
var life = 9;
var userGuess = '';
var computerChoice = '';



var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



function generateCPUChoice () {
	var randomNumber = Math.floor(Math.random() * alphabet.length);
	return alphabet[randomNumber];
}







alert('What letter am I thinking?');



document.onkeyup = function game (event) {

	if (alphabet.indexOf(event.key) !== -1) {

		userGuess = event.key;

		computerChoice =generateCPUChoice();

