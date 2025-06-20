import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IModalProps {
	modalActive: boolean
	setModalActive: Dispatch<SetStateAction<boolean>>
	children: ReactNode
}
