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
                alert("didnt work :(");
            }
        })
    }
});

let answer = '';
let maxWrong = 6;
document.getElementById('max-wrong').innerHTML = maxWrong;
let mistakes = 0;
document.getElementById('mistakes').innerHTML = mistakes;
let guessed = [ '/'];
let wordStatus = null;

function generateButtons(){
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>
    `<button class="alphabet" id="` + letter + `" value="` + letter + `" onClick="handleGuess('` + letter + `')">
    ` + letter + ` </button>`
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
};



function handleGuess(){
    let letter= String(this);
    alert(letter);
    for (let i = 0; i < wordStatus.length; i++){
        if (letter === i){


        }   
    }

};





/*--- lists of random words ---*/
let actorsList = [
    "Cate Blanchett",
    "William Shatner",
    "Christopher Lee",
    "David Tennant",
    "Catherine Tate",
    "Tom Cruise",
    "Julia Roberts",
    "Ryan Reynolds",
    "George Clooney",
    "Will Arnett",
    "Jennifer Anniston",
    "Brad Pitt",
    "Johnny Depp",
    "Harrison Ford",
    "Ian McKellen",
    "Halle Berry",
    "Mel Gibson",
    "Emma Stone",
    "Idris Elba",
    "Rachel McAdams",
    "Kate Winslet"
]

let moviesList = [
    "Shrek",
    "Pretty Woman",
    "Jaws",
    "Casablanca",
    "Snow White",
    "Black Panther",
    "Inception",
    "Blade Runner",
    "Mary Poppins",
    "Donnie Darko",
    "Pulp Fiction",
    "To Kill A Mockingbird",
    "King Kong",
    "Back To The Future",
    "Monty Python And The Holy Grail",
    "Taxi Driver",
    "Rear Window",
    "Life Of Brian",
    "Lawrence Of Arabia",
    "Basil The Great Mouse Detective"
]

let musicList  = [
    "Beartooth",
    "The Beatles",
    "The Rolling Stones",
    "Avenged Sevenfold",
    "Led Zeppelin",
    "Aerosmith",
    "Red Hot Chili Peppers",
    "Nine Inch Nails",
    "Nirvana",
    "The Clash",
    "Queen",
    "Lynyrd Skynyrd",
    "Fleetwood Mac",
    "Marilyn Manson",
    "My Chemical Romance",
    "Steely Dan",
    "Foo Fighters",
    "Public Enemy",
    "Arcade Fire",
    "Pearl Jam",
    "The Velvet Underground"
]
/*--- functions to pick random words by category ---*/

function randomActor(){
    answer = actorsList[Math.floor(Math.random() * 20)];
    alert(answer);
    console.log(answer);
    convertWord();   
}

function randomMovie(){
    answer = moviesList[Math.floor(Math.random() * 20)];
    alert(answer);
    console.log(answer);
    convertWord();   
}

function randomMusic(){
    answer = musicList[Math.floor(Math.random() * 20)];
    alert(answer);
    console.log(answer);
    convertWord();   
}

/*--- function converts random word to underscores and slashes ---*/

function convertWord(){
    wordStatus = answer.split(' ').join('/');
    alert(wordStatus);
    hiddenWord = wordStatus.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('right-guesses').innerHTML = hiddenWord; 
}




