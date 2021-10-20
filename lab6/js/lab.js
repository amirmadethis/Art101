// Summary. To understand arrays and objects
// @link   https://amirmadethis.github.io/Art101/lab6/
// @file   /lab6
// @author Amirarsalan.
// @since  10.20.2021

// Declare an array myTransport that lists all of the forms of transportation you use to get around.

myTransport = ["Walk", " Ride", " Fly", " Vespa"];

// Declare an object myMainRide

myMainRide = {
  make: "Vespa",
  model: "GTS 300 Super",
  year: 2021,
  color: "Deep Emerald",
  name: "Haven't named it yet :("
}

// Output

document.writeln("Types of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
