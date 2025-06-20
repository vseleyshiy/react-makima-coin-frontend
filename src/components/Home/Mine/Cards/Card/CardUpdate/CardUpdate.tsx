import { formattingTime } from '@/utils/formatting'
import { m } from 'framer-motion'
import { memo, useEffect, useState } from 'react'
import styles from './CardUpdate.module.css'
import type { ICardUpdateProps } from './CardUpdate.types'

export const CardUpdate = memo((props: ICardUpdateProps) => {
	const { updating } = props

	const [time, setTime] = useState<string | null>(null)
	const [progress, setProgress] = useState<number | null>(null)

	useEffect(() => {
		if (updating === null) return
		const interval = setInterval(() => {
			const currentUnixDate = +new Date()
			const cardUpdatingUnixTime = Date.parse(updating)
			const updateSecondsTime = Math.floor(
				(cardUpdatingUnixTime - currentUnixDate) / 1000
			)
			const deg = Math.floor((updateSecondsTime / 21600) * 360)
			const textTime = formattingTime(updateSecondsTime)
			if (updateSecondsTime === 0) {
				setTime(null)
				setProgress(null)
			}
			setTime(textTime)
			setProgress(deg)
		}, 1000)

		return () => clearInterval(interval)
	}, [updating])

	return time !== null && progress !== null ? (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.update__wrap}
		>
			<div
				className={styles.update}
				style={{
					background: `conic-gradient(var(--bright-black) ${progress}deg, var(--dark-black) 0%)`,
				}}
			>
				<div className={styles.timer}>
					{time}
					<span>Улучшение...</span>
				</div>
			</div>
		</m.div>
	) : null
})
