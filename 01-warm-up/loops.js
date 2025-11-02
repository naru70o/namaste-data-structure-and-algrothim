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

// const numbers = [-100, 1, 2, 3, 4, 55, 23, 45, 66, 77];
// // the least number
// let largest = -Infinity;
// let smallest = Infinity;
// largest = numbers[0];

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

/*
find the second largest number in an array
*/

// function searchsecondLargest(numbers) {
//   if (numbers.length < 2) {
//     return null;
//   }

//   let largest = -Infinity;
//   let secondLargest = Infinity;

// after solving the problem think about edge cases
// like what if there is no numbers in the array
// and what if there's less than one number in the array (etc)
// ask this quations to your interviewer
/*
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] != largest) {
      secondLargest = numbers[i];
    }
  }
  return { secondLargest, largest };
}

const { secondLargest, largest } = searchsecondLargest([
  4, 9, 9, 0, 2, 8, 7, 1,
]);
console.log(secondLargest, largest);

// loop in a loop
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}
*/
/*
let n = 5;

for (let i = 0; i < n; i++) {
  let rowStars = "";
  for (let j = 0; j <= i; j++) {
    rowStars = rowStars + "*";
    // count.push(j+1)
  }
  console.log(rowStars);
}

// star pattern
for (let i = 0; i < n; i++) {
  let row = "";

  // empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }

  // stars
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

//
let switchv = 1;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let k = 0; k < i + 1; k++) {
    if (switchv == 0) {
      row = row + "0";
      switchv = 1;
    } else {
      row = row + "1";
      switchv = 0;
    }
  }

  console.log(row, `---------${switchv}`);
}
*/
