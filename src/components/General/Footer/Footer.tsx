import { RMC_PAGES } from '../../../config/pages-url.config'
import { Logo } from '../../Logo'
import { SimpleLink } from '../../ui/links/SimpleLink'
import { FOOTER_COLS } from './Footer.data'
import styles from './Footer.module.css'
import { FooterCol } from './FooterCol'

export function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.footer__main}>
					<FooterCol title='Навигация по сайту'>
						<SimpleLink to={RMC_PAGES.HOME}>Играть!</SimpleLink>
					</FooterCol>
					<FooterCol title='Контакты'>
						{FOOTER_COLS.map(item => (
							<SimpleLink key={item.link} target='_blank' to={item.link}>
								{item.title}
							</SimpleLink>
						))}
					</FooterCol>
				</div>
				<div className={styles.footer__info}>
					<Logo />
					<div className={styles.footer__copyright}>
						© 2025. Copyright by reactmakimacoin x vseleyshiy
					</div>
				</div>
			</div>
		</div>
	)
}
