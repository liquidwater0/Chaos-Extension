import type { IEffect, EffectOptionObjectWithoutFuncs } from "@effects/Effect";
import { EFFECTS_STORAGE_KEY } from "@/constants/storage";

export const effects: IEffect[] = [];
export const enabledEffects: IEffect[] = [];

export function initEffects() {
    const modules = import.meta.glob<{ default: IEffect }>(
        '@effects/*/index.ts',
        { eager: true }
    );
    const effectInstances = Object.values(modules).map(module => module.default);
    const effectsObjectWithoutFuncs: EffectOptionObjectWithoutFuncs = {};

    effectInstances.forEach(({ id, label, enabled }) => {
        effectsObjectWithoutFuncs[id] = { id, label, enabled };
    });

    chrome.storage.sync.set({ [EFFECTS_STORAGE_KEY]: effectsObjectWithoutFuncs });
}