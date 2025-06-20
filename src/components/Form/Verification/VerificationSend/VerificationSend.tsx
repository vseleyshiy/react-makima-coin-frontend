import { useSearchParams } from 'react-router-dom'
import { formattingTime } from '../../../../utils/formatting'
import { useCode } from '../../hooks/useCode'
import styles from './VerificationSend.module.css'
import type { IVerificationSendProps } from './VerificationSend.types'

export function VerificationSend(props: IVerificationSendProps) {
	const { timer, setTimer } = props

	const { mutate, isPending } = useCode()

	const [searchParams] = useSearchParams()

	const sendVerificationCode = () => {
		if (
			searchParams.get('email') === null ||
			!searchParams.get('email') ||
			searchParams.get('email') === ''
		)
			return

		setTimer(60)
		mutate({ email: searchParams.get('email')! })
	}

	return (
		<div className={styles.send}>
			<span className={styles.send__text}>
				Не пришёл код? Отправить снова через:
			</span>
			{timer > 0 ? (
				<span className={styles.timer}>{formattingTime(timer)}</span>
			) : (
				<button onClick={sendVerificationCode} className={styles.send__button}>
					{!isPending ? 'Отправить снова' : 'Отправка...'}
				</button>
			)}
		</div>
	)
}
