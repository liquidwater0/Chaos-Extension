import Effect from "@effects/Effect";

export default new Effect({
    id: "pauseEverythingEffect",
    label: "Pause Everything",
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.pause();
    });
}

function revert() {}