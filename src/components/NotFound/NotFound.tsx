import { RMC_PAGES } from '@/config/pages-url.config'
import { SimpleLink } from '../ui/links/SimpleLink'
import styles from './NotFound.module.css'

export function NotFound() {
	return (
		<div className={styles.page}>
			<div className={styles.img__wrap}>
				<img
					className={styles.img}
					src='/not_found.webp'
					alt='not found image'
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>
					Упс, похоже этой страницы не существует...
				</div>
				<SimpleLink to={RMC_PAGES.GENERAL}>Вернуться на главную</SimpleLink>
			</div>
		</div>
	)
}
