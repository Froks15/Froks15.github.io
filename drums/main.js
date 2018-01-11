window.addEventListener('keydown', playSound);

function playSound(e) {
    var audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    if(!audio) { return };

    audio.currentTime = 0;
    audio.play();
}