import { EffectOptions } from "../types";

async function getMap() {
    const map: Map<string, boolean> = new Map();

    const allCheckedStates: Promise<EffectOptions[]> = new Promise((resolve, reject) => {
        chrome.storage.sync.get({ checkedStates: [] }, items => {
            resolve(items.checkedStates);
        });
    });

    [...await allCheckedStates].forEach(({ storageKey, enabled }) => {
        map.set(storageKey, enabled);
    });

    return map;
}

export default async function getEnabled(storageKey: string) {
    const checkedStatesMap = await getMap();

    if (!checkedStatesMap.has(storageKey)) {
        console.log(`Checked state of [${storageKey}] does not exist!`);
        return false;
    }

    return checkedStatesMap.get(storageKey);
}