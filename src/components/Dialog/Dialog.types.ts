import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'

export interface IDialogProps {
	dialog: boolean
	setDialog: Dispatch<SetStateAction<boolean>>
	children: ReactNode
	differentRef?: RefObject<HTMLDivElement> | null
}
