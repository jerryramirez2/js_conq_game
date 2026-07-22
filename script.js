
//HTML 
let opponentContainer = document.getElementById("opponentContainer");
let playerContainer = document.getElementById("playerContainer");
let currCardContainer = document.getElementById("currCard");

//game functionality
let deck = [];
let playerDeck = [];
let oppDeck = [];
const START_COUNT = 8;
let isTrading = true;
let isChoosing = false;
let isOppTurn = false;
let isPuttingOneDown = false;

window.onload = () => {

    createDeck();
    shuffleDeck();
    startGame();
}

function startGame() {

    for (let i = 0; i < START_COUNT; i++) {
        //create player cards and containers
        playerDeck.push(deck.pop());
        let currCardImg = document.createElement("img");
        currCardImg.id = playerDeck[i];
        currCardImg.src = `./cards/${currCardImg.id}.png`;
        currCardImg.className = "cards";
        currCardImg.addEventListener("click", cardFunctionality);
        playerContainer.appendChild(currCardImg);

        //opponent player cards and containers
        oppDeck.push(deck.pop());
        currCardImg = document.createElement("img");
        currCardImg.id = oppDeck[i];
        currCardImg.src = `./cards/BACK.png`;
        currCardImg.className = "cards";
        opponentContainer.appendChild(currCardImg);
    }
}

function cardFunctionality() {

    if (isChoosing) {
        
    }
}

function shuffleDeck() {

    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function createDeck() {

    let value = ['A','2','3','4','5','6','7','10','Q','K'];
    let type = ['H','D','C','S'];

    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < value.length; j++) {
            let card = `${value[j]}-${type[i]}`;
            deck.push(card);
        }
    }
}
