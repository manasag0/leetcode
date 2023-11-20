let nums = [1,2,3,4,5,6]
for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      console.log("This is the last element:", nums[i]);
    } else {
      // Perform operations on other elements
      console.log("Processing element:", nums[i]);
    }
  }
