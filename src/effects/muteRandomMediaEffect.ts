import Effect from "../Effect";

new Effect({
    label: "Mute Random Media",
    id: "muteRandomMediaEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");
    const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

    if (!randomMedia) return;

    randomMedia.muted = true; 
}

function revert() {}