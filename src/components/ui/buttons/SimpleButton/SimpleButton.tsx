import { Link } from 'react-router-dom'
import type { IDefaultButtonProps } from '../buttons.types'
import styles from './SimpleButton.module.css'

export function SimpleButton(props: IDefaultButtonProps) {
	const { children, onClick, to, style } = props

	return (
		<Link
			to={to ? to : ''}
			onClick={onClick}
			style={style}
			className={styles.button}
		>
			{children}
		</Link>
	)
}
