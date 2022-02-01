// Returns the index position of the target if found, else return -1

function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) { 
        if(array[i] === key) {
            return i;
        }
    }
    return -1;
}

function verify(index) {
    if (index =! null) {
        console.log("Target is found at index: ", index)
    }
    else {
        console.log("Target not found in list")
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

let results = linearSearch(numbers, 1)

verify(results)
