
//HTML 
let opponentContainer = document.getElementById("opponentContainer");
let playerContainer = document.getElementById("playerContainer");

let deck = [];
let playerDeck = [];
let oppDeck = [];

window.onload = () => {
    createCards();
    shuffleCards();
    startGame();
}

function startGame() {

    for (let i = 0; i < 8; i++) {
        let card = deck.pop();

        let cardImg = document.createElement("img");
        cardImg.id = card;
        cardImg.src = `./cards/${card}.png`;
        cardImg.className = "card";
    }
}

function shuffleCards() {

    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let curr = deck[i];
        deck[i] = deck[j];
        deck[j] = curr;
    }
}

function createCards() {

    let type = ['S', 'C', 'D', 'H'];
    let values = ['A', '2', '3', '4', '5', '6', '7', '10', 'Q', 'K'];

    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${values[j]}-${type[i]}`);
        }
    }
}
