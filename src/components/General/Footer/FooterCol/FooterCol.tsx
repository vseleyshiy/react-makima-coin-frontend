import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import cn from 'clsx'
import { m } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import styles from './FooterCol.module.css'
import type { IFooterColProps } from './FooterCol.types'

export function FooterCol(props: IFooterColProps) {
	const { children, title } = props

	const [active, setActive] = useState(false)

	const [mediaQuery, setMediaQuery] = useState(false)
	const { width } = useWindowDimensions()

	useEffect(() => {
		if (width <= 480) {
			setMediaQuery(true)
		} else {
			setMediaQuery(false)
		}
	}, [width])

	return (
		<div onClick={() => setActive(!active)} className={styles.footer__col}>
			<div className={styles.footer__title}>
				{title}
				{mediaQuery ? (
					<ChevronDown
						style={{
							transition: 'rotate 0.3s ease',
							rotate: active ? '-180deg' : undefined,
						}}
					/>
				) : null}
			</div>
			<m.div
				animate={{
					translateY: active || !mediaQuery ? 0 : '-10px',
					opacity: active || !mediaQuery ? 1 : 0,
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				className={cn(styles.footer__list, {
					[styles.open]: active,
				})}
			>
				{children}
			</m.div>
		</div>
	)
}
