import initEffect from "../initEffect";

initEffect({
    effectName: "unmuteRandomMedia",
    label: "Unmute Random Media",
    storageKey: "unmuteRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

    if (!randomMedia) return;
    
    randomMedia.muted = false;
}

function revert() {}