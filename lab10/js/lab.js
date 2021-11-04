// Summary. To understand how the user inut work
// @link   https://amirmadethis.github.io/Art101/lab10/
// @file   /lab10
// @author Amirarsalan.
// @since  11.3.2021

// Borrow the nameSort() function or my anagram() function from Lab 7.

// Create a new function in your file, call it what you like, but choose wisely.
function nameSort(userName){
  // Split string using split method()
  // Sort the letters of the user's name and return those from the function.
  // Make sure your function uses return to return the results.
  return(userName.split('').sort().join(''));
}

// Attach an event listener to your button that does the following:
var buttonEl = document.getElementById("my-button");

buttonEl.addEventListener('click', function() {
     // Gets the value of your input field
     var inputValue = document.getElementById('my-input');
     var name = inputValue.value;

     // Runs that value through your sort() or anagram() function and saves
     // the results
     var newName = nameSort(name);

     console.log("New name:", newName);

     // Replaces the html in <div id=output> with the results.
     var outputEl = document.getElementById("output");
     var outputStr = document.createElement("p");
     outputStr.innerHTML = "Your new sorted name is " + newName;
     outputEl.appendChild(outputStr);
   });
