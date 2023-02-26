import initEffect from "../initEffect";

initEffect({
    effectName: "pauseEverything",
    label: "Pause Everything",
    storageKey: "pauseEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.pause();
    });
}

function revert() {}