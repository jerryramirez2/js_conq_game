
let arr = ['10-H','10-C','A-S','A-D','7-S','10-C','Q-H','K-D'];

function sortValues(arr) {
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

console.log(sortValues(arr))

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
