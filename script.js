//Question 1

function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


///////////////////////////////////////////
//Question 2
function findLargestNumber(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}

const n = [3, 5, 1, 8, 2];
const largestNumber = findLargestNumber(n);
console.log(largestNumber); // Output: 8

//////////////////////////////////////////////
//Question 3
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}

const originalString = "Web Master";
const reversedString = reverseString(originalString);
console.log(reversedString); 

/////////////////////////////////////////////////
//Question 4
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

const X = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = removeDuplicates(X);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

