import { useProfile } from '../../../hooks/useProfile'
import type { IGetBoosts } from '../../../types/boosts.types'

export function useBoostInfo(
	boosts: IGetBoosts | undefined,
	type: 'energy' | 'multitap' | undefined
) {
	const { data, isSuccess } = useProfile()

	if (boosts && data && isSuccess) {
		const value = type === 'multitap' ? data?.click : data?.energy
		const lastValue =
			type === 'multitap' ? boosts.lastValueClick : boosts.lastValueEnergy
		const nextPrice =
			type === 'multitap' ? boosts.nextPriceClick : boosts.nextPriceEnergy
		const lvl = type === 'multitap' ? boosts.lvlClick : boosts.lvlEnergy

		return { value, lastValue, nextPrice, lvl }
	}
}
