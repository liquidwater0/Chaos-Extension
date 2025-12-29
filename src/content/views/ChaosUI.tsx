import "./chaosUI.scss";
import { useState, useEffect, useRef } from "react";
import { useChromeStorageSync } from "use-chrome-storage";
import Timer from "./components/Timer";
import { enabledEffects } from "@/effects";
import type { IEffect } from "@/effects/Effect";
import { PAUSED_STORAGE_KEY } from "@/constants/storage";
import { REMOVE_OLD_EFFECTS_DELAY_MS } from "@/constants/effects";

type ActiveEffect = {
	activeId: string | undefined,
	isActive: boolean,
	expireTime: number,
	effect: IEffect
}

function getExpireTime() {
	return Date.now() + REMOVE_OLD_EFFECTS_DELAY_MS;
}

export default function ChaosUI() {
	const [activeEffects, setActiveEffects] = useState<ActiveEffect[]>([]);
	const [paused] = useChromeStorageSync(PAUSED_STORAGE_KEY, false);
	const activeEffectsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveEffects(prev => {
				return prev.filter(effect => effect.expireTime > Date.now());
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const activateRandomEffect = () => {
		const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

		if (!randomEffect) return;

		setActiveEffects(prev => {
			const newActiveEffects: ActiveEffect[] = [];

			prev.forEach(activeEffect => {
				const isSameEffectActive = activeEffect.isActive && activeEffect.effect.id === randomEffect.id;
				const hasConflictingTags = activeEffect.effect.tags?.some(tag => randomEffect.tags?.includes(tag));

				if (isSameEffectActive || hasConflictingTags) {
					activeEffect.effect.revert();

					newActiveEffects.push({
						...activeEffect,
						isActive: false,
						expireTime: getExpireTime()
					});
				} else {
					newActiveEffects.push(activeEffect);
				}
			});

			const newEffect: ActiveEffect = {
				activeId: crypto.randomUUID(),
				isActive: randomEffect.isTimed ? true : false,
				expireTime: randomEffect.isTimed ? Infinity : getExpireTime(),
				effect: randomEffect
			};

			newEffect.effect.activate();
			newActiveEffects.push(newEffect);

			return newActiveEffects;
		});
	}

	const stopEffect = (activeId: ActiveEffect["activeId"]) => {
		setActiveEffects(prev => {
			return prev.map(activeEffect => {
				if (activeEffect.activeId === activeId && activeEffect.isActive) {
					activeEffect.effect.revert();

					return {
						...activeEffect,
						isActive: false,
						expireTime: getExpireTime()
					};
				}

				return activeEffect;
			})
		});
	}

	return (
		<>
			<Timer onTimerReset={activateRandomEffect} />

			<div 
				ref={activeEffectsContainerRef}
				className="active-effects"
			>
				{activeEffects.map(({ activeId, isActive, effect }) => {
					return (
						<div 
							key={activeId}
							className="effect"
						>
							<div 
								className="effect-progress-bar" 
								style={{ 
									animationName: `${effect.isTimed && isActive ? "progress-down" : "none"}`,
									animationDuration: `${effect.durationMs}ms`,
									animationTimingFunction: "linear",
									animationIterationCount: "infinite",
									animationPlayState: `${paused ? "paused" : "running"}`
								}}
								onAnimationIteration={() => stopEffect(activeId)}
							/>
							{ effect.label }
						</div>
					);
				})}
			</div>
		</>
	);
}