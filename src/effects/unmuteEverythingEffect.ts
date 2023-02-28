import initEffect from "../initEffect";

initEffect({
    label: "Unmute Everything",
    storageKey: "unmuteEverythingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("audio, video");

    allMedia.forEach(media => {
        if (!media) return;
        media.muted = false;
    });
}

function revert() {}