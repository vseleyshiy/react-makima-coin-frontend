import { Contacts } from './Contacts'
import { Footer } from './Footer'
import styles from './General.module.css'
import { Hero } from './Hero'
import { Info } from './Info'
import { Rating } from './Rating'

export function General() {
	return (
		<div className={styles.wrap}>
			<Contacts />
			<Hero />
			<Rating />
			<Info />
			<Footer />
		</div>
	)
}
