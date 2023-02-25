export default {
    name: "Half Playback Speed",
    storageKey: "halfPlaybackSpeedEffect",
    
    revert: () => { 
        const allMedia = document.querySelectorAll("video, audio");

        allMedia.forEach(media => {
            if (!media) return;
            media.preservesPitch = true;
            media.playbackRate = 1;
        });
    },

    activate: () => { 
        const allMedia = document.querySelectorAll("video, audio");

        allMedia.forEach(media => {
            if (!media) return;
            media.preservesPitch = false;
            media.playbackRate = 0.5;
        });
    }
}