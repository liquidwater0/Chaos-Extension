import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

function LabelCheckbox(props) {
    const {
        label,
        checked,
        index,
        setOptions
    } = props;

    function handleChange() {
        setOptions(prev => {
            const optionsDupe = [...prev];
            optionsDupe[index].enabled = !optionsDupe[index].enabled;
            return optionsDupe;
        });
    }

    return (
        <FormControlLabel 
            label={label}
            control={ 
                <Checkbox 
                    color='primary'
                    checked={checked}
                    onChange={handleChange}
                /> 
            }
        />
    );
}

export default React.memo(LabelCheckbox);