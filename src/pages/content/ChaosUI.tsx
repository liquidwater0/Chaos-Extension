import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { initialTheme } from '../../initialOptions';
import { useChaosEffects } from './context/EffectsContext';
import Font from "../../global components/Font";
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
            
            <div className="active-effects ui-blur">
                <div className='label'>Effect Activated</div>
                <div className={`active-effect-text ${activeEffect === "" ? "hide-text" : ""}`}>
                    { activeEffect === "" ? "a" : activeEffect }
                </div>
            </div>
        </div>
    );
}