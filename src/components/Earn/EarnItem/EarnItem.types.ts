import type { Dispatch, SetStateAction } from 'react'
import type { ITask } from '../../../types/task.types'

export interface IEarnItem {
	task: ITask | undefined
	setTask: Dispatch<SetStateAction<ITask | undefined>>
	setModal: Dispatch<SetStateAction<boolean>>
}

export interface IEarnItemProps {
	item: ITask
	itemProps: IEarnItem
}
