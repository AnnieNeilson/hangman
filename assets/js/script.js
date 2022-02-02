document.addEventListener("DOMContentLoaded", function(){
    let menuButtons = document.getElementsByClassName('categories');
    generateButtons();

    for (let button of menuButtons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "actors"){
                randomActor();
            } else if(this.getAttribute("data-type") === "movies"){
                randomMovie();
            } else if(this.getAttribute("data-type") === "music"){
                randomMusic();
            } else if(this.getAttribute("data-type") === "all"){
                randomAll();
            }
            else{
                alert("Category not recognised");
            }
        })
    }
});

/*--- setting some things */

let answer = '';
let maxWrong = 6;
document.getElementById('max-wrong').innerHTML = maxWrong;
let errors = 0;
document.getElementById('mistakes').innerHTML = errors;
let guessed = ['/'];
let wordStatus = null;

/*--- function to generate buttons for less busy html doc ---*/

function generateButtons(){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter=>
    `<button class="alphabet" id="` + letter + `" value="` + letter + `" onClick="handleGuess('` + letter + `')">
    ` + letter + ` </button>`
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
};

/*--- lists of random words ---*/
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
]

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
]

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
]
/*--- functions to pick random words by category ---*/

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

/*--- function converts random word to underscores and slashes ---*/

function convertWord(){
    wordStatus = answer.split(' ').join('/');
    hiddenWord = wordStatus.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('right-guesses').innerHTML = hiddenWord; 
}

/*--- function to check if the letter is in the random word and respond appropriately ---*/

function handleGuess(chosenLetter){
    if (answer === ''){
        alert('You must pick a category before guessing')
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
};

function updateMistakes(){
    let oldScore = parseInt(document.getElementById("mistakes").innerText);
    document.getElementById("mistakes").innerText = ++oldScore;
    ++errors;
    updateHangmanImage();
}

function checkIfGameWon(){
    let comparingWord = answer.split(' ').join('/');
    if (hiddenWord === comparingWord){
        alert(`You Won! The answer was ${answer}!`);
        reset();
    } 
} 

function checkIfGameLost(){
    if (errors == 6){
        alert(`You Lost! The answer was ${answer}!`);
        reset();
    }
}

function updateHangmanImage(){
    alert(errors);
    document.getElementById('hangmanImg').src= `assets/images/hangman-${errors}.png`;
}

function reset(){
    errors = 0;
    guessed = ['/'];
    answer = '';
    document.getElementById('right-guesses').innerHTML = '';
    document.getElementById('hangmanImg').src = 'assets/images/hangman.png';
    document.getElementById('mistakes').innerHTML= 0;
    generateButtons();
}


