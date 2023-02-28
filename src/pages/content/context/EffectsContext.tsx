import React, { useState, useContext, ReactNode } from "react";
import { effects } from "../../../initEffect";
import { Effect } from "../../../types";

type EffectsContextType = {
    effects: Effect[],
    activeEffect: string,
    newEffect: () => void
}

const EffectsContext = React.createContext<EffectsContextType>(null);

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }: { children: ReactNode }) {
    const [activeEffect, setActiveEffect] = useState<string>("");

    function newEffect() {
        console.log(effects);

        effects.forEach(effect => effect.revert());

        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        if (!randomEffect) {
            setActiveEffect("");
            return;
        }
        
        setActiveEffect(randomEffect.label);
        randomEffect.activate();
    }

    return(
        <EffectsContext.Provider value={{ effects, activeEffect, newEffect }}>
            { children }
        </EffectsContext.Provider>
    );
}