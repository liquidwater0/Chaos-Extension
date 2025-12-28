import Effect from "@effects/Effect";

export default new Effect({
    id: "playEverythingEffect",
    label: "Play Everything",
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.play();
    });
}

function revert() {}