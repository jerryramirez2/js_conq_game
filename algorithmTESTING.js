
let arr = ['3-H','10-C','5-S','A-D','7-S','10-C','5-H','K-D'];
arr = [3,10,5,1,1,10,5,12];

function sortValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currSmallest = arr[i];
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (currSmallest > arr[j]) {
                currSmallest = arr[j];
                index = j;
            }
        }
        let temp = arr[i];
        arr[i] = currSmallest;
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
