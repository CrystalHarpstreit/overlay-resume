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
    overlay.className += " hidden";
    wrapper.className = 'resume-wrapper';
  } else {
    console.log("Incorrect Password!");
    input.className += " error";
    setTimeout(removeError, 2000);
  }
});
