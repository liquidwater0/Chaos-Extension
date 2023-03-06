import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChaosEffects } from '../../context/EffectsContext';
import Font from "../../components/Font";
import Timer from './components/Timer';

export default function ChaosUI() {
    const { activeEffectLabel, activeEffectId } = useChaosEffects();

    useEffect(() => {
        document.documentElement.setAttribute("data-extension", "chaosExtension");
    }, []);

    return (
        <div 
            id="chaosUI"
            data-extension="chaosExtension"
            data-effect-theme={activeEffectId}
        >
            <Font/>
            <Timer/>
            
            {
                activeEffectLabel !== "" && 
                <div className="active-effect ui-blur">{ activeEffectLabel }</div>
            }
        </div>
    );
}