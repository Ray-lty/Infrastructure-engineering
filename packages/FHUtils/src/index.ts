import { Animate } from 'FH-infrastructure-engineering'
import dayjs from 'dayjs'
import { ObjectPure } from './type'

export const getType = (value: any) => typeof value
export const isEqual = (v1: any, v2: any) => v1 === v2
export const currentTime = (time: string | number | dayjs.Dayjs | Date | null | undefined = new Date()): string => dayjs(time).locale('zh-cn').format()
export function isValidKey(
    key: string | number | symbol,
    object: object
): key is keyof typeof object {
    return key in object;
}
export const mergeOptions = (defaultOptions: ObjectPure, currentOptions: ObjectPure): object => {

    for(const key in currentOptions) {
        if (isValidKey(key, currentOptions)) {
            const value = currentOptions[key];
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                defaultOptions[key] = mergeOptions(defaultOptions[key], value)
            } else {
                defaultOptions[key] = value;
            }
        }
    }
    return defaultOptions
}
export {
    Animate,
    dayjs
}