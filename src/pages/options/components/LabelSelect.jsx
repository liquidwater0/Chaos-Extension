import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function LabelSelect(props) {
    const {
        variant,
        label,
        options,
        setOptions,
        selected
    } = props;

    function handleChange({ target }) {
        setOptions(prev => {
            const optionsCopy = [...prev];
            const selectedItem = optionsCopy.find(option => option.selected);
            selectedItem.selected = false;
            const newSelectedOption = optionsCopy.find(option => option.value === target.value);
            newSelectedOption.selected = true;

            return optionsCopy;
        });
    }
    
    return (
        <FormControl variant={variant}>
            <InputLabel>{ label }</InputLabel>
            <Select
                value={selected}
                onChange={handleChange}
            >
                {
                    options.map(({ label, value }, index) => {
                        return (
                            <MenuItem key={index} value={value}>
                                { label }
                            </MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}