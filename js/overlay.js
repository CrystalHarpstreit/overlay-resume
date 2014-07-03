// Creating a function to be used as an element later
var $ = function(el) {
  return document.querySelector(el);
};

var btn = $('#btn');
var overlay = $(".overlay");
var wrapper = $('.resume-wrapper');

btn.addEventListener("click", function(e) {
  e.preventDefault();

  var input = $("input");
  var pass = input.value;
  var correctPass = "Eddy!";
  var removeError = function() {
    input.className = "password";
  };
    
  if(pass === correctPass) {
    console.log("Correct password entered.");
    // Adding a class hidden to the overlay
    overlay.className += " hidden";
    // Removing the class blur from the wrapper element
    wrapper.className = 'resume-wrapper';
  } else {
    console.log("Incorrect Password!");
    // Adding an error class to the input box
    input.className += " error";
    // Setting a timeout that will run the function removeError after 2seconds
    setTimeout(removeError, 2000);
  }
});
