export default {
    name: "Unmute Random Media",
    storageKey: "unmuteRandomMediaEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

        if (randomMedia) randomMedia.muted = false; 
    }
}