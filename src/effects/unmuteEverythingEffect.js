export default {
    name: "Unmute Everything",
    storageKey: "unmuteEverythingEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        allMedia.forEach(media => {
            if (!media) return;
            media.muted = false;
        });
    }
}