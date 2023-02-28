import React, { Dispatch, SetStateAction } from 'react';
import { 
    FormControl, 
    InputLabel, 
    Select as MUISelect, 
    MenuItem, 
    SelectChangeEvent
} from '@mui/material';

type SelectProps = {
    variant: "standard" | "outlined" | "filled",
    label: string,
    options: any[],
    setOptions: Dispatch<SetStateAction<any>>,
    selected: string | number
}

export default function Select({ variant, label, options, setOptions, selected }: SelectProps) {
    function handleChange({ target }: SelectChangeEvent) {
        setOptions((prev: any) => {
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
            <MUISelect
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
            </MUISelect>
        </FormControl>
    );
}