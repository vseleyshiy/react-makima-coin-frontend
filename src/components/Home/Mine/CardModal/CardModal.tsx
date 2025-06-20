import styles from '@/components/Boost/BoostList/BoostModal/BoostModal.module.css'
import { Modal } from '@/components/Modal'
import { CircleDollarSign } from 'lucide-react'
import { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import type { ICardModalProps } from './CardModal.types'
import { CardModalButton } from './CardModalButton'

export const CardModal = memo((props: ICardModalProps) => {
	const { modal, setModal, info } = props

	return (
		<Modal modalActive={modal} setModalActive={setModal}>
			<div className={styles.img__wrap}>
				<LazyLoadImage
					wrapperClassName={styles.img}
					className={styles.img}
					effect='blur'
					src={info?.content?.img}
				/>
			</div>
			<div className={styles.menu__title}>{info?.content?.name}</div>
			<div className={styles.text}>{info?.content?.description}</div>
			<div className={styles.desc}>
				+{info?.content?.profit} монет в час после улучшения
			</div>
			<div className={styles.info}>
				<div className={styles.menu__price}>
					<CircleDollarSign size={30} />
					{info?.content?.price}
				</div>
				<div className={styles.menu__lvl}>{info?.content?.lvl} lvl</div>
			</div>
			<CardModalButton setModal={setModal} info={info} />
		</Modal>
	)
})
