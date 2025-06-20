import type { IWebsocketResponse } from '@/types/websocket.types'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import useWebSocket from 'react-use-websocket'
import { useProfile } from '../../../hooks/useProfile'
import { balanceAtom, barAtom } from '../../../store/user-store'
import { Loader } from '../../ui/loaders/Loader'
import { useUpdateRoleLvl } from '../hooks/useUpdateRoleLvl'
import styles from './Progress.module.css'

export function Progress() {
	const { data, isLoading } = useProfile()

	const barRef = useRef<HTMLDivElement>(null)
	const bar = useAtomValue(barAtom)
	const balance = useAtomValue(balanceAtom)

	const { mutate, isSuccess } = useUpdateRoleLvl()

	const { sendJsonMessage } = useWebSocket<IWebsocketResponse>(
		import.meta.env.VITE_WEBSOCKET_BASE_URL,
		{
			share: true,
			shouldReconnect: () => true,
		}
	)

	useEffect(() => {
		if (!barRef.current) return
		if (data?.forUp !== null && data) {
			if (balance.balance >= data.forUp) {
				mutate({ ref: data.ref, roleLvl: data.roleLvl })
			}
			barRef.current.style.width = `${bar}%`
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bar, data])

	useEffect(() => {
		if (isSuccess && data?.ref) {
			sendJsonMessage({
				type: 'refreshBalance',
				id: data.ref,
			})
		}
	}, [isSuccess, sendJsonMessage, data?.ref])

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.progress}>
			<div className={styles.info}>
				<div className={styles.role}>{data?.role}</div>
				<div className={styles.lvl}>
					Level
					<span className={styles.lvlValue}>
						{data?.forUp !== null ? data?.roleLvl + '/5' : 'MAX'}
					</span>
				</div>
			</div>
			<div className={styles.bar}>
				<div ref={barRef} className={styles.passed}></div>
			</div>
		</div>
	)
}
