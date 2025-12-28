import Effect from "@effects/Effect";

export default new Effect({
    id: "unmuteRandomMediaEffect",
    label: "Unmute Random Media",
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