import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChaosEffects } from '../../context/EffectsContext';
import Timer from './components/Timer';

export default function ChaosUI() {
    const { activeEffect } = useChaosEffects();

    useEffect(() => {
        document.documentElement.setAttribute("data-extension", "chaosExtension");
    }, []);

    return (
        <div 
            id="chaosUI"
            data-extension="chaosExtension"
            data-effect-theme={activeEffect.id}
        >
            <Timer/>
            
            {
                activeEffect.label !== "" && 
                <div className="active-effect ui-blur">{ activeEffect.label }</div>
            }
        </div>
    );
}