import React, { useEffect, useState } from 'react';
import { useChromeStorageSync } from 'use-chrome-storage';
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { Button } from '@mui/material';
import LabelCheckbox from "./LabelCheckbox";

export default function EffectsSection({ saveToggle }) {
    const [effects] = useChromeStorageSync("effects", []);
    const initialEffectOptions = effects.map(({ label, storageKey, enabled }) => {
        return { label, storageKey, enabled };
    });
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