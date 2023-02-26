export const effectsMap = new Map([]);

export default function initEffect({ effectName, label, storageKey, defaultEnabled, activate, revert }) {
    effectsMap.set(
        effectName, 
        { 
            enabled: defaultEnabled,
            label, 
            storageKey, 
            activate, 
            revert
        }
    );
}