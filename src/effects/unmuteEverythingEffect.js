import initEffect from "../initEffect";

initEffect({
    effectName: "unmuteEverything",
    label: "Unmute Everything",
    storageKey: "unmuteEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.muted = false;
    });
}

function revert() {}