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