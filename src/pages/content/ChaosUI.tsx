import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { initialTheme } from '../../initialOptions';
import { useChaosEffects } from '../../context/EffectsContext';
import Font from "../../components/Font";
import Timer from './components/Timer';

export default function ChaosUI() {
    const [theme] = useChromeStorageSync("theme", initialTheme);
    const { activeEffect, effectTheme } = useChaosEffects();

    useEffect(() => {
        document.documentElement.setAttribute("data-extension", "chaosExtension");
    }, []);

    return (
        <div 
            id="chaosUI"
            data-extension="chaosExtension"
            data-theme={theme} 
            data-effect-theme={effectTheme}
        >
            <Font/>
            <Timer/>
            
            {
                activeEffect !== "" && 
                <div className="active-effect ui-blur">{ activeEffect }</div>
            }
        </div>
    );
}