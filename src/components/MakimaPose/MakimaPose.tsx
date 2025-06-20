import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './MakimaPose.module.css'
import type { IMakimaPose } from './MakimaPose.types'

export function MakimaPose(props: IMakimaPose) {
	const { x, y, width, image, style } = props

	return (
		<div
			className={styles.hero__imgWrap}
			style={{
				transform: `translate(${x}px, ${y}px)`,
				width,
				...style,
			}}
		>
			<LazyLoadImage
				draggable='false'
				src={image}
				wrapperClassName={styles.hero__img}
				className={styles.hero__img}
			/>
		</div>
	)
}
