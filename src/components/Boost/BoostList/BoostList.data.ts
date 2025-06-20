import { BatteryCharging, MousePointerClick } from 'lucide-react'
import type { IBoostItem } from './BoostItem/BoostItem.types'

export const BOOST_LIST: IBoostItem[] = [
	{
		id: 1,
		icon: BatteryCharging,
		title: 'Energy limit',
		text: 'Увеличьте максимальное количество энергии',
		desc: '+500 энергии за улучшение',
		type: 'energy',
	},
	{
		id: 2,
		icon: MousePointerClick,
		title: 'Multitap',
		text: 'Увеличьте количество монет, которое вы можете заработать за одно нажатие',
		desc: '+1 монет за улучшение при клике',
		type: 'multitap',
	},
]
