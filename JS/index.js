// Function to handle the animation sequence
function startBlinkAnimation() {
    // Start the blink animation
    document.getElementById('blink').style.animation = 'myBlink 2s ease 0s infinite';
}

// Start the initial animation (myAnima)
document.addEventListener("DOMContentLoaded", function() {
    // Start myAnima animation
    document.getElementById('blink').style.animation = 'myAnima 2s ease 0s forwards';

    // Start the blink animation after myAnima completes
    setTimeout(startBlinkAnimation, 2000); // เริ่ม myBlink หลังจาก myAnima เสร็จสิ้น 2 วินาที
});
document.addEventListener("keydown", function(event) {
    // Once a key is pressed, hide the message
    document.getElementById('heading').style.display = 'none';
    document.getElementById('blink').style.display = 'none';
  });
  

