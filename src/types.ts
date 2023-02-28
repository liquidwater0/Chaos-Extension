export type Effect = {
    label: string,
    storageKey: string,
    enabled?: boolean,
    defaultEnabled?: boolean,
    activate: () => void,
    revert: () => void
}

export type EffectOptions = {
    label: string,
    storageKey: string,
    enabled: boolean,
}