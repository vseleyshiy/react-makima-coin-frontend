import { useSetAtom } from 'jotai'
import { ChevronRight, CircleDollarSign } from 'lucide-react'
import { isModalOpenAtom } from '../../../../store/store'
import { Loader } from '../../../ui/loaders/Loader/Loader'
import { useBoostInfo } from '../../hooks/useBoostInfo'
import styles from './BoostItem.module.css'
import type { IBoostItemProps } from './BoostItem.types'

export function BoostItem(props: IBoostItemProps) {
	const { data, currentModal, setCurrentModal, boosts } = props

	const boostInfo = useBoostInfo(boosts?.data, data.type)

	const setActive = useSetAtom(isModalOpenAtom)

	return boosts.isLoading || !boostInfo ? (
		<Loader />
	) : (
		<li
			className={styles.item}
			onClick={e => {
				setActive(true)
				setCurrentModal?.({
					...currentModal!,
					id: Number(e.currentTarget.dataset.id),
				})
			}}
			data-id={data.id}
		>
			<div className={styles.content}>
				<data.icon size={40} />
				<div className={styles.main}>
					<div className={styles.title}>{data.title}</div>
					{boosts?.isSuccess ? (
						<div className={styles.info}>
							<div className={styles.price}>
								{boostInfo?.value === boostInfo?.lastValue ? (
									'-'
								) : (
									<>
										<CircleDollarSign size={20} /> {boostInfo?.nextPrice}
									</>
								)}
							</div>
							<div className={styles.lvl}>
								{boostInfo?.value === boostInfo?.lastValue
									? `${boostInfo?.lvl} lvl max`
									: `${boostInfo?.lvl + 1} lvl`}
							</div>
						</div>
					) : null}
				</div>
			</div>
			<ChevronRight />
		</li>
	)
}
