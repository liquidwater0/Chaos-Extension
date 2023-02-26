import initEffect from "../initEffect";

initEffect({
    effectName: "pauseRandomMedia",
    label: "Pause Random Media",
    storageKey: "pauseRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
    
    if (!randomMedia) return;

    randomMedia.pause();
}

function revert() {}