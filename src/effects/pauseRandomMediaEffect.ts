import Effect from "../Effect";

new Effect({
    label: "Pause Random Media",
    id: "pauseRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
    
    if (!randomMedia) return;

    randomMedia.pause();
}

function revert() {}