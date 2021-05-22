//1. Always Hungry. Write a function that is given an array and each time the value is "food" it should console.log "yummy". If "food" was not present in the array, console log "I'm Hungry" once. 

function alwaysHungry(arr) {
    // your code here 
    var isHungry = true;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'food'){
            isHungry=false;
            console.log("Yummy");
        }
    }
    if (isHungry == true) {
        console.log ("I'm Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//2. High Pass Filter - Given an array and a value cutoff, return a new array containing only the values larger than cutoff

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3. Given an array of numbers return a count of how many of the numbers are larger than average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    sum = sum / arr.length;

    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > sum){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//4. Array Reverse - write a function that will reverse the values of an array and return them;
function reverse(arr) {
    // your code here
    var reversedArray = [];
    for (var i = arr.length-1; i >= 0; i--){
        // console.log(arr[i])
        reversedArray.push(arr[i]);
    }
    // console.log(reversedArray)
    arr = reversedArray;
    return arr;
}
reverse(["a", "b", "c", "d", "e"])
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var length = n - fibArr.length;
    for (var i = 0; i < length; i++){
        var sum  = fibArr[i] + fibArr[i+1];
        fibArr.push (sum);
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
