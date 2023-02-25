import React, { useEffect, useState } from 'react';
import "./scss/options.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { initialTheme } from '../../initialOptions';
import { dark, light } from "../../themes";
import Font from "../../global components/Font";
import Header from "./components/Header";
import Section from "./components/Section";
import EffectsSection from "./components/EffectsSection";
import OptionsSection from "./components/OptionsSection";
import Footer from './components/Footer';

const manifest = chrome.runtime.getManifest();

export default function OptionsPage() {
    const [theme, setTheme] = useChromeStorageSync("theme", initialTheme);
    const [saveToggle, setSaveToggle] = useState(true); //This is for saving options.

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeProvider theme={ theme === "dark" ? dark : light }>
            <CssBaseline/>
            <Font/>

            <Header/>

            <Section text="Effects">
                <EffectsSection saveToggle={saveToggle}/>
            </Section>

            <Section text="Options">
                <OptionsSection saveToggle={saveToggle}/>
            </Section>

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