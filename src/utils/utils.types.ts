import type { Dispatch, SetStateAction } from 'react'

export interface IAdaptiveRatingFn {
	width: number
	setFn: Dispatch<SetStateAction<number>>
	mediaFn: Dispatch<SetStateAction<boolean>>
	stateFn: Dispatch<SetStateAction<boolean>>
}
