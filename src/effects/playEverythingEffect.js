import initEffect from "../initEffect";

initEffect({
    effectName: "playEverything",
    label: "Play Everything",
    storageKey: "playEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.play();
    });
}

function revert() {}