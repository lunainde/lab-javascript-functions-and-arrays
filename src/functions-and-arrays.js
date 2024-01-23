// Iteration #1: Find the maximum------------------------------
//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {                     //if #1>#2 retutn1 else2
    return number1;
  } else {
    return number2;
  }
}
//run with given arguments
console.log(maxOfTwoNumbers(5, 10));
console.log(maxOfTwoNumbers(20, 15));


//================================================================
// Iteration #2: Find longest word---------------------------------
// Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(wordsArray) {          //create new array w/parameters
  
  if (wordsArray.length === 0){                 // return null if called w/empty array
    return null;
  }

  let longestWord = "";                         //declare where to save

  for (let word of wordsArray){                 //iterate inside
    if (word.length > longestWord.length) {     //longest
      longestWord = word;                       //store word
    }
  }
  return longestWord;                           //execute
}
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

console.log(findLongestWord(words));            //print

//SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
//SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length


//======================================================================
// Iteration #3: Calculate the sum-------------------------------------
//Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumNumbers(numbers) {           //create new array w/parameter
  let sum = 0;                           //declare starting 0

  for (let number of numbers) {          //for x of XXXX 
    sum += number;                       //sum each i
  }
  return sum;                            //execute
}
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];  //given argument

console.log(sumNumbers(numbers))         //run/print




// Iteration #3.2 Bonus:--generic sum() function----------------------------
//what if we want to calculate the sum of the length of words in an array? What if it also includes boolean values? 

function sum(mixedArr) {                //function name(parameter)

  let totalSum = 0;                     //store: inside function, before iteration ==> 0

  for(let element of mixedArr){         //for ea. element of elements-array

    if (typeof element === 'number'){   
      totalSum += element;                     //if typeof ==> number, + number
    } else if (typeof element === 'string'){   
      totalSum += element.length;              //if typeof string, + characters
    } else if (typeof element === 'boolean'){  
      if (element === true ){                  //if typeof boolean, + 1 (for true)
        totalSum += 1
      }
    } else {
      throw new Error('Unsupported data type')  //else show 'Error'
    }
  }
  return totalSum;                      //execute
}
//const (paramenter) ==> arguments given
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]; 
//should return: 57
console.log(sum(mixedArr))        //given argument ==> run(function name(argument))

//SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof




//=====================================================================================
// Iteration #4: Calculate the average--------------------------------------------------
//1.Find the sum (1st exercise or reusing the function sumNumbers()?)
//2.Divide that sum by the number of elements in the array.
// Level 1: Array of numbers

function averageNumbers(numbersAvg) {             //function-name(parameter)

  let sum = 0;                                    //start at 0

  for(let number of numbersAvg){                  //iterate ea. number of numbersArr
    sum += number;                                //sum ea. index+1
  }
  if (numbersAvg.length === 0) {                  //if array empty ==> null
    return null;
  }
  return sum/numbersAvg.length;                   //totalSum/qty of elements in Arr
}

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];     //UI argument given ==> (parameter)

console.log(averageNumbers(numbersAvg))           //print(function-name(parameter))


//Iteration #4.2: Array of strings------------------------------------------------------
//A function that receives as a single argument an array of words and returns the average length of the words:
function averageWordLength(wordsArr) {

  if (wordsArr.length === 0){
    return null;
  }
  
  let sum = 0;
  
  for (let word of wordsArr){
    sum += word.length;
  }
  return sum/wordsArr.length;
}

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
console.log(averageWordLength(wordsArr))
 
// Bonus - Iteration #4.3-----------------------------------------------------------
//A function that receives any mixed array and calculates the average, (numbers and/or strings and/or booleans as a mixed array).

function avg(mixArr) {
  if (mixArr.length === 0){
    return null;
  }
  let sum = 0;                                  //start at 0
  
  for(let element of mixArr){                  //for ea. element of elements in Arr
   
  if (typeof element === 'number'){   
    sum += element;                            //add up all elements
  } else if (typeof element === 'string'){   
    sum += element.length;                     //counts characters
  } else if (typeof element === 'boolean'){    
    if (element === true ){                    //true=1 & false=0
      sum += 1
    }
  } else {
    throw new Error('Unsupported data type')  //else show 'Error'
  }
  }
  return sum/mixArr.length;                   //totalSum/qty of elements in Arr
}                                             //end of function
const mixArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 5.7
console.log(avg(mixArr));


//=============================================================================
// Iteration #5: Unique arrays-----------------------------------------------
//Remove the duplicates, and return a new array. => methods: .indexOf and .includes


function uniquifyArray(wordsUnique) {

  if (wordsUnique.length === 0){
    return null;                        //null if [] is empty
  }

  let uniqueWords = []                  //create a new array for results

  for (let word of wordsUnique){        //iterate=> for ea. word of words
    if (!uniqueWords.includes(word)){   //if array includes repaated, ignore
        uniqueWords.push(word);         //push to new arr unique words
    }
  }
  return uniqueWords;                   //execute newArray
}

const wordsUnique = [                   //arguments for the parameters
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
console.log(uniquifyArray(wordsUnique));  //run/print function outcome
//outcome: new array w/o poison, bring, simple




//====================================================================================
// Iteration #6: Find elements
//Declare a function that takes in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.


function doesWordExist(wordsArr2, wordsFind) {    //new array + word to find
  
  if (wordsArr2.length === 0){                    //if [] empty = 0
    return null;
  }
  
  for(let word of wordsArr2){                     //ea. word of array
    if (word === wordsFind){                      //if found = true
      return true
    }
  }
  return false
}

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
console.log(doesWordExist(wordsFind, 'machine'))
console.log(doesWordExist(wordsFind, 'lula'))




//===================================================================================
// Iteration #7: Count repetition
//Declare a function that takes in an array of words as the 1st-argument and 2nd-argument, a word to search. The function will return the number of times that word appears in the array.


function howManyTimes(wordsCount, wordsToSearch) {

  let count = 0;

  for(let word of wordsCount){
    if(word === wordsToSearch){
      count++;
    }
  }
  return count;
}

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

console.log(howManyTimes(wordsCount, "matter"));



//==============================PENDING=========================================
// Iteration #8: Bonus: Product of adjacent numbers
// Given multiple arrays, find the greatest product of four adjacent numbers.
// We consider adjacent any four numbers that are next to each other horizontally or vertically. For example, if we have a 5x5 Matrix like:
// [ 1,  2, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1, 20, 3, 4, 5]
// [ 1,  4, 3, 4, 5]
//The greatest product will be the 20x20x20x4 = 32000.



const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {

  if (matrix.length === 0){                    //if [] empty = 0
    return null;
  }

  for(let i of matrix){

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}



// ================================RUN=========================================
// https://replit.com/@lunainde/005-lab-javascript-functions-and-arrays

// 10
// 20
// crocodile
// 87
// 57
// 6
// 5.3
// 5.7
// [
//   'crab',
//   'poison',
//   'contagious',
//   'simple',
//   'bring',
//   'sharp',
//   'playground',
//   'communion'
// ]
// true
// false
// 4 (4x 'matters')