import type { Dispatch, SetStateAction } from 'react'
import type { ICardInfo } from '../../Cards/Cards.types'

// export interface ICardModalButton {}

export interface ICardModalButtonProps {
	info: ICardInfo
	setModal: Dispatch<SetStateAction<boolean>>
}
