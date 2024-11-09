// find duplicate value in an array
class Solution {
  checkDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }
}
let arr = [4, 5, 6, 4];
const myInstance = new Solution();
myInstance.checkDuplicates(arr);
console.log(myInstance.checkDuplicates(arr));
