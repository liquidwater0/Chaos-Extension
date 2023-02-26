import { initialTimerSeconds, initialTimerOptions } from "../../initialOptions";
import "../../effects/index";
import { effectsMap } from "../../initEffect";

async function getInitialEffectOptions() {
	return new Promise((resolve, reject) => {
		resolve(
			Object.values(Object.fromEntries(effectsMap)).map(({ label, storageKey, defaultEnabled }) => {
				return { 
					label, 
					storageKey, 
					enabled: defaultEnabled 
				}
			})
		); 
	});
}

async function saveStorage() {
	const initialEffectOptions = await getInitialEffectOptions();
	console.log(initialEffectOptions);

	chrome.storage.sync.set({
		checkedStates: initialEffectOptions,
		timer: initialTimerSeconds,
		timerOptions: initialTimerOptions
	});
}

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

	saveStorage();

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});