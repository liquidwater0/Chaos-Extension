export type TEffect = {
    label: string,
    storageKey: string,
    enabled: boolean,
    defaultEnabled: boolean,
    activate: () => void,
    revert: () => void
}

export type EffectOption = {
    label: string,
    storageKey: string,
    enabled: boolean,
}