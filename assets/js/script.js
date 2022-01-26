document.addEventListener("DOMContentLoaded", function(){
    let menuButtons = document.getElementsByClassName('categories');

    for (let button of menuButtons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "actors"){
                randomActor();
                
            } else{
                alert("didnt work :(");
            }
        })
    }
});

function generateButtons(){
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>
    
    `<button class="alphabet" id="` + letter + `" onClick="handleGuess('` + letter + `')">
    ` + letter + ` </button>`
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
};

generateButtons();

// function handleGuess(){
//     let letter= this;
//     alert(letter);
// };





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
    "Black Panter",
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

function randomActor(){
    let answer = actorsList[Math.floor(Math.random() * 20)];
    alert(answer);
    return answer;  
}


