import { atom } from 'jotai'

export const isCollapsedAtom = atom<boolean>(true)
export const isModalOpenAtom = atom<boolean>(false)
export const isAuthAtom = atom<boolean>(false)
export const isSpendingAtom = atom<boolean>(false)
// export const onlineAtom = atom({ earn: 0, time: 0 })
