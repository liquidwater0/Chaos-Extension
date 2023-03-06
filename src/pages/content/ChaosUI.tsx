import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { initialTheme } from '../../initialOptions';
import { useChaosEffects } from '../../context/EffectsContext';
import Font from "../../components/Font";
import Timer from './components/Timer';

export default function ChaosUI() {
    const [theme] = useChromeStorageSync("theme", initialTheme);
    const { activeEffect } = useChaosEffects();

    useEffect(() => {
        document.documentElement.setAttribute("data-extension", "chaosExtension");
    }, []);

    return (
        <div data-theme={theme}>
            <Font/>
            <Timer/>
            
            {
                activeEffect !== "" && 
                <div className="active-effect ui-blur">{ activeEffect }</div>
            }
        </div>
    );
}