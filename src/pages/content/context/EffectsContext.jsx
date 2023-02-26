import React, { useState, useContext } from "react";
import { useChromeStorageSync } from 'use-chrome-storage';

const EffectsContext = React.createContext();

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }) {
    const [activeEffect, setActiveEffect] = useState("");
    const [effects] = useChromeStorageSync("effects", []);

    function newEffect() {
        console.log(effects);
        effects.forEach(effect => effect.revert());

        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        if (!randomEffect) {
            setActiveEffect("");
            return;
        }
        
        setActiveEffect(randomEffect.name);
        randomEffect.activate();
    }

    return(
        <EffectsContext.Provider value={{ effects, activeEffect, newEffect }}>
            { children }
        </EffectsContext.Provider>
    );
}