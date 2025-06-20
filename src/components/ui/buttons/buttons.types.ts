import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import type { To } from 'react-router-dom'

export interface IDefaultButtonProps {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
	to?: To
	style?: CSSProperties
}
