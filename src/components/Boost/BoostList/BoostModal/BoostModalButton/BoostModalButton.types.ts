// export interface IBoostModalButton {}

export interface IBoostModalButtonProps {
	type: 'energy' | 'multitap'
	boostInfo: {
		value: number
		lastValue: number
		nextPrice: number
		lvl: number
	}
}
