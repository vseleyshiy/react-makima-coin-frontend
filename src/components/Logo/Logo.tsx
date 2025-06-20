import { RMC_PAGES } from '@/config/pages-url.config'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export function Logo() {
	return (
		<Link onClick={close} to={RMC_PAGES.GENERAL} className={styles.logo__wrap}>
			RMC
			<span>beta 1.0.0</span>
		</Link>
	)
}
