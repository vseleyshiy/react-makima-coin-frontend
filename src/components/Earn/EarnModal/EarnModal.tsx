import { CircleDollarSign } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Modal } from '../../Modal'
import styles from './EarnModal.module.css'
import type { IEarnModalProps } from './EarnModal.types'
import { EarnModalButton } from './EarnModalButton'

export function EarnModal(props: IEarnModalProps) {
	const { modal, setModal, task } = props

	return (
		<Modal modalActive={modal} setModalActive={setModal}>
			<div className={styles.img__wrap}>
				<LazyLoadImage
					wrapperClassName={styles.img}
					className={styles.img}
					effect='blur'
					src={task?.img}
				/>
			</div>
			<div className={styles.menu__title}>{task?.name}</div>
			<div className={styles.text}>{task?.description}</div>
			<div className={styles.task}>
				<div className={styles.menu__price}>
					<CircleDollarSign size={30} />+{task?.reward}
				</div>
			</div>
			<EarnModalButton task={task!} setModal={setModal} />
		</Modal>
	)
}
