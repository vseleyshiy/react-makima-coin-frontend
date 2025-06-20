import { m } from 'framer-motion'
import { Score } from '../Home/Score'
import styles from './Boost.module.css'
import { BoostList } from './BoostList'

export function Boost() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.boostWrap}
		>
			<div className={styles.balance__title}>Ваш баланс</div>
			<Score />
			<div className={styles.boost}>
				<div className={styles.title}>Усилители</div>
				<BoostList />
			</div>
		</m.div>
	)
}
