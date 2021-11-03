// Summary. To understand functions
// @link   https://amirmadethis.github.io/Art101/lab6/
// @file   /lab7
// @author Amirarsalan.
// @since  10.23.2021

// Create a new function in your file, call it what you like, but choose wisely.
function nameDisplay(){

  // In the function, declare a variable userName and use window.prompt()
  // to get the user's name from the user.
  var userName = window.prompt("Hi, please tell me your name so I can fix it.");

  // Split string using split method()
  // Sort the letters of the user's name and return those from the function.
  // Make sure your function uses return to return the results.
  return(userName.split('').sort().join(''));
}

// Outside of the function, call the function and output the results with
// document.writeln() to neatly output the user's sorted name.
// Strings print nicely on your webpage, so you don't have to use
// JSON.stringify() this time.
document.writeln("Oh hey, I've fixed your name: ", nameDisplay(), "</br>");
