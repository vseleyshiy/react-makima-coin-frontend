import { SimpleLink } from '../../ui/links/SimpleLink'
import styles from './Info.module.css'
import { InfoWrap } from './InfoWrap'

export function Info() {
	return (
		<section className={styles.info}>
			<div className={styles.info__content}>
				<InfoWrap title='Кто мы такие?' custom={1}>
					<p className={styles.info__text}>
						Проект был разработан и поддерживается одним разработчиком (
						<SimpleLink
							target='_blank'
							to='https://vseleyshiy.github.io/visitka'
						>
							мной
						</SimpleLink>
						).
					</p>
					<p className={styles.info__text}>
						Тут вы не заработаете реальных денег - просто играйте в кайф и
						приглашайте своих друзей. Все новости вы можете отслеживать{' '}
						<SimpleLink target='_blank' to='https://t.me/vseleyshiy_official'>
							в телеграм канале Автора
						</SimpleLink>
						.
					</p>
				</InfoWrap>
				<InfoWrap title='Хотите поддержать?' custom={2}>
					<p className={styles.info__text}>
						Лучшей поддержкой от вас будет подписка на все соцсети, которые есть
						на этом сайте, приятные отзывы в телеграм чатике и просто ваше
						нахождение здесь)
					</p>
					<p className={styles.info__text}>
						Играйте в своё удовольствие и соревнуйтесь с другими игроками -
						приглашайте друзей и станьте лучшим для Макимы)) Удачи!
					</p>
				</InfoWrap>
				<InfoWrap title='Нашли баг?' custom={3}>
					<p className={styles.info__text}>
						Пишите разработчику в Telegram -{' '}
						<SimpleLink target='_blank' to='https://t.me/vseleyshiy'>
							vseleyshiy
						</SimpleLink>
					</p>
				</InfoWrap>
			</div>
		</section>
	)
}
