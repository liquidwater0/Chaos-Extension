import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { Button } from '@mui/material';
import LabelCheckbox from "./LabelCheckbox";
import { effectsMap } from "../../../initEffect";

const initialEffectOptions = Object.values(Object.fromEntries(effectsMap)).map(({ label, storageKey, enabled }) => {
    return { label, storageKey, enabled };
});

export default function EffectsSection({ saveToggle }) {
    const [options, setOptions] = useState(initialEffectOptions);
    const [allToggle, setAllToggle] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get({ checkedStates: initialEffectOptions }, items => {
            setOptions(items.checkedStates);
        });
    }, []);

    useUpdateEffect(() => {
        const storage = {};

        options.forEach(({ storageKey, enabled }) => {
            storage.checkedStates = options;
            // storage[storageKey] = enabled;
        });
        
        chrome.storage.sync.set(storage);
    }, [saveToggle]);

    function handleToggleAll() {
        setAllToggle(prev => !prev);
        setOptions(prev => {
            const optionsDupe = [...prev];
            optionsDupe.map(option => option.enabled = allToggle);
            return optionsDupe;
        });
    }

    return (
        <>
            <Button 
                color="primary" 
                variant="outlined" 
                onClick={handleToggleAll}
            >
                Toggle All
            </Button>

            {
                options.map(({ label, enabled }, index) => {
                    return (
                        <LabelCheckbox
                            key={index}
                            index={index}
                            label={label}
                            checked={enabled}
                            setOptions={setOptions}
                        />
                    );
                })
            }
        </>
    );
}