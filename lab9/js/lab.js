// Summary. To understand how to access different DOM elements
// @link   https://amirmadethis.github.io/Art101/lab9/
// @file   /lab9
// @author Amirarsalan.
// @since  10.3.2021

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
new1El.id = "new-one";

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Heyyy";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
new2El.id = "new-two";

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Nayyy";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = "Maroon";
new1El.style.fontSize = "20px";
new2El.style.color = "Navy";
new2El.style.fontSize = "20px";
