import Effect from "@effects/Effect";

export default new Effect({
    id: "muteEverythingEffect",
    label: "Mute Everything",
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