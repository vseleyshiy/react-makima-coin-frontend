import { ChevronsLeft } from 'lucide-react'
import { CONTACTS } from './Contacts.data'
import styles from './Contacts.module.css'

export function Contacts() {
	return (
		<div className={styles.contacts}>
			<div className={styles.contacts__list}>
				{CONTACTS.map(item => (
					<a
						key={item.link}
						href={item.link}
						target='_blank'
						className={styles.contact__link}
					>
						<div className={styles.contact__imgWrap}>
							<img
								className={styles.contact__img}
								src={item.icon}
								alt={item.title}
							/>
						</div>
					</a>
				))}
			</div>
			<h2 className={styles.contacts__title}>
				{' '}
				<ChevronsLeft /> ТГК Автора | Новости RMC
			</h2>
		</div>
	)
}
