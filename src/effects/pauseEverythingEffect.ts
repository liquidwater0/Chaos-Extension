import initEffect from "../initEffect";

initEffect({
    label: "Pause Everything",
    storageKey: "pauseEverythingEffect",
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