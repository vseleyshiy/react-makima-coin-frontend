import type { Dispatch, SetStateAction } from 'react'
import type { ITask } from '../../../../types/task.types'

// export interface IEarnButton {}

export interface IEarnButtonProps {
	task: ITask
	setModal: Dispatch<SetStateAction<boolean>>
}
