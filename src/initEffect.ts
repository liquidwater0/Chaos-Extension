import { Effect } from "./types";

export const effects: Effect[] = [];

export default function initEffect({ label, storageKey, defaultEnabled, activate, revert }: Effect) {
    effects.push({ 
        enabled: defaultEnabled,
        label, 
        storageKey, 
        activate, 
        revert
    });
}