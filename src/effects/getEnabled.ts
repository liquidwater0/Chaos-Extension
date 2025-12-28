import { IEffect, IEffectOption } from "./Effect";
import { EFFECTS_STORAGE_KEY } from "@/constants/storage";
import { DEFAULT_EFFECT_ENABLED } from "@/constants/options";

async function getEffectsObject(): Promise<{ [Key in IEffectOption["id"]]: IEffectOption }> {
    return new Promise(resolve => {
        chrome.storage.sync.get({ [EFFECTS_STORAGE_KEY]: {} }, items => {
            resolve(items[EFFECTS_STORAGE_KEY] as { [Key in IEffectOption["id"]]: IEffectOption });
        });
    });
}

export default async function getEnabled(id: IEffect["id"]) {
    const effectsObject = await getEffectsObject();
    
    if (!effectsObject[id]) {
        return DEFAULT_EFFECT_ENABLED;
    }

    return effectsObject[id].enabled;
}