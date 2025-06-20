import { m } from 'framer-motion'
import { appearanceAnimation } from '../../../../utils/animations'
import styles from './InfoWrap.module.css'
import type { IInfoWrapProps } from './InfoWrap.types'

export function InfoWrap(props: IInfoWrapProps) {
	const { title, custom, children } = props

	return (
		<m.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			className={styles.info__info}
		>
			<m.h1
				variants={appearanceAnimation}
				viewport={{ amount: 'all' }}
				custom={custom}
				className={styles.info__title}
			>
				{title}
			</m.h1>
			<m.div
				variants={appearanceAnimation}
				viewport={{ amount: 'all' }}
				custom={custom}
				className={styles.info__list}
			>
				{children}
			</m.div>
		</m.div>
	)
}
