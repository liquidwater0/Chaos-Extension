import { IEffect, EffectOptionObjectWithoutFuncs } from "./Effect";
import { EFFECTS_STORAGE_KEY } from "@/constants/storage";
import { DEFAULT_EFFECT_ENABLED } from "@/constants/options";

export default async function getEnabled(id: IEffect["id"]) {
    const result = await chrome.storage.sync.get({ [EFFECTS_STORAGE_KEY]: {} });
    const effectsObject = result[EFFECTS_STORAGE_KEY] as EffectOptionObjectWithoutFuncs;
    
    if (!effectsObject[id]) {
        return DEFAULT_EFFECT_ENABLED;
    }

    return effectsObject[id].enabled;
}