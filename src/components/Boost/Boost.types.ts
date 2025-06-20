import type { IGetBoosts } from '../../types/boosts.types'

export interface IBoosts {
	data: IGetBoosts | undefined
	isLoading: boolean
	isSuccess: boolean
}
