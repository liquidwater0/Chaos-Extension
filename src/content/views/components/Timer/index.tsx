import { useState, useEffect, useRef, type ComponentProps } from "react";
import { useChromeStorageSync } from "use-chrome-storage";
import { TIMER_STORAGE_KEY, PAUSED_STORAGE_KEY } from "@/constants/storage";
import { DEFAULT_TIMER_OPTION } from "@/constants/options";

interface TimerProps extends ComponentProps<"div"> {
    onTimerReset?: () => void
}

function formatTime(seconds: number) {
    const ss = Math.floor(seconds % 60).toString().padStart(2, "0");
    const mm = Math.floor(seconds / 60);
    
    return `${mm}:${ss}`;
}

export default function Timer({
    className = "",
    onTimerReset,
    ...props
}: TimerProps) {
    const [timer] = useChromeStorageSync(TIMER_STORAGE_KEY, DEFAULT_TIMER_OPTION);
    const [paused] = useChromeStorageSync(PAUSED_STORAGE_KEY, false);
    const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const timerCountdownInterval = useRef<number>(null);

    useEffect(() => {
        progressBarRef.current?.getAnimations().forEach(animation => {
            if (paused) {
                animation.pause();
            } else {
                animation.play();
            }
        });

        if (paused) {
            if (timerCountdownInterval.current) {
                clearInterval(timerCountdownInterval.current);
                timerCountdownInterval.current = null;
            }
        } else {
            timerCountdownInterval.current = setInterval(handleTimerCountdown, 1000);
        }
    }, [paused]);

    useEffect(() => {
        resetSecondsRemaining();
        progressBarRef.current?.getAnimations().forEach(animation => {
            animation.cancel();
            animation.play();

            if (paused) {
                animation.pause();
            } else {
                animation.play();
            }
        });

        if (timerCountdownInterval.current) {
            clearInterval(timerCountdownInterval.current);
        }

        if (!paused) {
            timerCountdownInterval.current = setInterval(handleTimerCountdown, 1000);
        }

        return () => {
            if (timerCountdownInterval.current) {
                clearInterval(timerCountdownInterval.current);
            }
        }
    }, [timer]);

    const handleReset = () => {
        if (!onTimerReset) {
            return;
        }

        resetSecondsRemaining();
        onTimerReset();
    }

    const handleTimerCountdown = () => {
        setSecondsRemaining(prev => prev - 1);
    }

    const resetSecondsRemaining = () => {
        setSecondsRemaining(timer.durationMs / 1000);
    }

    return (
        <div
            className={`timer ${className}`}
            { ...props }
        >
            <div className="timer-background" />
            <div 
                ref={progressBarRef}
                className="timer-progress-bar" 
                style={{ 
                    animationName: "progress-down",
                    animationDuration: `${timer.durationMs}ms`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
                onAnimationIteration={handleReset}
            />
            <p className="time-remaining">
                { formatTime(secondsRemaining) }
            </p>
        </div>
    );
}