// Summary. To understand call back functions
// @link   https://amirmadethis.github.io/Art101/lab8/
// @file   /lab8
// @author Amirarsalan.
// @since  10.23.2021

// Create an array of numbers and assign it to a variable.
numArray = [10, 99, 9, 7, 17, 25, -1, 25, 75, 69];

// Create a named function that will take a single parameter,
// do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function divByFive(x)
{
  return (x % 5 == 0);
}

// Test the function
console.log("Is 3 divisible by 5? ", divByFive(3));
console.log("Is 10 divisible by 5? ", divByFive(10));

// Display array
console.log("Here is the provided array: ", numArray);

// Check the array to see which ones are divisible by 5
var result = numArray.map(divByFive);

// Display the result
console.log("Here is the results array: ", result);

// Check the array to see all element divided by 5
var result = numArray.map(function(x){return x/5;});

// Display the result
console.log("Here is the results array: ", result);
