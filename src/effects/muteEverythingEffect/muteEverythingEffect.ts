import Effect from "../../Effect";

new Effect({
    label: "Mute Everything",
    id: "muteEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;
        media.muted = true;
    });
}

function revert() {}