import { Loader } from '@/components/ui/loaders/Loader'
import { useProfile } from '@/hooks/useProfile'
import { CircleDollarSign } from 'lucide-react'
import styles from './Blocks.module.css'

export function Blocks() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<ul className={styles.list}>
			<li className={styles.item}>
				<div className={styles.title}>Прибыль за тап</div>
				<div className={styles.value}>
					<CircleDollarSign size={18} />
					<span className={styles.valueNum}>+{data?.click}</span>
				</div>
			</li>
			<li className={styles.item}>
				<div className={styles.title}>Монет для апа</div>
				<div className={styles.value}>
					<span className={styles.valueNum}>
						{data?.forUp ? data?.forUp : 'MAX'}
					</span>
				</div>
			</li>
			<li className={styles.item}>
				<div className={styles.title}>Прибыль в час</div>
				<div className={styles.value}>
					<CircleDollarSign size={18} />
					<span className={styles.valueNum}>+{data?.hourProfit}</span>
				</div>
			</li>
		</ul>
	)
}
