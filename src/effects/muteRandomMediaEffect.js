export default {
    name: "Mute Random Media",
    storageKey: "muteRandomMediaEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];

        if (randomMedia) randomMedia.muted = true; 
    }
}