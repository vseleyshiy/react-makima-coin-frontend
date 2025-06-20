import { sectionFilterAtom } from '@/store/profile-store'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { ChevronRight } from 'lucide-react'
import { PROFILE_NAV } from './ProfileNav.data'
import styles from './ProfileNav.module.css'

export function ProfileNav() {
	const [section, setSection] = useAtom(sectionFilterAtom)

	return (
		<nav className={styles.nav}>
			{PROFILE_NAV.map(item => (
				<button
					key={item.title}
					className={cn(styles.item, {
						[styles.active]: item.link === section,
					})}
					onClick={() => setSection(item.link)}
				>
					<span className={styles.item__main}>
						<item.icon size={15} />
						{item.title}
					</span>
					<ChevronRight size={20} />
				</button>
			))}
		</nav>
	)
}
