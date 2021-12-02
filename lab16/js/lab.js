// Summary. To understand how to work with apis
// @link   https://amirmadethis.github.io/Art101/lab16/
// @file   /lab16
// @author Amirarsalan.
// @since  11.29.2021

$("#bt").click(callAjax);

var myUrl = "https://xkcd.com/info.0.json";

function callAjax(){
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: myUrl,
      // The data to send (will be converted to a query string)
      //data: {
              // here is where any data required by the api
              //   goes (check the api docs)
              //id: 123,
              //api_key: "blahblahblah",
      //      },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log("Success: ", data);

          var comicObj = data;

          var titleTxt = "Title: " +comicObj.title + "<br>";
          var imgTag = "<img src=" + comicObj.img + ">";
          var altTxt = comicObj.alt + "<br>";

          $("#output").append(titleTxt);
          $("#imag").append(imgTag);
          $("#output").append(altTxt);
      },
      // What we do if the api call fails
      error: function (request, error) {
          // do stuff
          console.log(request, error);
      }
  })
}
