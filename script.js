// Selection of HTML objects
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const horzontanlLine =document.querySelector(".line-2")
const daigonalOne =document.querySelector(".line-1")
const daigonalTwo =document.querySelector(".line-3")


// Defining a function
function toggleNav() {
  nav.classList.toggle("nav-active");
  horzontanlLine.classList.toggle("horizontal-line")
  daigonalOne.classList.toggle("diagonal-line-1");
  daigonalTwo.classList.toggle("diagonal-line-2")
  
}

// Calling the function after click event occurs
burger.addEventListener("click", function() {
  toggleNav();
 
});
