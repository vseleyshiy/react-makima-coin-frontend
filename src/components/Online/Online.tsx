import type { IWebsocketResponse } from '@/types/websocket.types'
import { formatAbsenceTime } from '@/utils/formatting'
import { AnimatePresence, m } from 'framer-motion'
import { CircleDollarSign } from 'lucide-react'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import styles from './Online.module.css'

export function Online() {
	const { lastJsonMessage } = useWebSocket<IWebsocketResponse>(
		import.meta.env.VITE_WEBSOCKET_BASE_URL,
		{
			share: true,
			shouldReconnect: () => true,
		}
	)
	const [open, setOpen] = useState(false)
	const [data, setData] = useState<IWebsocketResponse | null>(null)

	useEffect(() => {
		if (!lastJsonMessage && lastJsonMessage === null) return
		if (lastJsonMessage.time) {
			setData(lastJsonMessage)
			if (lastJsonMessage.time > 300) setOpen(true)
		}
	}, [lastJsonMessage])

	const close = () => setOpen(false)

	return data !== null ? (
		<AnimatePresence>
			{open ? (
				<m.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					className={styles.online}
				>
					<m.div
						initial={{ opacity: 0, transform: 'translateY(20px)' }}
						animate={{
							opacity: 1,
							transform: 'translateY(0px)',
						}}
						exit={{ opacity: 0, transform: 'translateY(20px)' }}
						className={styles.block}
					>
						<div className={styles.title}>
							{formatAbsenceTime(data.time)}, вы заработали
						</div>
						<div className={styles.money}>
							<CircleDollarSign /> +{data.earn}
						</div>
						<button onClick={close} className={styles.button}>
							Спасибо!
						</button>
					</m.div>
				</m.div>
			) : null}
		</AnimatePresence>
	) : null
}
