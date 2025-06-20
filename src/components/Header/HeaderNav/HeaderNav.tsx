import cn from 'clsx'
import { useAtom } from 'jotai'
import { SquareChevronLeft, SquareChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions'
import { isCollapsedAtom } from '../../../store/store'
import { isActive } from '../../../utils/helpers'
import { Logo } from '../../Logo'
import { HEADER_NAV } from './HeaderNav.data'
import styles from './HeaderNav.module.css'
import { Sidebar } from './Sidebar'

export function HeaderNav() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

	const toggleSidebar = () => setIsCollapsed(!isCollapsed)

	const [mediaQuery, setMediaQuery] = useState(false)

	const { width } = useWindowDimensions()

	useEffect(() => {
		if (width <= 768) {
			setMediaQuery(true)
		} else {
			setMediaQuery(false)
		}
	}, [width])

	const { pathname } = useLocation()

	return (
		<>
			<Sidebar />
			<div className={styles.header}>
				<Logo />
				{!mediaQuery ? (
					<div className={styles.list}>
						{HEADER_NAV.map(item => (
							<Link
								key={item.title}
								className={cn(styles.link, {
									[styles.active]: isActive(item.link, pathname),
								})}
								to={item.link}
							>
								{item.title}
							</Link>
						))}
					</div>
				) : (
					<div className={styles.menu} onClick={toggleSidebar}>
						{isCollapsed ? (
							<SquareChevronLeft className={styles.menu__icon} />
						) : (
							<SquareChevronRight className={styles.menu__icon} />
						)}
					</div>
				)}
			</div>
		</>
	)
}
