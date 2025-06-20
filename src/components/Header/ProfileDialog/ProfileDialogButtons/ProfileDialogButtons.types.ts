import type { Dispatch, SetStateAction } from 'react'

// export interface IProfileDialogButtons {}

export interface IProfileDialogButtonsProps {
	nameWatch: string
	setDialog: Dispatch<SetStateAction<boolean>>
}
