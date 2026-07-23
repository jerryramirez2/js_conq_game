
let oppDeck = ['1-S','1-D','4-H','5-H','3-D','6-H','10-H','4-C'];
let valueArray = [];
let typeArray = [];

for (let i = 0; i < oppDeck.length; i++) {

    let card = oppDeck[i].split("-");
    let currValue = card[0];
    let currType = card[1];

    valueArray.push(currValue);
    typeArray.push(currType);
}

findNumbersInOrder(valueArray);

function findNumbersInOrder(arr) {
    
    
}
