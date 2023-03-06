import React, { useState, useContext, ReactNode } from "react";
import "../effects/index";
import { effects } from "../Effect";

type EffectsContextType = {
    effects: typeof effects,
    effectTheme: string;
    activeEffect: string,
    newEffect: () => void
}

const EffectsContext = React.createContext<EffectsContextType>(null);

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }: { children: ReactNode }) {
    const [activeEffect, setActiveEffect] = useState<string>("");
    const [effectTheme, setEffectTheme] = useState<string>("");

    function newEffect() {
        effects.forEach(effect => effect.revert());

        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        if (!randomEffect.theme) setEffectTheme("");

        if (!randomEffect) {
            setActiveEffect("");
            return;
        }
        
        setActiveEffect(randomEffect.label);
        setEffectTheme(randomEffect.theme);
        
        randomEffect.activate();
    }

    return(
        <EffectsContext.Provider value={{ effects, effectTheme, activeEffect, newEffect }}>
            { children }
        </EffectsContext.Provider>
    );
}