import { CircleHelp } from 'lucide-react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import type { IForm } from '../../../types/auth.types'
import { ToastWarning } from '../../../utils/helpers'
import styles from './FormInput.module.css'
import { IFormInputProps } from './FormInput.types'
import { FormInputField } from './FormInputField'

export function FormInput(props: IFormInputProps) {
	const { info, registerType } = props

	const {
		formState: { errors },
	} = useFormContext<IForm>()

	const key = Object.keys(errors).find(item => item === info.registerType)
	const error = errors[key! as keyof FieldErrors<IForm>]?.message

	return (
		<>
			<span className={styles.error}>{error && error}</span>
			<div className={styles.form__rowInfo}>
				<label htmlFor={info.registerType} className={styles.form__rowTitle}>
					{registerType.charAt(0).toUpperCase() + registerType.slice(1)}
				</label>
				{info.registerType.includes('password') && (
					<CircleHelp
						className={styles.form__help}
						onClick={() => {
							ToastWarning({
								text: 'Пароль должен быть написан латинскими буквами, содержать минимум 8 символов, 1 число, 1 спецсимвол, 1 латинскую бувку в верхнем и нижнем регистре.',
							})
						}}
					/>
				)}
			</div>
			<FormInputField info={info} />
		</>
	)
}
