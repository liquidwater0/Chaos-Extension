import React, { useState, useContext, ReactNode } from "react";
import "../effects/index";
import { effects } from "../Effect";
import getEnabled from "../utitilies/getEnabled";

type EffectsContextType = {
    effects: typeof effects,
    activeEffect: { label: string, id: string },
    activateNewEffect: () => void
}

const EffectsContext = React.createContext<EffectsContextType>(null);

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }: { children: ReactNode }) {
    const [activeEffect, setActiveEffect] = useState<{ label: string, id: string }>({ label: "", id: "" });

    function updateEnabledStates() {
        return Promise.all(
            effects.map(async effect => {
                return getEnabled(effect.id).then(checkedState => effect.enabled = checkedState);
            })
        );
    }

    async function activateNewEffect() {
        effects.forEach(effect => effect.revert());

        await updateEnabledStates();
        
        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        if (!randomEffect) {
            setActiveEffect({ label: "", id: "" });
            return;
        }

        setActiveEffect({ label: randomEffect.label, id: randomEffect.id });
        randomEffect.activate();
    }

    return(
        <EffectsContext.Provider value={{ effects, activeEffect, activateNewEffect }}>
            { children }
        </EffectsContext.Provider>
    );
}