import getEnabled from "@effects/getEnabled";
import { DEFAULT_EFFECT_ENABLED } from "@/constants/options";
import { effects, enabledEffects } from "@effects/index";
import type { Tag } from "@/constants/effects";

export interface IEffect {
    id: string,
    enabled?: boolean,
    durationMs?: number,
    isTimed?: boolean,
    label: string,
    tags?: Tag[],
    activate: () => void,
    revert: () => void
}

export interface IEffectOption extends Pick<IEffect, "id" | "label" | "enabled"> {}

export type EffectOptionObjectWithoutFuncs = { 
    [Key in IEffectOption["id"]]: IEffectOption 
}

export default class Effect {
    #id: IEffect["id"];
    #enabled: IEffect["enabled"];
    #durationMs: IEffect["durationMs"];
    #label: IEffect["label"];
    #tags: IEffect["tags"];
    #activate: IEffect["activate"];
    #revert: IEffect["revert"];

    constructor(props: IEffect) {
        this.#id = props.id;
        this.#enabled = DEFAULT_EFFECT_ENABLED;
        this.#durationMs = props.durationMs;
        this.#label = props.label;
        this.#tags = props.tags;
        this.#activate = props.activate;
        this.#revert = props.revert;
        
        getEnabled(this.#id)
            .then(enabled => this.#enabled = enabled)
            .then(() => {
                effects.push(this);
                if (this.#enabled) enabledEffects.push(this);
            });
    }

    get id() {
        return this.#id;
    }

    get enabled() {
        return this.#enabled;
    }

    get durationMs() {
        return this.#durationMs;
    }

    get isTimed() {
        return this.#durationMs !== undefined;
    }

    get label() {
        return this.#label;
    }

    get tags() {
        return this.#tags;
    }

    set enabled(value: IEffect["enabled"]) {
        this.#enabled = value;
    }

    activate() {
        this.#activate();
    }

    revert() {
        this.#revert();
    }
}