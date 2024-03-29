import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useUpdateEffect } from "../../hooks/useUpdateEffect";
import { useChaosEffects } from '../../../../context/EffectsContext';
import Checkbox from "../Checkbox";

export default function EffectsSection({ saveToggle }: { saveToggle: boolean }) {
    const { effects } = useChaosEffects();
    const initialEffectOptions = effects.map(({ label, id, enabled }) => {
        return { label, id, enabled };
    });
    const [options, setOptions] = useState(initialEffectOptions);
    const [allToggle, setAllToggle] = useState<boolean>(true);

    useEffect(() => {
        chrome.storage.sync.get({ checkedStates: initialEffectOptions }, items => {
            setOptions(items.checkedStates);
        });
    }, []);

    useUpdateEffect(() => {
        chrome.storage.sync.set({ checkedStates: options });
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
                options.sort((a, b) => a.label > b.label ? 1 : -1).map(({ label, enabled }, index) => {
                    return (
                        <Checkbox
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