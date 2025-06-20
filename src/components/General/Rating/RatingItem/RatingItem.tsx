import cn from 'clsx'
import { m } from 'framer-motion'
import { CircleDollarSign, Ellipsis } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useOutside } from '../../../../hooks/useOutside'
import { useWindowDimensions } from '../../../../hooks/useWindowDimensions'
import { adaptiveRating, getRatingColor } from '../../../../utils/helpers'
import styles from './RatingItem.module.css'
import type { IRatingItemProps } from './RatingItem.types'

export function RatingItem(props: IRatingItemProps) {
	const { user } = props

	const [mediaQuery, setMediaQuery] = useState(false)
	const [string, setString] = useState(45)

	const { width } = useWindowDimensions()
	const { ref, isShow, setIsShow } = useOutside<HTMLDivElement>(true)

	useEffect(() => {
		const info = {
			width,
			setFn: setString,
			mediaFn: setMediaQuery,
			stateFn: setIsShow,
		}

		adaptiveRating(info)
	}, [width, setIsShow])

	const open = () => setIsShow(true)
	const color = getRatingColor(user.role)

	return (
		<li className={styles.rating__item}>
			<div className={styles.rating__itemMain}>
				<div className={styles.rating__username}>
					{user.username !== null
						? user.username.length > 20
							? user.username.substring(0, string) + '...'
							: user.username
						: 'Anonymous'}
				</div>
				<div
					style={{
						color,
					}}
					className={cn(styles.rating__role, {
						[styles.rating__maxRole]: user.role === 'MacMakLovin',
					})}
				>
					{user.role}
				</div>
			</div>
			{mediaQuery ? <Ellipsis onClick={open} /> : null}
			{!mediaQuery ? (
				<m.div className={styles.rating__itemInfo}>
					<div className={styles.rating__balance}>
						<CircleDollarSign className={styles.balance__icon} /> {user.balance}
					</div>
					<div className={styles.rating__profit}>
						{' '}
						<CircleDollarSign className={styles.balance__icon} />{' '}
						{user.hourProfit} / час
					</div>
				</m.div>
			) : isShow ? (
				<m.div ref={ref} className={styles.rating__itemInfo}>
					<div className={styles.rating__balance}>
						<CircleDollarSign className={styles.balance__icon} /> {user.balance}
					</div>
					<div className={styles.rating__profit}>
						{' '}
						<CircleDollarSign className={styles.balance__icon} />{' '}
						{user.hourProfit} / час
					</div>
				</m.div>
			) : null}
		</li>
	)
}
