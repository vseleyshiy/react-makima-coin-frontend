import type { IBoosts } from '../../Boost.types'
import type { IBoostItem } from '../BoostItem/BoostItem.types'

// export interface IBoostModal {}

export interface IBoostModalProps {
	boosts: IBoosts
	info: IBoostItem | null
}

export interface IBoostUpdateLvl {
	price: number
	value: number
	setFunc: () => void
}
