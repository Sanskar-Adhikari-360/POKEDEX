function playMusic() {
    const dropdown = document.getElementById("musicDropdown");
    const selectedMusic = dropdown.value;
    const audio = document.getElementById("backgroundMusic");

    if (selectedMusic) {
        audio.src = selectedMusic;
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}