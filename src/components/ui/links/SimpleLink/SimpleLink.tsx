import { Link } from 'react-router-dom'
import type { IDefaultLinkProps } from '../links.types'
import styles from './SimpleLink.module.css'

export function SimpleLink(props: IDefaultLinkProps) {
	const { to, onClick, children, style, target } = props

	return (
		<Link
			target={target}
			className={styles.link}
			to={to ? to : ''}
			style={style}
			onClick={onClick}
		>
			{children}
		</Link>
	)
}
