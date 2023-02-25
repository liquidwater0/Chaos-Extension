export default {
    name: "Play Everything",
    storageKey: "playEverythingEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        allMedia.forEach(media => {
            if (!media) return;
            media.play();
        });
    }
}