import getEnabled from "./utitilies/getEnabled";

export const effectsMap = new Map([]);

export default function initEffect({ effectName, label, storageKey, defaultEnabled, activate, revert }) {
    getEnabled(storageKey).then(checkedState => {
        // console.log(checkedState, defaultEnabled);
        effectsMap.set(
            effectName, 
            { 
                enabled: checkedState || defaultEnabled,
                label, 
                storageKey, 
                activate, 
                revert
            }
        );
    });
}