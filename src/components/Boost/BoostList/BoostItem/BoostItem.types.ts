import type { LucideIcon } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import type { IBoosts } from '../../Boost.types'

export interface IBoostItem {
	id: number
	icon: LucideIcon
	title: string
	text: string
	desc: string
	type: 'energy' | 'multitap'
}

export interface IBoostItemProps {
	boosts: IBoosts
	data: IBoostItem
	currentModal: IBoostItem | null
	setCurrentModal: Dispatch<SetStateAction<IBoostItem | null>>
}
