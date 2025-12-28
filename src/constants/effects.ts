export const REMOVE_OLD_EFFECTS_DELAY_MS = 10_000;
export const DEFAULT_EFFECT_DURATION_MS = 10_000;

export type Tag = typeof TAGS[keyof typeof TAGS];
export const TAGS = {
    TEXT: "TEXT",
    TEXT_SIZE: "TEXT_SIZE",
    TEXT_CASE: "TEXT_CASE",
    TEXT_SELECTION: "TEXT_SELECTION",
    FONT: "FONT",
    OVERLAY: "OVERLAY",
    CURSOR: "CURSOR",
    SCROLLBAR: "SCROLLBAR",
    PLAYBACK_SPEED: "PLAYBACK_SPEED",
    SIZE: "SIZE",
    PAGE: "PAGE",
    IMAGES: "IMAGES"
} as const;