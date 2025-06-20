import { atom } from 'jotai'
import type { IBalance } from './types'

export const balanceAtom = atom<IBalance>({
	type: 'another',
	balance: -1,
})
export const energyAtom = atom<number>(-1)
export const barAtom = atom<number>(0)
