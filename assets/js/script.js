document.addEventListener("DOMContentLoaded", function(){
    let menuButtons = document.getElementsByClassName('categories');
    generateButtons();

    for (let button of menuButtons){
        button.addEventListener('click', function(){
            if(this.getAttribute("id") === "actors"){
                randomActor();
                document.getElementById('actors').innerHTML = 'Actors ✔';
                document.getElementById('movies').innerHTML = 'Movies';
                document.getElementById('music').innerHTML = 'Music';
                
            } else if(this.getAttribute("id") === "movies"){
                randomMovie();
                document.getElementById('movies').innerHTML = 'Movies ✔';
                document.getElementById('actors').innerHTML = 'Actors';
                document.getElementById('music').innerHTML = 'Music';

            } else if(this.getAttribute("id") === "music"){
                randomMusic();
                document.getElementById('music').innerHTML = 'Music ✔';
                document.getElementById('movies').innerHTML = 'Movies';
                document.getElementById('actors').innerHTML = 'Actors';
            } else{
                alert("Category not recognised");
            }
        });
    }
});

// creating standard settings 

let answer = '';
let maxWrong = 6;
document.getElementById('max-wrong').innerHTML = maxWrong;
let errors = 0;
document.getElementById('mistakes').innerHTML = errors;
let guessed = ['/'];
let wordStatus = null;

/**
 * function to generate buttons efficiently
 */
function generateButtons(){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter=>
    `<button class="alphabet" id="` + letter + `" value="` + letter + `" onClick="handleGuess('` + letter + `')">
    ` + letter + ` </button>`
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

// lists of random words
let actorsList = [
    "CATE BLANCHETT",
    "WILLIAM SHATNER",
    "CHRISTOPHER LEE",
    "DAVID TENNANT",
    "CATHERINE TATE",
    "TOM CRUISE",
    "JULIA ROBERTS",
    "RYAN REYNOLDS",
    "GEORGE CLOONEY",
    "WILL ARNETT",
    "JENNIFER ANNISTON",
    "BRAD PITT",
    "JOHNNY DEPP",
    "HARRISON FORD",
    "IAN MCKELLEN",
    "HALLE BERRY",
    "MEL GIBSON",
    "EMMA STONE",
    "IDRIS ELBA",
    "RACHEL MCADAMS",
    "KATE WINSLET"
];

let moviesList = [
    "SHREK",
    "PRETTY WOMAN",
    "JAWS",
    "CASABLANCA",
    "SNOW WHITE",
    "BLACK PANTHER",
    "INCEPTION",
    "BLADE RUNNER",
    "MARY POPPINS",
    "DONNIE DARKO",
    "PULP FICTION",
    "TO KILL A MOCKINGBIRD",
    "KING KONG",
    "BACK TO THE FUTURE",
    "MONTY PYTHON AND THE HOLY GRAIL",
    "TAXI DRIVER",
    "REAR WINDOW",
    "LIFE OF BRIAN",
    "LAWRENCE OF ARABIA",
    "BASIL THE GREAT MOUSE DETECTIVE"
];

let musicList  = [
    "BEARTOOTH",
    "THE BEATLES",
    "THE ROLLING STONES",
    "AVENGED SEVENFOLD",
    "LED ZEPPELIN",
    "AEROSMITH",
    "RED HOT CHILI PEPPERS",
    "NINE INCH NAILS",
    "NIRVANA",
    "THE CLASH",
    "QUEEN",
    "LYNYRD SKYNYRD",
    "FLEETWOOD MAC",
    "MARILYN MANSON",
    "MY CHEMICAL ROMANCE",
    "STEELY DAN",
    "FOO FIGHTERS",
    "PUBLIC ENEMY",
    "ARCADE FIRE",
    "PEARL JAM",
    "THE VELVET UNDERGROUND"
];

//functions to pick random words by category

function randomActor(){
    reset();
    answer = actorsList[Math.floor(Math.random() * 20)];
    convertWord();   
}

function randomMovie(){
    reset();
    answer = moviesList[Math.floor(Math.random() * 20)];
    convertWord();   
}

function randomMusic(){
    reset();
    answer = musicList[Math.floor(Math.random() * 20)];
    convertWord();   
}

// function converts random word to underscores and slashes

function convertWord(){
    wordStatus = answer.split(' ').join('/');
    hiddenWord = wordStatus.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('right-guesses').innerHTML = hiddenWord; 
}

/**
 * function to check if the chosen letter has been guessed already, if it
 * is in the random word and respond accordingly
 */
function handleGuess(chosenLetter){
    if (answer === ''){
        alert('You must pick a category before guessing');
    } else{
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        document.getElementById(chosenLetter).setAttribute('disabled', true);
        if (answer.indexOf(chosenLetter) >= 0){
            convertWord();
            checkIfGameWon();
        } else if (answer.indexOf(chosenLetter) === -1){
            updateMistakes();
            checkIfGameLost();
        } 
    }
}

// increases the mistake counter and ends the game when it gets to 6
function updateMistakes(){
    let oldScore = parseInt(document.getElementById("mistakes").innerText);
    document.getElementById("mistakes").innerText = ++oldScore;
    ++errors;
    updateHangmanImage();
}

function checkIfGameWon(){
    let comparingWord = answer.split(' ').join('/');
    if (hiddenWord === comparingWord){
        let youWon = `You Won! The answer was ${answer}! Choose a category to play again`;
        document.getElementById('result').innerHTML = youWon;
        disableButtons();
    } 
} 

function checkIfGameLost(){
    if (errors == 6){
        let youLost = `You Lost! The answer was ${answer}! Choose a category to play again`;
        document.getElementById('result').innerHTML = youLost;
        disableButtons();
    }
}

function updateHangmanImage(){
    document.getElementById('hangmanImg').src= `assets/images/hangman${errors}.png`;
}

//resets the game so the user can play again
function reset(){
    errors = 0;
    guessed = ['/'];
    answer = '';
    document.getElementById('right-guesses').innerHTML = '';
    document.getElementById('hangmanImg').src = 'assets/images/hangman.png';
    document.getElementById('mistakes').innerHTML= 0;
    document.getElementById('actors').innerHTML = 'Actors';
    document.getElementById('movies').innerHTML = 'Movies';
    document.getElementById('music').innerHTML = 'Music';
    document.getElementById('result').innerHTML = '';
    generateButtons();
}

function disableButtons(){
    let allButtons = document.getElementsByClassName('alphabet');
    for( i in allButtons){
        allButtons[i].setAttribute('disabled', true);
    }
}

