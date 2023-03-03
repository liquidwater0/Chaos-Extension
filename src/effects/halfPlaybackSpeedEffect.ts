import Effect from "../Effect";

new Effect({
    label: "Half Playback Speed",
    storageKey: "halfPlaybackSpeedEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;

        media.preservesPitch = false;
        media.playbackRate = 0.5;
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