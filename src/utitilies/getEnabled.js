async function getMap() {
    const map = new Map();

    const allCheckedStates = new Promise((resolve, reject) => {
        chrome.storage.sync.get({ checkedStates: [] }, items => {
            resolve(items.checkedStates);
        });
    });

    [...await allCheckedStates].forEach(({ storageKey, checked }) => {
        map.set(storageKey, checked);
    });

    return map;
}

export default async function getEnabled(storageKey) {
    const checkedStatesMap = await getMap();

    if (!checkedStatesMap.has(storageKey)) {
        console.log(`Checked state of [${storageKey}] does not exist!`);
        return false;
    }

    return checkedStatesMap.get(storageKey);
}