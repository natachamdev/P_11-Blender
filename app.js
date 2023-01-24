let active = false;

let blender = document.getElementById('blender');

let blenderSound = document.getElementById('blender-sound');

let blenderButtonSound = document.getElementById('blender-button-sound');

function controlBlender() {
    if (active == false) {
        active = true;
        soundBlender();
        blender.classList.add('active');
        
        
    } else {
        active = false
        soundBlender();
        blender.classList.remove('active');
        
    }
}

function soundBlender() {
    if (blenderSound.paused) {
        blenderButtonSound.play();
        blenderSound.play();

    } else {
        blenderButtonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;

    }
}
