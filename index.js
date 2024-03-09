function hasTargetSum(array, target) {
  const numSet = new Set(); 
  for (const num of array) {
    const complement = target - num; 
    if (numSet.has(complement)) {
      return true; 
    }
    numSet.add(num);
  }
  return false; 
}

/* 
  Write the Big O time complexity of your function here
 function is O(n), where n is the number of elements in the input array.
/* 
  Add your pseudocode here
Function hasTargetSum(array, target):
    Create an empty set called numSet

    For each number num in array:
        Calculate the complement as target - num

        If the complement exists in numSet:
            Return true, as a pair has been found

        Add num to numSet

    If no pair is found after iterating through the array:
        Return false

End Function

  */

/*
  Add written explanation of your solution here
1.Initialization, start by creating an empty set called numSet. This will be used to store the numbers encountered while iterating through the input array.

2.Iteration, through the Array We can iterate through each number num in the input array.

3.Calculating Complement, For each number num, we calculate its complement by subtracting num from the target sum. The complement represents the value that, when added to num, would result in the target sum.

4.Checking Complement Existence, We check whether the calculated complement exists in the numSet. If it does, it means we have found a pair of numbers whose sum equals the target. In this case, we return true.

5.Adding to Set, If the complement doesn't exist in numSet, we add the current number num to the set. This allows us to keep track of the numbers we have encountered so far.

6.Return False if No Pair Found, If we iterate through the entire array without finding a pair whose sum equals the target, we return false.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
