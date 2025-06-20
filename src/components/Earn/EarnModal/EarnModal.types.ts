import type { Dispatch, SetStateAction } from 'react'
import type { ITask } from '../../../types/task.types'

// export interface IEarnModal {}

export interface IEarnModalProps {
	task: ITask | undefined
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}
