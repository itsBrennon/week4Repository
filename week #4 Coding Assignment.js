//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];// array of ages

//1a
let lastElementIndex = ages.length - 1;
let firstElement = ages[0];
let lastElement = ages[lastElementIndex];
let difference = lastElement - firstElement;
console.log(`${difference}`);//Difference between the first and last element
//1b
ages.push(50);
lastElementIndex = ages.length -1;
lastElement = ages[lastElementIndex];
difference = lastElement - firstElement;
console.log(`${difference}`);//Difference between the first and last elemenet after adding new age
//1c
let sum = 0 
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(`${averageAge}`);//Average Age

//2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] //Array was created containing the names 
//2a
let totalLetters = 0;
for(let i = 0; i < names[i].length; i++){
    totalLetters += names[i].length;

}
const averageLetters = totalLetters / names.length;
console.log(`${averageLetters}`); //loop to iterate through the array and caculate the number of letters per name
//2b
let concatenateNames = '';
for(let i = 0; i < names.length; i++){
    concatenateNames += names[i] + ' ';
}
console.log(concatenateNames);//loop to iterate through the array and concatenate all the names togther (seperated by spaces as well)

//3 
let arr = names
lastElement = arr [arr.length - 1];
console.log(lastElement);//Accessing the last element of the Array

//4
const arr3 = [1, 2, 3];
const firstElement3 = arr3[0]
console.log(firstElement3);//Accessing the first element of the Array

//5
const nameLengths = [];
const names1 = ['John', 'Jane', 'Jim', 'Jack']; //Created a new array with 4 elements //names1 because names is used already
for(let i = 0; i < names1.length; i++){
    nameLengths.push(names1[i].length);
}
console.log(nameLengths);

//6
//sum is already = 0 
for(let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}
console.log(sum);//loop to iterater over the array and caculate the sum of all elements in the array

//7
function repeatString(word, n) { //function with the 2 arguments word , n 
    return word.repeat(n);
}
var n = repeatString ("Hello",3)
console.log(n); //returns word concatenated to itself n number of times


//8
function fullName (firstName, lastName){
    return firstName + " " + lastName;
} 
var h = fullName("Christian", "Brandon")
console.log(h) //returns fullName


//9
let sum7 = 0;
function sumGreaterThan100(arr) {
   for(let x of arr){ //forced an array
    sum7 += x 
   }
   return sum7 > 100
}

const numbers = [10, 20, 30, 40, 60]
let t = sumGreaterThan100(numbers)
console.log(t)

//10
let sum2 = 0 
function average(arr) {
    for(let x of arr) {
        sum2 += x 
    } 
    return sum2 / (arr.length)
      
}
const numbers2 = [10, 20, 30, 40, 60, 1, 43, 10]
let t2 = average(numbers2)
console.log(t2)//array of numbers return to the average of all elements

//11
let sum4 = 0 
let sum3 = 0
function average2(arr1, arr) {
    for(let x of arr1) {
        sum3 += x 
    } 
    for(let x of arr) {
        sum4 += x 
    } 
    return (sum3 / (arr1.length)) > (sum4 / (arr.length)) 
}
const numbers3 = [1, 2, 3, 4]
const numbers4 = [0, 1, 1, 1]
let t3 = average2 (numbers3, numbers4)
console.log(t3) //returns true if average of elements in first array is > average element in the second array

//12
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    } else{
        return false;
    }
}
let a = willBuyDrink(true, 12)
console.log(a); // returns true if it is hotoutside if moneyInPocket > 10.50


//13
function addNumbers (num1, num2){
    return num1 + num2;
}
let sum5 = addNumbers (5, 10);
console.log(sum5); //Two arguments and they return their sum 
