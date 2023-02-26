import initEffect from "../initEffect";

initEffect({
    effectName: "playRandomMedia",
    label: "Play Random Media",
    storageKey: "playRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
        
    if (!randomMedia) return;
    
    randomMedia.play(); 
}

function revert() {}