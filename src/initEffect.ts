import { Effect } from "./types";

export const effects: Omit<Effect, "defaultEnabled">[] = [];

export default function initEffect({ label, storageKey, defaultEnabled, activate, revert }: Omit<Effect, "enabled">) {
    effects.push({ 
        enabled: defaultEnabled,
        label, 
        storageKey, 
        activate, 
        revert
    });
}