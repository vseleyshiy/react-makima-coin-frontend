import { useAtomValue } from 'jotai'
import { ChevronRight, CircleDollarSign } from 'lucide-react'
import type { MouseEvent } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { timerActiveAtom } from '../../../store/timer-store'
import styles from './EarnItem.module.css'
import type { IEarnItemProps } from './EarnItem.types'

export function EarnItem(props: IEarnItemProps) {
	const { item, itemProps } = props

	const timerActive = useAtomValue(timerActiveAtom)

	const onclickTask = (e: MouseEvent<HTMLDivElement>) => {
		if (!timerActive) {
			itemProps.setTask({
				...itemProps.task!,
				id: +e.currentTarget.dataset.id!,
			})
			itemProps.setModal(prev => !prev)
		} else {
			toast.error('В данный момент у вас идет КД!')
		}
	}

	return (
		<div
			className={styles.item}
			onClick={(e: MouseEvent<HTMLDivElement>) => onclickTask(e)}
			key={item.id}
			data-id={item.id}
		>
			<div className={styles.content}>
				<div className={styles.img__wrap}>
					<LazyLoadImage
						wrapperClassName={styles.img}
						className={styles.img}
						effect='blur'
						src={item.img}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.title}>{item.name}</div>
					<div className={styles.price}>
						<CircleDollarSign size={16} />+{item.reward}
					</div>
				</div>
			</div>
			<ChevronRight />
		</div>
	)
}
