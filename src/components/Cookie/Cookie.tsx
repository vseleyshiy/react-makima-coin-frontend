import { AnimatePresence, m } from 'framer-motion'
import { CookieIcon } from 'lucide-react'
import { useState } from 'react'
import styles from './Cookie.module.css'

export function Cookie() {
	const [acceptCookie, setAcceptCookie] = useState(
		Boolean(localStorage.getItem('acceptCookie'))
	)

	const handleSetCookie = () => {
		setAcceptCookie(!acceptCookie)
		localStorage.setItem('acceptCookie', 'true')
	}

	return (
		<AnimatePresence>
			{!acceptCookie ? (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, display: 'none' }}
					className={styles.cookie}
				>
					<div className={styles.content}>
						<span className={styles.iconize__text}>
							Да, даже мы используем
							<CookieIcon size={20} />
							куки.
						</span>
						Без них вообще ничего не работает.
					</div>
					<button onClick={handleSetCookie} className={styles.button}>
						Понял
					</button>
				</m.div>
			) : null}
		</AnimatePresence>
	)
}
