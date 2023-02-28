export type Effect = {
    label: string,
    storageKey: string,
    enabled?: boolean,
    defaultEnabled?: boolean,
    activate: () => void,
    revert: () => void
}

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