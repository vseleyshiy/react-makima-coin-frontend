import { useSetAtom } from 'jotai'
import { Coins, Home, Pickaxe, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { RMC_PAGES } from '../../config/pages-url.config'
import { mineAtom } from '../../store/buttons-store'
import styles from './Buttons.module.css'

export function Buttons() {
	const setMine = useSetAtom(mineAtom)
	const { pathname } = useLocation()

	const isGame =
		pathname === RMC_PAGES.BOOST ||
		pathname === RMC_PAGES.EARN ||
		pathname === RMC_PAGES.FRIENDS ||
		pathname === RMC_PAGES.HOME

	return (
		isGame && (
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link
						onClick={() => {
							setMine(false)
						}}
						to={RMC_PAGES.HOME}
						className={styles.link}
					>
						<Home size={20} />
						Home
					</Link>
				</li>
				<li className={styles.item}>
					<div onClick={() => setMine(prev => !prev)} className={styles.link}>
						<Pickaxe size={20} />
						Mine
					</div>
				</li>
				<li className={styles.item}>
					<Link to={RMC_PAGES.EARN} className={styles.link}>
						<Coins size={20} />
						Earn
					</Link>
				</li>
				<li className={styles.item}>
					<Link to={RMC_PAGES.FRIENDS} className={styles.link}>
						<Users size={20} />
						Friends
					</Link>
				</li>
			</ul>
		)
	)
}
