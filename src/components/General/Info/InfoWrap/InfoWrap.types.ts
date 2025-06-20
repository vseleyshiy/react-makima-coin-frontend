import type { MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

// export interface IInfoWrap {}

export interface IInfoWrapProps {
	title: string
	custom: number
	children: ReactNode | MotionValue<number> | MotionValue<string>
}
