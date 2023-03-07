import { TEffect } from "./types";
import getEnabled from "./utitilies/getEnabled";

export const effects: Omit<TEffect, "defaultEnabled">[] = [];

export default class Effect {
    #label;
    #id;
    #enabled;
    #activate;
    #revert;

    constructor({ label, id, defaultEnabled, activate, revert }: Omit<TEffect, "enabled">) {
        this.#label = label;
        this.#id = id;
        this.#enabled = defaultEnabled;
        this.#activate = activate;
        this.#revert = revert;

        getEnabled(this.#id).then(checkedState => this.#enabled = checkedState);

        effects.push(this);
    }

    get label() {
        return this.#label;
    }

    get id() {
        return this.#id;
    }

    get enabled() {
        return this.#enabled;
    }

    activate() {
        this.#activate();
    }

    revert() {
        this.#revert();
    }
}