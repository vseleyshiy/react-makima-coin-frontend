// export interface IProfileDialog {}

import type { Dispatch, RefObject, SetStateAction } from 'react'

export interface IProfileDialogProps {
	dialog: boolean
	profileRef: RefObject<HTMLDivElement> | null
	setDialog: Dispatch<SetStateAction<boolean>>
}
