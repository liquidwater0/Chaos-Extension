export default {
    name: "Mute Everything",
    storageKey: "muteEverythingEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("video, audio");
        allMedia.forEach(media => {
            if (!media) return;
            media.muted = true;
        });
    }
}