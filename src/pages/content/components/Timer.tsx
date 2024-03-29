import React, { useState, useEffect } from 'react';
import { useChromeStorageSync } from 'use-chrome-storage';
import { initialTimerSeconds } from '../../../initialOptions';
import { useChaosEffects } from '../../../context/EffectsContext';

function getWidth(timer: number, timeRemaining: number) {
    return `${100 - ((timeRemaining / timer) * 100)}%`;
}

function formatTime(time: number) {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
}

export default function Timer() {
    const [paused, setPaused] = useState<boolean>(false);
    const [transitionActive, setTransitionActive] = useState<boolean>(paused ? false : true);
    const [timer] = useChromeStorageSync("timer", initialTimerSeconds);
    const [timeRemaining, setTimeRemaining] = useState<number>(timer);
    const { activateNewEffect } = useChaosEffects();

    useEffect(() => {
        document.addEventListener("keydown", ({ key, shiftKey }: KeyboardEvent) => {
            if (shiftKey && key.toLowerCase() === "p") {
                setPaused(prev => !prev);
            }
        });
    }, []);

    useEffect(() => {
        setTimeRemaining(timer);
    }, [timer]);
    
    useEffect(() => {
        let timeout = setTimeout(() => {
            if (paused) {
                setTransitionActive(false);
                return;
            }

            if (timeRemaining === 0) {
                setTransitionActive(false);
                setTimeRemaining(timer);
                activateNewEffect();

                return;
            }

            setTransitionActive(true);
            
            setTimeRemaining(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [timeRemaining, paused]);

    return (
        <div className="timer">
            <div className="timer-bar-container">
                <div className='timer-bar' style={{ 
                    transform: `translateX(-${getWidth(timer, timeRemaining)})`,
                    transition: transitionActive ? "transform 1s linear" : "initial"
                }}/>
                <div className="timer-background ui-blur"/>
            </div>

            <div className="time-remaining">{ formatTime(timeRemaining) }</div>
        </div>
    );
}