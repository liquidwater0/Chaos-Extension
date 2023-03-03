import { TEffect } from "./types";

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
        this.#enabled = defaultEnabled;
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

    activate() {
        this.#activate();
    }

    revert() {
        this.#revert();
    }
}