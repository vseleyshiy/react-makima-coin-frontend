import { Loader } from '@/components/ui/loaders/Loader'
import { MiniLoader } from '@/components/ui/loaders/MiniLoader'
import { RMC_PAGES } from '@/config/pages-url.config'
import { useProfile } from '@/hooks/useProfile'
import { energyAtom } from '@/store/user-store'
import { useAtomValue } from 'jotai'
import { Rocket, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Energy.module.css'

export function Energy() {
	const { data, isLoading } = useProfile()

	const energy = useAtomValue(energyAtom)

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.energy}>
			<ul className={styles.list}>
				<div className={styles.item}>
					<Zap />
					<span className={styles.value}>
						{energy === -1 ? <MiniLoader /> : energy} / {data?.energy}
					</span>
				</div>
				<Link to={RMC_PAGES.BOOST} className={styles.item}>
					<Rocket />
					<span className={styles.value}>Boost</span>
				</Link>
			</ul>
		</div>
	)
}
