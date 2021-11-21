// Summary. To understand how loops work in general
// @link   https://amirmadethis.github.io/Art101/lab13/
// @file   /lab13
// @author Amirarsalan.
// @since  11.20.2021


// Create a "FizzBuzz" function similar to how we did in class.
function FizzBuzz(num)
{
  for(var i = 0; i <= num; i++)
  {
    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    var outputStr = "";
    outputStr += i + ": ";

    // If the number is a multiple of 3, if should print "Fizz!"
    if(i % 3 == 0)
    {
      outputStr += "Fizz";
    }

    // If the number is a multiple of 5, it should print "Buzz!"
    if(i % 5 == 0)
    {
      outputStr += "Buzz";
    }

    // If the number is a multiple of 7, it should print "Boom!"
    if(i % 7 == 0)
    {
      outputStr += "Boom";
    }

    outputStr += "!<br>";

    $("#output").append(outputStr);
  }
}

$("#button").click(function(){
  // that gets the value of #input and assigns it to a variable name
  var name = $("#input").val();

  FizzBuzz(name);
});
