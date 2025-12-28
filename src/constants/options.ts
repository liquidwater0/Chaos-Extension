export const SAVE_DELAY_MS = 2000;
export const TIMER_OPTIONS = [
	{ id: "5s", label: "5 Seconds", durationMs: 5_000 },
	{ id: "10s", label: "10 Seconds", durationMs: 10_000 },
	{ id: "20s", label: "20 Seconds", durationMs: 20_000 },
	{ id: "30s", label: "30 Seconds", durationMs: 30_000 },
	{ id: "1m", label: "1 Minute", durationMs: 60_000 },
	{ id: "2m", label: "2 Minutes", durationMs: 120_000 },
	{ id: "3m", label: "3 Minutes", durationMs: 180_000 }
];

export const DEFAULT_TIMER_OPTION = TIMER_OPTIONS[1];
export const DEFAULT_EFFECT_ENABLED = true;