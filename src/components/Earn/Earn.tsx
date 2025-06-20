import { m } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { CircleDollarSign } from 'lucide-react'
import { useEffect, useState } from 'react'
import { secondsAtom, timerActiveAtom } from '../../store/timer-store'
import type { ITask } from '../../types/task.types'
import { formattingTime } from '../../utils/formatting'
import { Loader } from '../ui/loaders/Loader'
import styles from './Earn.module.css'
import { EarnItem } from './EarnItem'
import type { IEarnItem } from './EarnItem/EarnItem.types'
import { EarnModal } from './EarnModal'
import { useTask } from './hooks/useTask'

export function Earn() {
	const { data, isLoading } = useTask()

	const [modal, setModal] = useState(false)
	const [task, setTask] = useState<ITask | undefined>(data?.[0])
	const timerActive = useAtomValue(timerActiveAtom)
	const seconds = useAtomValue(secondsAtom)

	const itemProps: IEarnItem = {
		task,
		setTask,
		setModal,
	}

	useEffect(() => {
		const dataTask = data?.find(item => item.id === task?.id)
		if (!dataTask) return
		setTask(dataTask)
	}, [modal, data, task?.id])

	return isLoading ? (
		<Loader />
	) : (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.earn}
		>
			<div className={styles.top__img}>
				<CircleDollarSign size={120} />
			</div>
			{data?.length ? (
				<>
					<div className={styles.top__title}>
						{timerActive
							? `КД ${formattingTime(seconds)}`
							: 'Заработай больше монет!'}
					</div>
					<div className={styles.list}>
						{data?.map(el => {
							return <EarnItem key={el.id} item={el} itemProps={itemProps} />
						})}
					</div>
					<EarnModal task={task} modal={modal} setModal={setModal} />
				</>
			) : null}
		</m.div>
	)
}
