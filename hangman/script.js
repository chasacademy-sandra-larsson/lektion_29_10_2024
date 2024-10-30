document.addEventListener("DOMContentLoaded", function() {

   // DOM referenser
   const wordElement = document.getElementById("word");
   const inputLetter = document.getElementById("inputLetter")
   const guessBtn = document.getElementById("btnGuess");
   const gameMessageElement = document.getElementById("gameMessage");


    // Ord i "biblioteket" att välja på
    const words = ["tomato", "cucumber", "carrot", "peas", "selleri"];
    
    // Globala variabler
    let selectedWord; // det ord från words-arraye n man ska gissa på
    let guessLetters = [];  // listan med bokstäver som man gissat på
    let remainingGuessess = 10; // Hur många gissningar man har kvar, stegar ner för varje försök
    let gameActive = false; // State för spelet.
    
 

    // Initierar spelet
    function initGame() {
   
        // Aktivera spelet
        gameActive = true;

        // Noställ för att kunna resetta spelet
        guessLetters = [];
        remainingGuessess = 10;
        gameMessageElement.innerText = "";
        inputLetter.value = "";
        wordElement.innerText = "";
    
        
        // Slumpa fram vilket ord i arrayen words
        let rand = Math.floor(Math.random() * words.length);
        selectedWord = words[rand];
    }
  
    // Funktion ssom körs när användaren skrivit in en bokstav
    function handleGuess() {

        // Hämta från input-rutan och för till gemener
        let letter = inputLetter.value.toLowerCase();
        inputLetter.value = "";


        // Finns letter redan i guessLetters-arreyen? 
        if(guessLetters.includes(letter) === true || letter === " ") {
            gameMessageElement.innerText = "Du har redan gissat på bokstaven eller du gissade inte alls!!";
            return; // betyder att funktionen avslutas
        }
    
        // Lägga till letter sist i guessedLetter-arrayen
        guessLetters.push(letter);
     

        if(selectedWord.includes(letter) === true) {
            gameMessageElement.innerText = "Rätt gissning!";
        } else {
            remainingGuessess--;
            gameMessageElement.innerText = `Fel fissning. Du har ${remainingGuessess} kvar.`;
   
        }

        updateGame();
        checkGameStatus();

    }


    // Funktion för att uppdatera 
    function updateGame() {
        console.log("guessLetters", guessLetters);
        console.log("selectedWord", selectedWord);

        // Uppdatera ordet med rätt gissade bokstäver, annars _ 
        let displayText = "";
        for(let i = 0; i < selectedWord.length; i++) {
            const letter = selectedWord[i];
            console.log(letter);
            if(guessLetters.includes(letter)===true) {
                displayText += letter;
            } else {
                displayText += "_";
            }
            //displayText += guessLetters.includes(letter) ? letter : "_"; // Ternary operator och är inline sätt för if/else
        }

        wordElement.innerText = displayText;

        // Ska ge output som denna .. _ vid tom plats, bokstac vid fylld plats
        //wordElement.textContent = "_ a _ a _ a"

    }

    
 
    // Funktion som kollar om man gissat rätt eller inte
    function checkGameStatus() {


        // Om finalWord === selectedWord
        let finalWord = wordElement.innerText;

        if(finalWord === selectedWord) {
            gameMessageElement.innerText = `Du har gissat rätt på alla bokstäver. Ordet var ${selectedWord}`;
            // Win condition
            gameActive = false;
        } 
          // Om remainGuesses är lika med 0
        else if(remainingGuessess === 0) {
             // Lose condition
             gameActive = false;
            gameMessageElement.innerText = `Dina försök är förbrukade. Du förlorada. Ordet var ${selectedWord}`;
        } else {
          console.log("du vann och förlorade inte heller");
        }
        
 

    }
  
    
    // Händelselyssnare på knappen
    guessBtn.addEventListener("click",handleGuess);

    
    // Starta spelet
    initGame();


    
    });