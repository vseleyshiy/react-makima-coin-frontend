import { useFormContext } from 'react-hook-form'
import type { IVerification } from '../../../../types/auth.types'
import { formatCode } from '../../../../utils/formatting'
import styles from './VerificationInput.module.css'

export function VerificationInput() {
	const { register, setValue } = useFormContext<IVerification>()

	return (
		<input
			{...register('code', {
				validate: {
					isValid: value => /^\d{3} \d{3}$/.test(formatCode(value)) || '',
				},
				onChange: e => setValue('code', formatCode(e.target.value)),
				max: 7,
			})}
			placeholder='ВВЕДИТЕ КОД'
			className={styles.field}
			type='text'
		/>
	)
}
