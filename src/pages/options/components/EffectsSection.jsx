import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { initialEffectOptions } from '../../../initialOptions';
import { Button } from '@mui/material';
import LabelCheckbox from "./LabelCheckbox";

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

        options.forEach(({ storageKey, checked }) => {
            storage.checkedStates = options;
            storage[storageKey] = checked;
        });
        
        chrome.storage.sync.set(storage);
    }, [saveToggle]);

    function handleToggleAll() {
        setAllToggle(prev => !prev);
        setOptions(prev => {
            const optionsDupe = [...prev];
            optionsDupe.map(option => option.checked = allToggle);
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
                options.map(({ label, checked }, index) => {
                    return (
                        <LabelCheckbox
                            key={index}
                            index={index}
                            label={label}
                            checked={checked}
                            setOptions={setOptions}
                        />
                    );
                })
            }
        </>
    );
}