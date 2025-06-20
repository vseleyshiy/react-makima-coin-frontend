import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loader } from '../../ui/loaders/Loader'
import styles from './Verification.module.css'
import type { IVerificationProps } from './Verification.types'
import { VerificationForm } from './VerificationForm'
import { VerificationSend } from './VerificationSend'

export function Verification(props: IVerificationProps) {
	const { isPending, onSubmit } = props

	const [searchParams] = useSearchParams()

	const [timer, setTimer] = useState(60)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer - 1)
		}, 1000)

		if (timer === 0) {
			clearInterval(interval)
			return
		}

		return () => {
			clearInterval(interval)
		}
	}, [timer])

	return isPending ? (
		<Loader />
	) : (
		<div className={styles.main}>
			<div className={styles.block}>
				<div className={styles.title}>Подтвердите вашу почту</div>
				<div className={styles.text}>
					Мы отправили код для подтверждения на почту{' '}
					<span style={{ borderBottom: '1px solid white' }}>
						{searchParams.get('email')}
					</span>
					{''}. Не забудьте проверить папку "Спам".
				</div>
				<VerificationForm onSubmit={onSubmit} />
				<VerificationSend setTimer={setTimer} timer={timer} />
			</div>
		</div>
	)
}
