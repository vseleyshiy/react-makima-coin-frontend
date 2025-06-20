import { AnimatePresence, m } from 'framer-motion'
import { useEffect } from 'react'
import styles from './Modal.module.css'
import type { IModalProps } from './Modal.types'

export const Modal = (props: IModalProps) => {
	const { modalActive, setModalActive, children } = props

	useEffect(() => {
		if (modalActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [modalActive])

	return (
		<AnimatePresence>
			{modalActive && (
				<m.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					className={styles.modal}
					onClick={() => setModalActive(false)}
				>
					<m.div
						className={styles.modal__content}
						onClick={e => e.stopPropagation()}
						initial={{ bottom: '-105%' }}
						animate={{
							bottom: '7%',
						}}
						exit={{ bottom: '-105%' }}
					>
						{children}
					</m.div>
				</m.div>
			)}
		</AnimatePresence>
	)
}
