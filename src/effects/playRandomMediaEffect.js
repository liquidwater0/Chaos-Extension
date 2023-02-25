export default {
    name: "Play Random Media",
    storageKey: "playRandomMediaEffect",
    
    revert: () => {},
    activate: () => {
        const allMedia = document.querySelectorAll("audio, video");
        const randomMedia = allMedia[Math.floor(Math.random() * allMedia.length)];
        
        if (randomMedia) randomMedia.play(); 
    }
}