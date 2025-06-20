import styles from './FormInfo.module.css'
import type { IFormInfoProps } from './FormInfo.types'

export function FormInfo(props: IFormInfoProps) {
	const { title } = props

	return (
		<div className={styles.info}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.text}>
				Скорее создавай и заходи в свой аккаунт, чтобы начать тапать Макиму.
				Зарабатывай игровую валюту, прокачивай свои карточки, пробивайся в топ и
				приглашай своих друзей! Общайся с другими игроками в Телеграмм Чате.
			</p>
		</div>
	)
}
