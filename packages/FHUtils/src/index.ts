import { Animate } from 'FH-infrastructure-engineering'
import dayjs from 'dayjs'

export const getType = (value: any) => typeof value
export const isEqual = (v1: any, v2: any) => v1 === v2
export const currentTime = (time: string | number | dayjs.Dayjs | Date | null | undefined = new Date()): string => dayjs(time).locale('zh-cn').format()
export {
    Animate,
    dayjs
}