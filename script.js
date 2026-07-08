
//HTML 
let opponentContainer = document.getElementById("opponentContainer");
let playerContainer = document.getElementById("playerContainer");

let deck = [];

window.onload = () => {
    createCards();
    console.log(deck);
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
