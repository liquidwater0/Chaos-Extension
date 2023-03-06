export type TEffect = {
    label: string,
    id: string,
    enabled: boolean,
    defaultEnabled: boolean,
    activate: () => void,
    revert: () => void
}

export type EffectOption = {
    label: string,
    id: string,
    enabled: boolean,
}