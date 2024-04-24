document.addEventListener("DOMContentLoaded", function() {
  var flashEffect = document.getElementById("flashEffect");
  flashEffect.classList.add("flash");
  
  var flashSound = document.getElementById("flashSound");
  flashSound.play(); 
  
  setTimeout(function() {
    flashEffect.classList.remove("flash");
    startCreditsScroll();
  }, 6000); 
});
