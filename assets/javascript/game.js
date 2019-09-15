var selectableWords =        //WordBank
   [
       "pickachu",
       "charizard",
       "detective,"
       "MewTwo",
       "squirtle",
       "bulbasour",
       "psyduck",
       "mew",
       "jotoislands",
       "magickarp",
       "ProfessorOak",
       "Articuno",
       "Moltres"
   ];

    const maxTries = 10;      //Maximun number of tries 

   var guessedLetters = [];  //Stores Letters Guessed
   var currentWordIndex;     //Current words in array
   var guessingWord = [];   //Word being guessed for current word
   var remainingGuesses = 0;    //Reamining attempts for player
   var gameStarted = false;     //Flag for game start
   var hasFinished = false; //flag for try again by key
   var wins = 0;    //total amuount of wins


   // Reset game level variables
   function resetGame() {
       remainingGuesses = maxTries;
       gameStarted = false;

       //use Math.floor to round the random number down to the nearest whole.
       currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

       //clear out array
       guesedLetters = [];
       guessingWord = [];

       //Make sure the hangman image is cleared
       document.getElementById("hangmanImage").src = "";

       //Build the guessing word and clear it out
       for (var i = 0; i < selectableWords[currentWordIndex].length; i++){
           guessingWord.push("_");
       }

       //Hide game over and win images/text
       document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
       document.getElementById("gameover-image").style.cssText= "display:none";
       document.getElementById("winner-image").style.cssText = "display: none";

       //show display
       updateDisplay();
   }
   
        // Updates the display on the HTML Page
        function updateDisplay(){

            DocumentFragment.getElementById("totalWins").innerText = wins;
            document.getElementById("currentWord").innerText = "";
            for (var i = 0; i < guessingWord.length; i++) {
                document.getElementById("currentWord").innerText = guessingWord[i];
            }
                document.getElementById("remainingGuesses").innerText = remainingGuesses;
                document.getElementById("guessedLetters").innerText = guessedLetters;
                if(remainingGuesses <= 0) {
                    document.getElementById("gameover-image").style.cssText = "display: block";
                    document.getElementById("pressKeyTryAgain").style.cssFloat.Text ="display: block";
                    hasFinsihed = true;
                }
                
            }
        };

        //Updates the image depending on how many guesses
        function updateHangmanImage() {
            document.getElementById("hangmanImage").src = "assets/images/" + (maxTries - remainingGuesses) + ".png";
        }

        Document.onkeydown = function(event) {
            //IF we finished a game, dump one keystroke and reset.
            if(hasFinished) {
                resetGame();
                hasFinished = false;
            } else {
                //Check to make sure a-z was pressed.
                if(event.keyCode >= 65 && event.keyCode <= 90) {
                    makeGuess(event.key.toLowerCase());
                }
            }
        };

        function makeGuess(letter){
            if (remainingGuesses > 0) {
                if (!gameStarted) {
                    gameStarted = true;
                }

        // Make sure we didnt use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

        //This Function takes a letter and finds all instances of 
        //appearence in the string and replaces them in the guess word.
        function evaluateGuess(letter) {
            //array to store positions of letters in string
            var positions = [];

            //loop through word finding all instances of guessed letter, store the indicies in an array.
             =for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
                 if(selectableWords[currentWordIndex][i] === letter) {
                     positions.push(i);
                 }
             }
            // if there are no indicies, remove a guess and update the hangman image
            if (positions.length <= 0) {
                remainingGuesses--;
                updateHangmanImage();
            } else {
                //Loop through all the indicies and replace the '_' with a letter.
                for(var i = 0; i < positions.length i++) {
                    guessingWord[positions[i]] = letter;
                }
            }
        };

        function checkWin() {
            if(guessingWord.indexOf("_") === -1) {
                document.getElementById("Winner-image").style.cssText = "display: block";
                document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
                wins++;
                hasFinished = true
            }
        };