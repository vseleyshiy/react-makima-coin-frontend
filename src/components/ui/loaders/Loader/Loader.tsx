import { m } from 'framer-motion'
import { LoaderIcon } from 'react-hot-toast'
import styles from './Loader.module.css'

export function Loader() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.loader}
		>
			<LoaderIcon className={styles.loader__icon} />
		</m.div>
	)
}
