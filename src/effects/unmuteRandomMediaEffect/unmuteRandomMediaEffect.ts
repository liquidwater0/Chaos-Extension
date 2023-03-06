import Effect from "../../Effect";

new Effect({
    label: "Unmute Random Media",
    id: "unmuteRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

    if (!randomMedia) return;
    
    randomMedia.muted = false;
}

function revert() {}