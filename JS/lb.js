
    const audio = new Audio();
    audio.src = "./mp3/click-button-131479.mp3";

let main = document.querySelector('.top');
let main2 = document.querySelector('.player');
let main3 = document.querySelector('.shop');
let main4 = document.querySelector('.ach');
let audioArr = document.getElementsByTagName('audio');

main.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
});

main2.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
});

main3.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
});

main4.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
});


const exploreDiv = document.querySelector('.top');


exploreDiv.addEventListener('click', function() {
    window.location.href = 'M.html';
    audio.play();
});

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key === 'b') {
        window.location.href = 'main.html';
    }
});






