
function sortCards(arr) {
    for (let i = 0; i < arr.length; i++) {
        let card = arr[i].split("-");
        let currSmallest = getValue(card[0]);
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            let card = arr[j].split("-");
            let currValue = getValue(card[0]);
            if (currSmallest > currValue) {
                currSmallest = currValue; 
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

function findSameNumberMatches(arr) {
    
    let matches = [];
    let currMatch = [];
    let isInside = false;

    //try to find all available same numbers 
    for (let i = 0; i < arr.length - 1; i++) {
        let card = arr[i].split("-");
        let value = getValue(card[0]);
        let secondCard = arr[i + 1].split("-");
        let secondValue = getValue(secondCard[0]);
        
        //CHECK IF THE NUMBERS ARE THE SAME 
        if (value === secondValue) {
            if (!isInside) {
                currMatch.push(arr[i]);
                currMatch.push(arr[i + 1]);
                isInside = true;
            }
            else {
                currMatch.push(arr[i + 1]);
            }
        }
        else {
            if (currMatch.length != 0) {
                matches.push(currMatch);
            }
            currMatch = [];
            isInside = false;
        }
    }
    return matches;
}

function findSequence(arr) {
    
    let arrays = [];
    arrays.push([arr[0]]);
    
    for (let i = 1; i < arr.length; i++) {
        let currCard = arr[i].split("-");
        let currType = currCard[1];
        
        const SIZE = arrays.length;
        let hasMatch = false;

        for (let r = 0; r < SIZE; r++) {
            let card = arrays[r][0].split("-");
            let type = card[1];
             
            if (currType === type) {
                arrays[r].push(arr[i]);
                hasMatch = true;
                break;
            } 
        }
        
        if (!hasMatch){
            arrays.push([arr[i]]);
        }
    }
    console.log(arrays)
}

function getValue(a) {

    if (a == 'K') {
        return 12;
    }
    else if (a == 'Q') {
        return 11;
    }
    else if (a == 'A') {
        return 1;
    }
    else {
        return parseInt(a);
    }
}

let arr = ['10-H','7-C','A-S','A-D','7-S','10-S','K-D','Q-S'];
let sortedArr = sortCards(arr);
findSequence(sortedArr)



