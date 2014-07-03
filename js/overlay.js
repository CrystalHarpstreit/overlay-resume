// Creating a function $ for element selection 
var $ = function(el) {
  return document.querySelector(el);
};

var btn = $('#btn');
var overlay = $(".overlay");
var wrapper = $('.resume-wrapper');
// Adding an even listener for a click on the button element 
btn.addEventListener("click", function(e) {
  e.preventDefault();

  var input = $("input");
  var pass = input.value;
  // Defining the correct password
  var correctPass = "Eddy!";
  var removeError = function() {
    input.className = "password";
  };
  // Using equality comparision   
  if(pass === correctPass) {
    console.log("Correct password entered.");
    // Adding a classname hidden to the overlay element
    overlay.className += " hidden";
    // Removing the class blur from <div class="resume-wrapper blur"></div>
    wrapper.className = 'resume-wrapper';
  } else {
    console.log("Incorrect Password!");
    // Adding a classname error to the input box 
    input.className += " error";
    // Setting a time out in order to remove the red border after 2 seconds
    setTimeout(removeError, 2000);
  }
});
