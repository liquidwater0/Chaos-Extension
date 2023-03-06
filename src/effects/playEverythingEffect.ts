import Effect from "../Effect";

new Effect({
    label: "Play Everything",
    id: "playEverythingEffect",
    defaultEnabled: true,
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