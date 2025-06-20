import type { ICard } from '@/types/card.types'
import type { Dispatch, SetStateAction } from 'react'
import type { ICardInfo } from '../Cards.types'

export interface ICardProps {
	data: ICard
	setInfo: Dispatch<SetStateAction<ICardInfo>>
	setModal: Dispatch<SetStateAction<boolean>>
}
