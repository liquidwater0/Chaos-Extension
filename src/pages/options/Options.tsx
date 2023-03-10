import React, { useEffect, useState } from 'react';
import "./scss/options.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { initialTheme } from '../../initialOptions';
import { dark, light } from "../../themes";
import Section from "./components/sections/Section";
import EffectsSection from "./components/sections/EffectsSection";
import OptionsSection from "./components/sections/OptionsSection";
import KeyboardKey from './components/KeyboardKey';
import Footer from "./components/Footer"

const manifest = chrome.runtime.getManifest();

export default function OptionsPage() {
    const [theme, setTheme] = useChromeStorageSync("theme", initialTheme);
    const [saveToggle, setSaveToggle] = useState<boolean>(true); //This is for saving options.

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeProvider theme={ theme === "dark" ? dark : light }>
            <CssBaseline/>

            <header className='header'>
                <div className="key-combination-text" aria-label='shift + p to pause'>
                    <KeyboardKey value="Shift"/>
                    <span>+</span>
                    <KeyboardKey value="P"/>
                    <span>to Pause</span>
                </div>
            </header>

            <main>
                <Section text="Effects">
                    <EffectsSection saveToggle={saveToggle}/>
                </Section>

                <Section text="Options">
                    <OptionsSection saveToggle={saveToggle}/>
                </Section>
            </main>

            {/* Apparently mui can't find the custom footer background color when footer is here directly??? */}
            <Footer 
                version={manifest.version}
                theme={theme} 
                saveToggle={saveToggle}
                setTheme={setTheme} 
                setSaveToggle={setSaveToggle}
            />
        </ThemeProvider>
    );
}