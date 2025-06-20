import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { RMC_PAGES } from './config/pages-url.config'
import { isAuthAtom } from './store/store'

interface IMiddlewareProps {
	component: JSX.Element
}

export function Middleware(props: IMiddlewareProps) {
	const { component } = props

	const isAuth = useAtomValue(isAuthAtom)

	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const location = useLocation()

	useEffect(() => {
		if (!isAuth && location.pathname.includes('/i')) navigate(RMC_PAGES.AUTH)

		if (isAuth && !location.pathname.includes('/i')) navigate(RMC_PAGES.HOME)
		if (
			!isAuth &&
			searchParams.has('ref') &&
			location.pathname === RMC_PAGES.REG
		)
			return
	}, [component, isAuth, navigate, searchParams, location])

	return component
}
