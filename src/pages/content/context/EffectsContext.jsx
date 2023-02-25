import React, { useState, useContext } from "react";
import getEnabled from "../../../utitilies/getEnabled";

import bigTextEffect from "../../../effects/bigTextEffect";
import blackoutEffect from "../../../effects/blackoutEffect";
import blurryVisionEffect from "../../../effects/blurryVisionEffect";
import comicSansEffect from "../../../effects/comicSansEffect";
import designModeEffect from "../../../effects/designModeEffect";
import disableMouseInputEffect from "../../../effects/disableMouseInputEffect";
import disableScrollingEffect from "../../../effects/disableScrollingEffect";
import disableTextSelectionEffect from "../../../effects/disableTextSelectionEffect";
import doublePlaybackSpeedEffect from "../../../effects/doublePlaybackSpeedEffect";
import doubleSizeEffect from "../../../effects/doubleSizeEffect";
import emptyAllInputsEffect from "../../../effects/emptyAllInputsEffect";
import getAlertEffect from "../../../effects/getAlertEffect";
import halfPlaybackSpeedEffect from "../../../effects/halfPlaybackSpeedEffect";
import halfSizeEffect from "../../../effects/halfSizeEffect";
import hideImagesEffect from "../../../effects/hideImagesEffect";
import hideScrollbarsEffect from "../../../effects/hideScrollbarsEffect";
import hideTextSelectionEffect from "../../../effects/hideTextSelectionEffect";
import invertedColorsEffect from "../../../effects/invertedColorsEffect";
import invertedPageEffect from "../../../effects/invertedPageEffect";
import invisibleTextEffect from "../../../effects/invisibleTextEffect";
import lowercaseTextEffect from "../../../effects/lowercaseTextEffect";
import midasTouchEffect from "../../../effects/midasTouchEffect";
import muteEverythingEffect from "../../../effects/muteEverythingEffect";
import muteRandomMediaEffect from "../../../effects/muteRandomMediaEffect";
import noCSSEffect from "../../../effects/noCSSEffect";
import noCursorEffect from "../../../effects/noCursorEffect";
import nothingEffect from "../../../effects/nothingEffect";
import pauseEverythingEffect from "../../../effects/pauseEverythingEffect";
import pauseRandomMediaEffect from "../../../effects/pauseRandomMediaEffect";
import playEverythingEffect from "../../../effects/playEverythingEffect";
import playRandomMediaEffect from "../../../effects/playRandomMediaEffect";
import rainbowTextEffect from "../../../effects/rainbowTextEffect";
import randomImagesEffect from "../../../effects/randomImagesEffect";
import randomSelectionColorEffect from "../../../effects/randomSelectionColorEffect";
import randomTextColorEffect from "../../../effects/randomTextColorEffect";
import reloadPageEffect from "../../../effects/reloadPageEffect";
import rollEffect from "../../../effects/rollEffect";
import scrollToRandomElementEffect from "../../../effects/scrollToRandomElementEffect";
import scrollToTheTopEffect from "../../../effects/scrollToTheTopEffect";
import selectAllTextEffect from "../../../effects/selectAllTextEffect";
import sidewaysPageEffect from "../../../effects/sidewaysPageEffect";
import smallTextEffect from "../../../effects/smallTextEffect";
import spinningPageEffect from "../../../effects/spinningPageEffect";
import terminalifyEffect from "../../../effects/terminalifyEffect";
import unmuteEverythingEffect from "../../../effects/unmuteEverythingEffect";
import unmuteRandomMediaEffect from "../../../effects/unmuteRandomMediaEffect";
import unselectAllTextEffect from "../../../effects/unselectAllTextEffect";
import uppercaseTextEffect from "../../../effects/uppercaseTextEffect";
import upsideDownEffect from "../../../effects/upsideDownEffect";
import y1950sEffect from "../../../effects/y1950sEffect";
import vignetteEffect from "../../../effects/vignetteEffect";

const EffectsContext = React.createContext();

export function useChaosEffects() {
    return useContext(EffectsContext);
}

export default function EffectsProvider({ children }) {
    const [activeEffect, setActiveEffect] = useState("");
    const effects = [];

    class Effect {
        constructor(effect) {
            getEnabled(effect.storageKey)
                .then(checked => effects.push({ ...effect, enabled: checked }));
        }
    }

    new Effect(bigTextEffect);
    new Effect(blackoutEffect);
    new Effect(blurryVisionEffect);
    new Effect(comicSansEffect);
    new Effect(designModeEffect);
    new Effect(disableMouseInputEffect);
    new Effect(disableScrollingEffect);
    new Effect(disableTextSelectionEffect);
    new Effect(doublePlaybackSpeedEffect);
    new Effect(doubleSizeEffect);
    new Effect(emptyAllInputsEffect);
    new Effect(getAlertEffect);
    new Effect(halfPlaybackSpeedEffect);
    new Effect(halfSizeEffect);
    new Effect(hideImagesEffect);
    new Effect(hideScrollbarsEffect);
    new Effect(hideTextSelectionEffect);
    new Effect(invertedColorsEffect);
    new Effect(invertedPageEffect);
    new Effect(invisibleTextEffect);
    new Effect(lowercaseTextEffect);
    new Effect(midasTouchEffect);
    new Effect(muteEverythingEffect);
    new Effect(muteRandomMediaEffect);
    new Effect(noCSSEffect);
    new Effect(noCursorEffect);
    new Effect(nothingEffect);
    new Effect(pauseEverythingEffect);
    new Effect(pauseRandomMediaEffect);
    new Effect(playEverythingEffect);
    new Effect(playRandomMediaEffect);
    new Effect(rainbowTextEffect);
    new Effect(randomImagesEffect);
    new Effect(randomSelectionColorEffect);
    new Effect(randomTextColorEffect);
    new Effect(reloadPageEffect);
    new Effect(rollEffect);
    new Effect(scrollToRandomElementEffect);
    new Effect(scrollToTheTopEffect);
    new Effect(selectAllTextEffect);
    new Effect(sidewaysPageEffect);
    new Effect(smallTextEffect);
    new Effect(spinningPageEffect);
    new Effect(terminalifyEffect);
    new Effect(unmuteEverythingEffect);
    new Effect(unmuteRandomMediaEffect);
    new Effect(unselectAllTextEffect);
    new Effect(uppercaseTextEffect);
    new Effect(upsideDownEffect);
    new Effect(y1950sEffect);
    new Effect(vignetteEffect);

    function newEffect() {
        effects.forEach(effect => effect.revert());

        const enabledEffects = effects.filter(effect => effect.enabled);
        const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

        console.log(effects, enabledEffects);

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