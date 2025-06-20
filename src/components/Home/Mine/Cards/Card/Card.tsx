import { useProfile } from '@/hooks/useProfile'
import cn from 'clsx'
import { CircleDollarSign } from 'lucide-react'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import styles from './Card.module.css'
import type { ICardProps } from './Card.types'
import { CardUpdate } from './CardUpdate'

export const Card = (props: ICardProps) => {
	const { data, setInfo, setModal } = props
	const { data: user } = useProfile()

	const onclickCard = useCallback(() => {
		if (data?.updating === null) {
			if (data.refsFor !== null) {
				if (user?.friendsCount !== data.refsFor) return
			}
			setInfo({
				cardId: data.cardId,
				content: data,
			})
			setModal(true)
		} else {
			toast.error('Эта карточка улучшается!')
		}
	}, [data, user?.friendsCount, setInfo, setModal])

	return (
		<div
			onClick={onclickCard}
			style={{ backgroundImage: `url(${data.img})` }}
			className={cn(styles.card, {
				[styles.isUpdating]: data.updating !== null,
			})}
		>
			{data.refsFor !== null && user?.friendsCount !== data.refsFor ? (
				<span className={styles.card__error}>
					Наберите {data.refsFor} друзей, чтобы открыть.
				</span>
			) : (
				<>
					{data.updating !== null ? (
						<CardUpdate updating={data.updating} />
					) : null}
					<div className={styles.main}>
						<div className={styles.main__col}>
							<div className={styles.name}>{data.name}</div>
							<div className={styles.profit}>
								Прибыль в час
								<div className={styles.profit__value}>
									<CircleDollarSign size={11} />
									{data.allProfit}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.info}>
						<div className={styles.lvl}>lvl {data.lvl}</div>
						<div className={styles.price}>
							<CircleDollarSign size={22} />
							{data.price}
						</div>
					</div>
				</>
			)}
		</div>
	)
}
