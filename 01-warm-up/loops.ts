// put the all odd nums in an array
const nums = [1, 2, 3, 4, 55, 77, 23, 45, 66];
let oddnums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    oddnums.push(nums[i]);
  }
}

console.log(oddnums);
