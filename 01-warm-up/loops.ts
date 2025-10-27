// put the all odd nums in an array
const nums = [1, 2, 3, 4, 55, 77, 23, 45, 66];
let oddnums = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {
//     oddnums.push(nums[i]);
//   }
// }

// console.log(oddnums);

/*
write a fuction that searches for an
element in array and returns the index,
if the element is not present then -1
*/

// function searchElement(num: number) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === num) {
//       return i;
//     }
//   }

//   return -1;
// }
// // console.log(nums[1] === 2)
// const returnedIndex = searchElement(66);
// console.log(returnedIndex);

/*
write a function that returns the number
of negative numbers in an array
*/

// function countnegativeNumbers(arr: number[]) {
//   let negativeNumbers: number[] = [];
//   for (let i: number = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negativeNumbers.push(arr[i]);
//     }
//   }
//   return negativeNumbers.length;
// }

// const totalOfNegativeNums = countnegativeNumbers([1, 2, 3, -4, -5, -7]);
// console.log(totalOfNegativeNums);

/*
find the largest number in an array
*/

const numbers = [-100, 1, 2, 3, 4, 55, 23, 45, 66, 77];
// the least number
let largest = -Infinity;
let smallest = Infinity;
largest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(largest);
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//     console.log(largest);
//   }
// }

// console.log(largest);
/*
find the smallest number in an array
*/

// for (let i = 0; i < numbers.length; i++) {
//   console.log(smallest);
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//     console.log(smallest);
//   }
// }

// console.log(smallest);
