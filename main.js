document.addEventListener("DOMContentLoaded", function(){
  var loadingAnimation = document.getElementsByClassName("loader")[0];
  var content = document.getElementsByClassName("content")[0];

  loadingAnimation.style.display = "block";

  setTimeout(function(){
    loadingAnimation.classList.add("hidden");
    setTimeout(function(){
      loadingAnimation.style.display = "none";
      content.style.opacity = "1";
    },1000)
  }, 4000);
});