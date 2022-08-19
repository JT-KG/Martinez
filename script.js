//----------------------------------------------------------------------------//
// header drop-down menu
function myFunctionOne() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top") {
    x.className += " responsive";
  } else {
    x.className = "top";
  }
}


//----------------------------------------------------------------------------//
// Sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunctionTwo()};
// Get the header
var header = document.getElementById("myTopnav");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionTwo() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//----------------------------------------------------------------------------//


