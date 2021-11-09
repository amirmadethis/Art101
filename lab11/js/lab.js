// Summary. To understand how to work with jQuery
// @link   https://amirmadethis.github.io/Art101/lab11/
// @file   /lab11
// @author Amirarsalan.
// @since  11.8.2021

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
var challengeEl = $("#challenges");
var problemsEl = $("#problems");
var resultsEl = $("#results");

// Create the button
// Give it a text label
// Add it to the section
challengeEl.html("<button id='challengeBt'> CHALLENGES");
problemsEl.html("<button id='problemsBt'> PROBLEMS");
resultsEl.html("<button id='resultsBt'> RESULTS");

// Add a click event to each button
$("#challengeBt").click(function(){alert("Don't press me! There is no way that anything challenges me bruh.");});
$("#problemsBt").click(function(){alert("NO PROBLEMOOOOOOOOO.");});
$("#resultsBt").click(function(){alert("NO RESULTS HEHEHE :)");});

// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
