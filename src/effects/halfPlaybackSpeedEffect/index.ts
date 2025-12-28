import Effect from "@effects/Effect";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "halfPlaybackSpeedEffect",
    label: "Half Playback Speed",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PLAYBACK_SPEED],
    activate,
    revert
});

function activate() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;

        media.preservesPitch = false;
        media.playbackRate = 0.5;
    });
}

function revert() {
    const allMedia = document.querySelectorAll<HTMLAudioElement | HTMLVideoElement>("video, audio");

    allMedia.forEach(media => {
        if (!media) return;
        
        media.preservesPitch = true;
        media.playbackRate = 1;
    });
}