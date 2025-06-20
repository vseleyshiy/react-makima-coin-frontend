import { m } from 'framer-motion'
import { MiniLoader } from '../ui/loaders/MiniLoader'
import styles from './Form.module.css'
import type { IFormProps } from './Form.types'
import { FormInfo } from './FormInfo'
import { FormLogin } from './FormLogin'

export function Form(props: IFormProps) {
	const { mutation, data, onSubmit } = props

	return (
		<div className={styles.form__wrap}>
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.form__block}
			>
				<FormInfo title={data.mainTitle} />
				<div className={styles.form__base}>
					{mutation.isPending ? (
						<MiniLoader />
					) : (
						<FormLogin data={data} onSubmit={onSubmit} />
					)}
				</div>
			</m.div>
		</div>
	)
}
