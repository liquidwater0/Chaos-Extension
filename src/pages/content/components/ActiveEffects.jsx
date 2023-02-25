import React from 'react';
import { useChaosEffects } from '../context/EffectsContext';

export default function ActiveEffects() {
    const { activeEffect } = useChaosEffects();

    return (
        <div className="active-effects ui-blur">
            <div className='label'>Effect Activated</div>
            <div className={`active-effect-text ${activeEffect === "" ? "hide-text" : ""}`}>
                { activeEffect === "" ? "a" : activeEffect }
            </div>
        </div>
    );
}