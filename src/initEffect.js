export const effects = [];

export default function initEffect({ label, storageKey, defaultEnabled, activate, revert }) {
    effects.push({ 
        enabled: defaultEnabled,
        label, 
        storageKey, 
        activate, 
        revert
    });
}