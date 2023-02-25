import React, { useEffect } from 'react';
import "./scss/content.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { initialTheme } from '../../initialOptions';
import Font from "../../global components/Font";
import Timer from './components/Timer';
import ActiveEffects from './components/ActiveEffects';

export default function ChaosUI() {
    const [theme] = useChromeStorageSync("theme", initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-extension", "chaosExtension");
    }, []);

    return (
        <div data-theme={theme}>
            <Font/>
            <Timer/>
            <ActiveEffects/>
        </div>
    );
}