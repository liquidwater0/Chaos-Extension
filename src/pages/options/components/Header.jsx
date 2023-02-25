import React from 'react';
import KeyboardKey from "./KeyboardKey";

export default function Header() {
    return (
        <header className='header'>
            <div className="key-combination-text" aria-label='shift + p to pause'>
                <KeyboardKey value="Shift"/>
                <span>+</span>
                <KeyboardKey value="P"/>
                <span>to Pause</span>
            </div>
        </header>
    );
}