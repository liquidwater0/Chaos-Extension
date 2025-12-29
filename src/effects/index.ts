import type { IEffect } from "@effects/Effect";
import { EFFECTS_STORAGE_KEY } from "@/constants/storage";

export const effects: IEffect[] = [];
export const enabledEffects: IEffect[] = [];

export async function initEffects() {
    const modules = import.meta.glob<{ default: IEffect }>(
        '@effects/*/index.ts',
        { eager: true }
    );
    const effectInstances = Object.values(modules).map(module => module.default);
    const storedEffects = await chrome.storage.sync.get({ [EFFECTS_STORAGE_KEY]: {} });
    const existing = storedEffects[EFFECTS_STORAGE_KEY] ?? {};
    const mergedEffects: any = { ...existing };

    const effectIds = [...effectInstances].map(effect => effect.id);
    const effectStorageKeys = Object.entries(mergedEffects).map(([key, _]) => key);

    effectStorageKeys.forEach(effectStorageKey => {
        const effectExists = effectIds.includes(effectStorageKey);

        if (!effectExists) {
            delete mergedEffects[effectStorageKey];
        }
    });

    effectInstances.forEach(({ id, label, enabled }) => {
        const isInStorage = mergedEffects[id] !== undefined;

        if (!isInStorage) {
            mergedEffects[id] = { id, label, enabled };
        }
    });

    await chrome.storage.sync.set({ [EFFECTS_STORAGE_KEY]: mergedEffects });
}