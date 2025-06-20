import { AnimatePresence, m } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import styles from './Dialog.module.css'
import type { IDialogProps } from './Dialog.types'

export function Dialog(props: IDialogProps) {
	const { dialog, setDialog, children, differentRef } = props

	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!dialogRef.current) return
		if (dialog) {
			dialogRef.current.showModal()
			document.body.classList.add('lock')
		} else {
			dialogRef.current.close()
			document.body.classList.remove('lock')
		}
	}, [dialog, dialogRef, differentRef])

	return (
		<AnimatePresence>
			{dialog && (
				<m.dialog
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					transition={{ type: 'spring', stiffness: 500, damping: 30 }}
					className={styles.dialog}
					ref={dialogRef}
				>
					<div className={styles.dialog__inner} ref={differentRef}>
						<X
							className={styles.cross}
							onClick={() => {
								setDialog(false)
							}}
						/>
						<form className={styles.form} method='dialog'>
							{children}
						</form>
					</div>
				</m.dialog>
			)}
		</AnimatePresence>
	)
}
