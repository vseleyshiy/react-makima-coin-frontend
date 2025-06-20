import { Gamepad2, Info } from 'lucide-react'
import { RMC_PAGES } from '../../../config/pages-url.config'
import type { IHeaderNav } from './HeaderNav.types'

export const HEADER_NAV: IHeaderNav[] = [
	{
		icon: Info,
		title: 'Главная',
		link: RMC_PAGES.GENERAL,
	},
	{
		icon: Gamepad2,
		title: 'Играть',
		link: RMC_PAGES.HOME,
	},
]
