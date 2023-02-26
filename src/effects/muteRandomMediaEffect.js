import initEffect from "../initEffect";

initEffect({
    label: "Mute Random Media",
    storageKey: "muteRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

    if (!randomMedia) return;

    randomMedia.muted = true; 
}

function revert() {}