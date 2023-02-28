import React, { Dispatch, SetStateAction } from 'react';
import { 
    Checkbox as MUICheckbox, 
    FormControlLabel 
} from '@mui/material';

type CheckboxProps = {
    label: string,
    checked: boolean,
    index: number,
    setOptions: Dispatch<SetStateAction<any>>
}

function Checkbox({ label, checked, index, setOptions }: CheckboxProps) {

    function handleChange() {
        setOptions((prev: any) => {
            const optionsDupe = [...prev];
            optionsDupe[index].enabled = !optionsDupe[index].enabled;
            return optionsDupe;
        });
    }

    return (
        <FormControlLabel 
            label={label}
            control={ 
                <MUICheckbox 
                    color='primary'
                    checked={checked}
                    onChange={handleChange}
                /> 
            }
        />
    );
}

export default React.memo(Checkbox);