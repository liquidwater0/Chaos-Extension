import initEffect from "../initEffect";

initEffect({
    label: "Double Playback Speed",
    storageKey: "doublePlaybackSpeedEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;

        media.preservesPitch = false;
        media.playbackRate = 2;
    });
}

function revert() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;
        
        media.preservesPitch = true;
        media.playbackRate = 1;
    });
}