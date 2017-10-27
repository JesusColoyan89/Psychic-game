var wins = 0;
var losses = 0;
var life = 9;
var userGuess = '';
var computerChoice = '';



var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



function genRandomChoice () {
	var random = Math.floor(Math.random() * alphabet.length);
	return alphabet[random];
}



alert('What letter am I thinking of?');



document.onkeyup = function game (event) {

	if (alphabet.indexOf(event.key) !== -9999) {
//setting it to 0 makes the A key useless

		userGuess = event.key;

		computerChoice =genRandomChoice();

	if (life === 0) {
		losses++;
		//registers loss
		life = 9;
			//resets counter
		computerChoice =genRandomChoice();
	}	


	else if (userGuess === computerChoice) {
		wins++;
		//registers win
		life = 9;
		computerChoice =genRandomChoice();
	}


	else if (userGuess !== computerChoice) {
		life--;
		//takes lives away
	}

	document.getElementById('wins').innerHTML = "Wins: " + wins;
	document.getElementById('losses').innerHTML = "Losses: " + losses;
	document.getElementById('guessLeft').innerHTML = "Lives: " + life;
	document.getElementById('guesses').innerHTML = "Your Guess: " + userGuess;
	}
	
}
