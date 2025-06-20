import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IForm } from '../../../../types/auth.types'
import styles from './FormInputField.module.css'
import type { IFormInputFieldProps } from './FormInputField.types'

export function FormInputField(props: IFormInputFieldProps) {
	const { info } = props

	const { register } = useFormContext<IForm>()

	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(!showPassword)

	const isPassword = info.registerType.includes('password')

	return (
		<div className={styles.form__inputWrap}>
			<input
				id={info.registerType}
				className={styles.form__input}
				type={isPassword ? (showPassword ? 'text' : 'password') : 'email'}
				placeholder={info.placeholder}
				{...(isPassword
					? {
							...register(info.registerType, {
								required: info.registerRequired,
								pattern: {
									value:
										/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
									message: 'Невалидный пароль!',
								},
							}),
					  }
					: {
							...register(info.registerType, {
								required: info.registerRequired,
							}),
					  })}
			/>
			{isPassword &&
				(showPassword ? (
					<Eye
						className={styles.form__inputButton}
						onClick={handleClickShowPassword}
					/>
				) : (
					!showPassword && (
						<EyeOff
							className={styles.form__inputButton}
							onClick={handleClickShowPassword}
						/>
					)
				))}
		</div>
	)
}
