import React, { useState } from 'react';
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import { Button, IconButton, useTheme } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

export default function Footer(props) {
    const {
        version,
        theme,
        saveToggle,
        setTheme,
        setSaveToggle
    } = props;

    const [buttonText, setButtonText] = useState("Save");

    const muiTheme = useTheme();
    const footerStyles = {
        backgroundColor: muiTheme.palette.blurBackground
    }

    useUpdateEffect(() => {
        let timeout;

        setButtonText("Saved!");
        timeout = setTimeout(() => setButtonText("Save"), 3000);
        
        return () => clearTimeout(timeout);
    }, [saveToggle]);

    return (
        <footer className='footer ui-blur' style={footerStyles}>
            <Button 
                color="primary" 
                variant="contained"
                onClick={() => setSaveToggle(prev => !prev)}
            >
                { buttonText }
            </Button>

            <span className='version-text'>Chaos Extension v{ version }</span>
            
            <IconButton 
                color="primary" 
                size="large"
                onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
            >
                { theme === "dark" ? <Brightness7/> : <Brightness4/> }
            </IconButton>
        </footer>
    );
}