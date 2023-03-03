import { TEffect } from "./types";
import getEnabled from "./utitilies/getEnabled";

export const effects: Omit<TEffect, "defaultEnabled">[] = [];

export default class Effect {
    #label;
    #storageKey;
    #enabled;
    #activate;
    #revert;

    constructor({ label, storageKey, defaultEnabled, activate, revert }: Omit<TEffect, "enabled">) {
        this.#label = label;
        this.#storageKey = storageKey;
        this.#enabled = this.#getEnabledState(defaultEnabled);
        this.#activate = activate;
        this.#revert = revert;

        effects.push(this);
    }

    get label() {
        return this.#label;
    }

    get storageKey() {
        return this.#storageKey;
    }

    get enabled() {
        return this.#enabled;
    }

    set enabled(value) {
        this.#enabled = value;
    }

    #getEnabledState(defaultValue: boolean) {
        let value = defaultValue;
        getEnabled(this.#storageKey).then(checkedState => value = checkedState);
        return value;
    }

    activate() {
        this.#activate();
    }

    revert() {
        this.#revert();
    }
}