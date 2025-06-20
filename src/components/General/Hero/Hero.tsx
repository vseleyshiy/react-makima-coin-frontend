import { m } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { RMC_PAGES } from '../../../config/pages-url.config'
import { appearanceAnimation } from '../../../utils/animations'
import { MakimaPose } from '../../MakimaPose'
import { MAKIMAS } from './Hero.data'
import styles from './Hero.module.css'

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export function Hero() {
	const navigate = useNavigate()

	return (
		<m.section initial='hidden' whileInView='visible' className={styles.hero}>
			<div className={styles.hero__content}>
				<div className={styles.hero__info}>
					<m.h1 variants={textAnimation} className={styles.hero__title}>
						ReactMakimaCoin
						{MAKIMAS.map(item => (
							<MakimaPose
								key={item.image}
								image={item.image}
								width={item.width}
								x={item.x}
								y={item.y}
								style={item.style}
							/>
						))}
					</m.h1>
					<m.span
						custom={2}
						variants={textAnimation}
						className={styles.hero__text}
					>
						Игра-кликер, в которой главным персонажем является{' '}
						<span style={{ color: 'rgb(255, 110, 110)' }}>Макима</span> из аниме
						"Человек-Бензопила" (2022).
					</m.span>
					<m.button
						variants={appearanceAnimation}
						custom={3}
						onClick={() => {
							navigate(RMC_PAGES.HOME)
						}}
						className={styles.play}
					>
						Играть сейчас!
					</m.button>
				</div>
			</div>
		</m.section>
	)
}
