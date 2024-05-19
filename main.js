function topMessage(){
    alert("Hey!!! " + "Happy Birthday");
    alert("swipe right to slide.")
}
// Add event listener for video mute/unmute
// Add event listener for video mute/unmute
document.addEventListener("DOMContentLoaded", function () {
    let videoElement = document.querySelector('video');
    let muteIcon = document.getElementById('muteIcon');

    if (videoElement && muteIcon) {
        muteIcon.addEventListener('click', () => {
            videoElement.muted = !videoElement.muted;
            muteIcon.querySelector('img').src = videoElement.muted ? 'images/mute_icon.png' : 'images/unmute_icon.png';
        });
    }
});
