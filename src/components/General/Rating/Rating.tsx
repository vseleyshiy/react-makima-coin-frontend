import { m } from 'framer-motion'
import { Loader } from '../../ui/loaders/Loader'
import { useTopUsers } from '../hooks/useTopUsers'
import styles from './Rating.module.css'
import { RatingItem } from './RatingItem'

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export function Rating() {
	const { data, isLoading } = useTopUsers()

	return isLoading ? (
		<Loader />
	) : (
		<section className={styles.rating}>
			<div className={styles.rating__content}>
				<m.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className={styles.rating__info}
				>
					<m.h2
						custom={1}
						variants={textAnimation}
						viewport={{ amount: 'all' }}
						className={styles.rating__title}
					>
						Стань первым в списке!
					</m.h2>
					<m.p
						custom={2}
						variants={textAnimation}
						viewport={{ amount: 'all', once: true }}
						className={styles.rating__text}
					>
						Это рейтинг{' '}
						<span style={{ color: 'rgb(255, 110, 110)' }}>
							топ 5 игроков RMC.
						</span>{' '}
						(Обновляется каждые 24 часа)
					</m.p>
				</m.div>
				{data?.length ? (
					<ul className={styles.rating__list}>
						{data?.map(item => (
							<RatingItem key={item.id} user={item} />
						))}
					</ul>
				) : null}
			</div>
		</section>
	)
}
