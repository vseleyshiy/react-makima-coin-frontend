import type { IRowProps } from '../../Header.types'
import styles from './SettingsRow.module.css'

export function SettingsRow(props: IRowProps) {
	const { input, defaultValue, onChange } = props

	return (
		<div className={styles.form__row}>
			<label className={styles.form__label} htmlFor={input.id}>
				{input.label}
			</label>
			<input
				name={input.id}
				className={styles.input}
				type={input.type}
				placeholder={input.placeholder}
				defaultValue={defaultValue}
				onChange={e => onChange?.(e.target.value)}
			/>
		</div>
	)
}
