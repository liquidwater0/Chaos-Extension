import initEffect from "../initEffect";

initEffect({
    effectName: "muteEverything",
    label: "Mute Everything",
    storageKey: "muteEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("video, audio");

    allMedia.forEach(media => {
        if (!media) return;
        media.muted = true;
    });
}

function revert() {}