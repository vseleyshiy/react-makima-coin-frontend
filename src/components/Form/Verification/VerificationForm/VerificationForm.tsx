import { useFormContext } from 'react-hook-form'
import type { IVerification } from '../../../../types/auth.types'
import { VerificationInput } from '../VerificationInput'
import styles from './VerificationForm.module.css'
import type { IVerificationForm } from './VerificationForm.types'

export function VerificationForm(props: IVerificationForm) {
	const { onSubmit } = props

	const { handleSubmit } = useFormContext<IVerification>()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<VerificationInput />
			<button type='submit' className={styles.button}>
				Подтвердить
			</button>
		</form>
	)
}
