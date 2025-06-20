import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { LoaderIcon } from 'lucide-react'
import styles from './GlobalLoader.module.css'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isMutating || isFetching ? (
		<div className={styles.global__loader}>
			<LoaderIcon className={styles.loader__icon} />
		</div>
	) : null
}
