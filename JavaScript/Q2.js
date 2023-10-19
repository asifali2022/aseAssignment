
let numbers = [5, 2, 9, 1, 5, 6];


function bubbleSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/
let sortedArray = bubbleSortDescending(numbers);

console.log("Sorted Array in Descending Order: " + sortedArray);
