import React, { useState, useContext, ReactNode } from "react";
import "../effects/index";
import { effects } from "../Effect";

type EffectsContextType = {
    effects: typeof effects,
    activeEffectLabel: string,
    activeEffectId: string,
    newEffect: () => void
}

const EffectsContext = React.createContext<EffectsContextType>(null);

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }: { children: ReactNode }) {
    const [activeEffectLabel, setActiveEffectLabel] = useState<string>("");
    const [activeEffectId, setActiveEffectId] = useState<string>("");

    function newEffect() {
        effects.forEach(effect => effect.revert());

        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        if (!randomEffect) {
            setActiveEffectLabel("");
            setActiveEffectId("");
            return;
        }

        setActiveEffectLabel(randomEffect.label);
        setActiveEffectId(randomEffect.id);

        randomEffect.activate();
    }

    return(
        <EffectsContext.Provider value={{ effects, activeEffectLabel, activeEffectId, newEffect }}>
            { children }
        </EffectsContext.Provider>
    );
}