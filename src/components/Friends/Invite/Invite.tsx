import { CircleDollarSign, Gift } from 'lucide-react'
import toast from 'react-hot-toast'
import { useProfile } from '../../../hooks/useProfile'
import styles from './Invite.module.css'

export function Invite() {
	const { data } = useProfile()

	const text = `Привет! Пойдём тапать Макиму вместе в ReactMakimaCoin ❤
Ссылка для регистрации: https://reactmakimacoin.ru/reg?ref=${data?.id}`

	const getLink = () => {
		navigator.clipboard
			.writeText(text)
			.then(async () => {
				toast.success('Ссылка скопирована!')
			})
			.catch(err => console.error(err))
	}

	return (
		<div className={styles.row} onClick={getLink}>
			<Gift className={styles.icon} />
			<div className={styles.content}>
				<div className={styles.title}>Пригласить друга</div>
				<div className={styles.desc}>
					<span className={styles.money}>
						<CircleDollarSign className={styles.coin} /> +20000
					</span>
					для вас и вашего друга
				</div>
			</div>
		</div>
	)
}
