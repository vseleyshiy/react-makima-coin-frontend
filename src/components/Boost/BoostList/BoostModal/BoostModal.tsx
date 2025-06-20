import { useAtom } from 'jotai'
import { CircleDollarSign } from 'lucide-react'
import { isModalOpenAtom } from '../../../../store/store'
import { Modal } from '../../../Modal'
import { Loader } from '../../../ui/loaders/Loader'
import { useBoostInfo } from '../../hooks/useBoostInfo'
import styles from './BoostModal.module.css'
import type { IBoostModalProps } from './BoostModal.types'
import { BoostModalButton } from './BoostModalButton'

export function BoostModal(props: IBoostModalProps) {
	const { info, boosts } = props

	const boostInfo = useBoostInfo(boosts?.data, info?.type)

	const [active, setActive] = useAtom(isModalOpenAtom)

	return boosts?.isLoading || !boostInfo ? (
		<Loader />
	) : (
		<Modal modalActive={active} setModalActive={setActive}>
			{info?.icon ? <info.icon size={60} /> : null}
			<div className={styles.menu__title}>{info?.title}</div>
			<div className={styles.text}>{info?.text}</div>
			<div className={styles.desc}>{info?.desc}</div>
			{boosts.isSuccess ? (
				<>
					<div className={styles.info}>
						<div className={styles.menu__price}>
							{boostInfo?.value === boostInfo?.lastValue ? (
								''
							) : (
								<CircleDollarSign size={30} />
							)}
							{boostInfo?.value === boostInfo?.lastValue
								? '-'
								: boostInfo?.nextPrice}
						</div>
						<div className={styles.menu__lvl}>
							{boostInfo?.value === boostInfo?.lastValue
								? `${boostInfo?.lvl} lvl max`
								: `${boostInfo?.lvl + 1} lvl`}
						</div>
					</div>
					{info?.type && (
						<BoostModalButton type={info.type} boostInfo={boostInfo} />
					)}
				</>
			) : null}
		</Modal>
	)
}
