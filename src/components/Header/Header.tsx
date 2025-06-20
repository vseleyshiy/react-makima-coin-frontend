import { RMC_PAGES } from '@/config/pages-url.config'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import { isAuthAtom } from '@/store/store'
import { useAtomValue } from 'jotai'
import { LogIn } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SimpleLink } from '../ui/links/SimpleLink'
import { Loader } from '../ui/loaders/Loader'
import styles from './Header.module.css'
import { HeaderNav } from './HeaderNav'
import { ProfileDialog } from './ProfileDialog'

export function Header() {
	const { data, isLoading } = useProfile()
	const isAuth = useAtomValue(isAuthAtom)

	const open = () => setIsShow(true)

	const { ref, isShow, setIsShow } = useOutside<HTMLDivElement>(false)

	return isLoading ? (
		<Loader />
	) : (
		<>
			<ProfileDialog profileRef={ref} dialog={isShow} setDialog={setIsShow} />
			<header className={styles.header}>
				<div className={styles.info}>
					{isAuth ? (
						<>
							<div className={styles.imgWrap}>
								<LazyLoadImage
									placeholderSrc='/avatar-small.webp'
									wrapperClassName={styles.img}
									className={styles.img}
									effect='blur'
									src='/avatar.webp'
									draggable='false'
								/>
							</div>
							<div onClick={open} className={styles.username}>
								<div className={styles.name}>
									{data?.username && data?.username !== null
										? data?.username.length > 10
											? data?.username.substring(0, 10) + '...'
											: data?.username
										: 'Anonymous'}
								</div>
								<div className={styles.downtitle}>
									Нажмите, чтобы увидеть больше
								</div>
							</div>
						</>
					) : (
						<SimpleLink
							to={RMC_PAGES.AUTH}
							style={{
								color: 'white',
								display: 'flex',
								columnGap: '3px',
								alignItems: 'center',
							}}
						>
							Войти
							<LogIn className={styles.icon} />
						</SimpleLink>
					)}
				</div>
				<HeaderNav />
			</header>
		</>
	)
}
