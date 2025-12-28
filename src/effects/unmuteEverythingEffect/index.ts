import Effect from "@effects/Effect";

export default new Effect({
    id: "unmuteEverythingEffect",
    label: "Unmute Everything",
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.muted = false;
    });
}

function revert() {}