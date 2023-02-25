export default {
    name: "Pause Random Media",
    storageKey: "pauseRandomMediaEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
        
        if (randomMedia) randomMedia.pause(); 
    }
}