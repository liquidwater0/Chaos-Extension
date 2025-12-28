import "./options.scss";
import { useState, useEffect } from "react";
import { useChromeStorageSync } from "use-chrome-storage";
import Section from "./components/Section";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";
import { IEffectOption, EffectOptionObjectWithoutFuncs } from "@/effects/Effect";
import { SAVE_DELAY_MS, TIMER_OPTIONS, DEFAULT_TIMER_OPTION } from "@/constants/options";
import { TIMER_STORAGE_KEY, EFFECTS_STORAGE_KEY } from "@/constants/storage";
import { effectArrayToObject, effectObjectToArray } from "@/utilities";

const manifest = chrome.runtime.getManifest();

export default function Options() {
	const [clicked, setClicked] = useState<boolean>(false);

	const [effectStorage, setEffectStorage] = useChromeStorageSync(EFFECTS_STORAGE_KEY, {});
	const [effectOptions, setEffectOptions] = useState<IEffectOption[]>(() => {
		return effectObjectToArray(effectStorage);
	});

	const [timer, setTimer] = useChromeStorageSync(TIMER_STORAGE_KEY, DEFAULT_TIMER_OPTION);
	const [selectedTimerOption, setSelectedTimerOption] = useState(timer);

	useEffect(() => {
		chrome.storage.sync.get({ 
			[EFFECTS_STORAGE_KEY]: {},
			[TIMER_STORAGE_KEY]: DEFAULT_TIMER_OPTION 
		}, items => {
			setEffectOptions(effectObjectToArray(items[EFFECTS_STORAGE_KEY] as EffectOptionObjectWithoutFuncs));
			setSelectedTimerOption(items[TIMER_STORAGE_KEY] as typeof DEFAULT_TIMER_OPTION);
		});
	}, []);

	const handleSave = () => {
		if (clicked) return;
		
		setClicked(true);
		setTimeout(() => setClicked(false), SAVE_DELAY_MS);

		setEffectStorage(effectArrayToObject(effectOptions));
		setTimer(selectedTimerOption);
	}

	const handleToggleEffect = (id: IEffectOption["id"], value: boolean) => {
		setEffectOptions(prev => {
			return prev.map(effect => {
				if (effect.id === id) {
					return {
						...effect,
						enabled: value
					}
				}

				return effect;
			});
		});
	}

	const handleToggleAll = (value: boolean) => {
		setEffectOptions(prev => {
			return prev.map(effect => {
				return { 
					...effect, 
					enabled: value
				}
			});
		});
	}

    return (
		<>
			<Section label="Effects">
				<div className="toggle-all effect-option">
					<label 
						className="effect-option-label" 
						htmlFor="toggleAll"
					>
						Toggle All
					</label>
					<Checkbox
						id="toggleAll"
						onChange={value => handleToggleAll(value)}
						isIndeterminate
						aria-label="toggle all checkbox"
					/>
				</div>
				{effectOptions.sort((a, b) => a.label > b.label ? 1 : -1).map(({ id, label, enabled }) => {
					return (
						<div 
							className="effect-option"
							key={id}
						>
							<label 
								className="effect-option-label" 
								htmlFor={id}
							>
								{ label }
							</label>
							<Checkbox
								id={id}
								isSelected={enabled}
								onChange={value => handleToggleEffect(id, value)}
								aria-label={`${label} checkbox ${enabled ? "enabled" : "disabled"}`}
							/>
						</div>
					);
				})}
			</Section>

			<Section label="Options">
				<Select 
					label="Timer"
					placement="top"
					value={selectedTimerOption.id}
				>
					{TIMER_OPTIONS.map((option) => (
						<Select.Option 
							key={option.id}
							id={option.id}
							onClick={() => setSelectedTimerOption(option)}
						>
							{ option.label }
						</Select.Option>
					))}
				</Select>
			</Section>

			<div className="bottom-bar">
				<Button onClick={handleSave}>
					{ clicked ? "Saved!" : "Save" }
				</Button>
				
				<p className="version-text">
					v{manifest.version}
				</p>
			</div>
		</>
    );
}