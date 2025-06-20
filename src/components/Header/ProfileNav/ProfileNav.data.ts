import { LayoutGrid, Settings } from 'lucide-react'
import type { IProfileNav } from './ProfileNav.types'

export const PROFILE_NAV: IProfileNav[] = [
	{
		icon: LayoutGrid,
		title: 'Пользователь',
		link: 'user',
	},
	{
		icon: Settings,
		title: 'Настройки',
		link: 'settings',
	},
]
