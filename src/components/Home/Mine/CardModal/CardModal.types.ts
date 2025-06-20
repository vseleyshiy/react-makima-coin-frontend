import type { Dispatch, SetStateAction } from 'react'
import type { ICardInfo } from '../Cards/Cards.types'

// export interface ICardModal {}

export interface ICardModalProps {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
	info: ICardInfo
}
