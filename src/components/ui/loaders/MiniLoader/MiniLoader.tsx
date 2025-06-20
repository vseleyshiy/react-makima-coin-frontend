import { LoaderIcon } from 'react-hot-toast'
import styles from './MiniLoader.module.css'

export function MiniLoader() {
	return (
		<div className={styles.loader}>
			<LoaderIcon />
		</div>
	)
}
