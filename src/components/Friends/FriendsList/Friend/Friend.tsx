import { CircleDollarSign, User } from 'lucide-react'
import type { IFriend } from '../../../../types/friends.types'
import { formatBonus } from '../../../../utils/formatting'
import styles from './Friend.module.css'

export function Friend(props: { data: IFriend }) {
	const { data } = props

	return (
		<div className={styles.friend}>
			<User className={styles.icon} />
			<div className={styles.content}>
				<div className={styles.name}>
					{data.username !== null
						? data.username.length > 10
							? data.username.substring(0, 10) + '...'
							: data.username
						: 'Anonymous'}
				</div>
				<div className={styles.info}>
					<span className={styles.role}>{data.role}</span>
					-
					<CircleDollarSign size={15} />
					<span className={styles.balance}>{formatBonus(data.hourProfit)}</span>
				</div>
			</div>
			<div className={styles.bonus}>
				<CircleDollarSign size={25} />+{formatBonus(data.bonus)}
			</div>
		</div>
	)
}
