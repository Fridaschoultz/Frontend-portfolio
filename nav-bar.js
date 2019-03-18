/* Ändra css för navbaren när den går över 470 px från toppen */
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
    document.getElementById("nav").className = "nav-alt";
    document.getElementById("logo").className = "logo-alt";
    document.getElementById("logo1").className = "logo1-alt";
  } else {
    document.getElementById("nav").className = "nav";
    document.getElementById("logo").className = "logo";
    document.getElementById("logo1").className = "logo1";
  }
}