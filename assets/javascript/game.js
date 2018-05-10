
var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Wins = 0;

var Losses = 0;

var GuessesLeft = 10;

var LetterGuessed = [];

var Guess = null;

var Letter = Alphabet[Math.floor(Math.random()*Alphabet.length)];

var NewGuessesLeft = function() {
    document.getElementById('GuessesLeft').innerHTML = "Guesses left: " + GuessesLeft;
  };

var NewLetter = function() {
    this.Guess = this.Alphabet[Math.floor(Math.random() * this.Alphabet.length)];
  };

var NewLetterGuessed = function() {
    document.getElementById('LetterGuessed').innerHTML = "Your Guesses so far: " + LetterGuessed + ', ';
  };

var reset = function() {
    GuessesLeft = 10;
    LetterGuessed = [];
    NewLetter();
    NewGuessesLeft();
    NewLetterGuessed();
  }

document.onkeyup = function(event){
    GuessesLeft--
    var Guess = String.fromCharCode(event.keyCode).toLowerCase();

    LetterGuessed.push(Guess);
    NewGuessesLeft();
    NewLetterGuessed();

    if (GuessesLeft > 0){
        if (Guess == Letter){
            Wins++;
            document.getElementById('Wins').innerHTML = "Wins: " + Wins;
            alert("You Won!");
            reset();
        }
    }
    
    else if(GuessesLeft == 0){
        Losses++;
        document.getElementById('Losses').innerHTML = "Losses: " + Losses;
        alert("Sorry, You Lost :( ");
        reset();
    }
}





