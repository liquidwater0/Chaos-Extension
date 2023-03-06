import Effect from "../../Effect";

new Effect({
    label: "Pause Everything",
    id: "pauseEverythingEffect",
    defaultEnabled: true,
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