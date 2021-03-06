// Summary. To understand how conditional operators work
// @link   https://amirmadethis.github.io/Art101/lab12/
// @file   /lab12
// @author Amirarsalan.
// @since  11.9.2021

// Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)
function sortingHat(str){
  // counts the letters in str and assigns it to a variable length
  var len = str.length;
  var mod = len % 4;

  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  // mod will now be a value between 0 and 3
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin,
  // and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

// Create an click listener attached to #button

$("#button").click(function(){
  // that gets the value of #input and assigns it to a variable name
  var name = $("#input").val();

  // runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);

  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $("#output").append("<p> The Sorting Hat has sorted you into " + house + ".</p>");
});
