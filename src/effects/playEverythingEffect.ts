import initEffect from "../initEffect";

initEffect({
    label: "Play Everything",
    storageKey: "playEverythingEffect",
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