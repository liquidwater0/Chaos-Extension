import { initialTimerSeconds, initialTimerOptions } from "../../initialOptions";
import "../../effects/index";
import { effects } from "../../Effect";
import { EffectOption } from "../../types";

const initialEffectOptions = effects.map(({ label, storageKey, enabled }) => {
	return { label, storageKey, enabled };
});

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

	chrome.storage.sync.set({
		timer: initialTimerSeconds,
		timerOptions: initialTimerOptions
	});

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});

handleUpdatedEffects();

function handleUpdatedEffects() {
	chrome.storage.sync.get({ checkedStates: initialEffectOptions }, items => {
		let finalArray: EffectOption[] = items.checkedStates;

		initialEffectOptions.forEach(effect => {
			const newEffect: EffectOption | undefined = items.checkedStates.find((item: EffectOption) => {
				return item.storageKey === effect.storageKey;
			});

			if (newEffect === undefined) finalArray.push(effect);
		});

		items.checkedStates.forEach((effect: EffectOption) => {
			const removedEffect: EffectOption | undefined = initialEffectOptions.find((item: EffectOption) => {
				return item.storageKey === effect.storageKey;
			});

			if (removedEffect === undefined) {
				finalArray = finalArray.filter(item => item.storageKey !== effect.storageKey);
			}
		});

		chrome.storage.sync.set({ checkedStates: finalArray });
	});
}