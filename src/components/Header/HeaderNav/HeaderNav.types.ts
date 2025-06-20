import type { LucideIcon } from 'lucide-react'

export interface IHeaderNav {
	icon: LucideIcon
	title: string
	link: string
}

export interface IHeaderNavItemProps {
	item: IHeaderNav
}
