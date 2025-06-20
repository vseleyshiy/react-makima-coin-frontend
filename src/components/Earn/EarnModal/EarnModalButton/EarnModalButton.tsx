import cn from 'clsx'
import { useAtom } from 'jotai'
import toast from 'react-hot-toast'
import { timerActiveAtom } from '../../../../store/timer-store'
import { balanceAtom } from '../../../../store/user-store'
import styles from '../../../Boost/BoostList/BoostModal/BoostModalButton/BoostModalButton.module.css'
import { useAddTask } from '../../hooks/useAddTask'
import type { IEarnButtonProps } from './EarnModalButton.types'

export function EarnModalButton(props: IEarnButtonProps) {
	const { task, setModal } = props

	const [timerActive, setTimerActive] = useAtom(timerActiveAtom)
	const [balance, setBalance] = useAtom(balanceAtom)

	const { mutate, isPending } = useAddTask(task?.id)

	const executeTask = async () => {
		if (Boolean(task.execute) === false) {
			mutate(task?.reward)
			setTimerActive(true)
			window.open(task.link, '_blank')
			setBalance({ type: 'another', balance: balance.balance + task.reward })
		} else {
			toast.error('Вы уже выполнили эту карточку!')
		}
	}

	return (
		<button
			style={{
				pointerEvents: task?.execute || timerActive ? 'none' : 'all',
			}}
			onClick={() => {
				executeTask()
				setModal(false)
			}}
			className={cn(styles.submit, {
				[styles.ex]: task?.execute,
			})}
		>
			{isPending ? 'Загрузка' : task?.execute ? 'Выполнено' : 'Перейти'}
		</button>
	)
}
