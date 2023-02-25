export default {
    name: "Pause Everything",
    storageKey: "pauseEverythingEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        allMedia.forEach(media => {
            if (!media) return;
            media.pause();
        });
    }
}