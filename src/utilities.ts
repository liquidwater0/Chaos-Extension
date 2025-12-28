import { IEffectOption, EffectOptionObjectWithoutFuncs } from "@/effects/Effect";

export function effectObjectToArray(effectObj: EffectOptionObjectWithoutFuncs): IEffectOption[] {
    return Object.entries(effectObj).map(([_, effect]) => effect as IEffectOption);
}

export function effectArrayToObject(effectArray: IEffectOption[]): EffectOptionObjectWithoutFuncs {
    return effectArray.reduce((prev, current) => {
        return {
            ...prev,
            [current.id]: { ...current }
        };
    }, {});
}

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}