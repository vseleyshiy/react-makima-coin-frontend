import { useFormContext } from 'react-hook-form'
import { Link } from 'react-router-dom'
import type { IForm } from '../../../types/auth.types'
import { FormInput } from '../FormInput'
import styles from './FormLogin.module.css'
import type { IFormLoginProps } from './FormLogin.types'

export function FormLogin(props: IFormLoginProps) {
	const { data, onSubmit } = props

	const { handleSubmit } = useFormContext<IForm>()

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1 className={styles.title}>{data.title}</h1>
				{data.fields.map(item => (
					<div key={item.registerType} className={styles.form__row}>
						<FormInput registerType={item.registerType} info={item} />
					</div>
				))}
				<button className={styles.form__button}>{data.button}</button>
			</form>
			<span className={styles.link}>
				{data.afterButton.text}
				<Link to={data.afterButton.link} className={styles.button__link}>
					{data.afterButton.buttonText}
				</Link>
			</span>
		</>
	)
}
