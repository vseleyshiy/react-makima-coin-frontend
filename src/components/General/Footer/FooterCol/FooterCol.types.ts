import type { MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

export interface IFooterCol {
	title: string
	link: string
}

export interface IFooterColProps {
	title: string
	children: ReactNode | MotionValue<number> | MotionValue<string>
}
