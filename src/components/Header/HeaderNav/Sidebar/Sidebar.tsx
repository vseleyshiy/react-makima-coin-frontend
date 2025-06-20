import cn from 'clsx'
import { AnimatePresence, m } from 'framer-motion'
import { useAtom } from 'jotai'
import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { isCollapsedAtom } from '../../../../store/store'
import { isActive } from '../../../../utils/helpers'
import { HEADER_NAV } from '../HeaderNav.data'
import styles from './Sidebar.module.css'

export function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

	const close = () => setIsCollapsed(true)

	const { pathname } = useLocation()

	return (
		<AnimatePresence>
			{!isCollapsed && (
				<m.aside
					className={styles.aside}
					initial={{ width: 0, opacity: 0 }}
					animate={{
						color: 'rgb(255, 255, 255)',
						width: 200,
						opacity: 1,
					}}
					exit={{ width: 0, opacity: 0 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				>
					<div className={styles.list}>
						{HEADER_NAV.map(item => (
							<Link
								key={item.link}
								onClick={close}
								className={cn(styles.item, {
									[styles.active]: isActive(item.link, pathname),
								})}
								to={item.link}
							>
								<span className={styles.item__main}>
									<item.icon size={15} />
									{item.title}
								</span>
								<ChevronRight size={20} />
							</Link>
						))}
					</div>
				</m.aside>
			)}
		</AnimatePresence>
	)
}
