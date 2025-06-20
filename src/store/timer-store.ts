import { atom } from 'jotai'

export const timerActiveAtom = atom<boolean>(false)
export const secondsAtom = atom<number>(60)
