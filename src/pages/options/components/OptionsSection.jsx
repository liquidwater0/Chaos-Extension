import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { initialTimerOptions } from '../../../initialOptions';
import LabelSelect from "./LabelSelect";

export default function OptionsSection({ saveToggle }) {
    const [timerSelectOptions, setTimerSelectOptions] = useState(initialTimerOptions);
    const selectedOption = timerSelectOptions.filter(option => option.selected)[0];

    useEffect(() => {
        chrome.storage.sync.get({ timerOptions: initialTimerOptions }, items => {
            setTimerSelectOptions(items.timerOptions);
        });
    }, []);

    useUpdateEffect(() => {
        chrome.storage.sync.set({ "timerOptions": timerSelectOptions, "timer": selectedOption.value });
    }, [saveToggle]);

    return (
        <>
            <LabelSelect 
                variant="filled"
                label="Timer"
                options={timerSelectOptions}
                setOptions={setTimerSelectOptions}
                selected={selectedOption.value}
            />
        </>
    );
}