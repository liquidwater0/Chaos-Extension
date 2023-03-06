import { EffectOption } from "../types";

async function getMap() {
    const map: Map<string, boolean> = new Map();

    const allCheckedStates: Promise<EffectOption[]> = new Promise((resolve, reject) => {
        chrome.storage.sync.get({ checkedStates: [] }, items => {
            resolve(items.checkedStates);
        });
    });

    [...await allCheckedStates].forEach(({ id, enabled }) => {
        map.set(id, enabled);
    });

    return map;
}

export default async function getEnabled(id: string) {
    const checkedStatesMap = await getMap();

    if (!checkedStatesMap.has(id)) {
        console.log(`Checked state of [${id}] does not exist!`);
        return false;
    }

    return checkedStatesMap.get(id);
}