import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { LoginProvider } from './components/Form/LoginProvider'
import { VerificationProvider } from './components/Form/Verification/VerificationProvider'
import { RMC_PAGES } from './config/pages-url.config'
import { usePrevious } from './hooks/usePrevious'
import { useProfile } from './hooks/useProfile'
import { BoostPage } from './pages/(logged-in)/BoostPage'
import { EarnPage } from './pages/(logged-in)/EarnPage'
import { FriendsPage } from './pages/(logged-in)/FriendsPage'
import { HomePage } from './pages/(logged-in)/HomePage'
import { GeneralPage } from './pages/GeneralPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RegPage } from './pages/RegPage'
import { VerificationPage } from './pages/VerificationPage'
import { getAccessToken } from './services/auth-token.service'
import { isAuthAtom } from './store/store'
import { secondsAtom, timerActiveAtom } from './store/timer-store'
import { balanceAtom, barAtom, energyAtom } from './store/user-store'
import type { IWebsocketResponse } from './types/websocket.types'

export function App() {
	const { data, isLoading, isSuccess } = useProfile()

	const [balance, setBalance] = useAtom(balanceAtom)
	const [isAuth, setIsAuth] = useAtom(isAuthAtom)

	const [energy, setEnergy] = useAtom(energyAtom)
	const [timerActive, setTimerActive] = useAtom(timerActiveAtom)
	const [seconds, setSeconds] = useAtom(secondsAtom)

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) {
			setIsAuth(true)
		} else {
			setIsAuth(false)
		}
	}, [setIsAuth])

	useEffect(() => {
		const localTheme = localStorage.getItem('theme')

		if (localTheme) document.body.setAttribute('data-theme', localTheme)
	}, [])

	const { lastJsonMessage, sendJsonMessage, readyState } =
		useWebSocket<IWebsocketResponse>(import.meta.env.VITE_WEBSOCKET_BASE_URL, {
			share: true,
			shouldReconnect: () => true,
		})

	const setBar = useSetAtom(barAtom)

	const prevBalance = usePrevious(balance)

	useEffect(() => {
		if (readyState === ReadyState.OPEN && isAuth) {
			if (balance.balance === -1 || !data) return
			if (data?.forUp !== null) {
				const cut = (balance.balance / data.forUp) * 100
				setBar(cut)
			}

			if ((balance.type === 'click' || balance.type === 'afk') && prevBalance) {
				const toUpOn = balance.balance - prevBalance.balance
				const sendData = {
					toUpOn,
					type: balance.type,
					id: data?.id,
				}
				sendJsonMessage(sendData)
			}
		}
	}, [
		readyState,
		balance.balance,
		balance.type,
		data,
		isAuth,
		prevBalance,
		sendJsonMessage,
		setBar,
	])

	useEffect(() => {
		if (!lastJsonMessage || lastJsonMessage === null) return
		if (lastJsonMessage.balance) {
			setBalance({
				type: 'initial',
				balance: lastJsonMessage.balance,
			})
		}
		if (lastJsonMessage.energy) {
			setEnergy(lastJsonMessage.energy)
		}
	}, [lastJsonMessage, setBalance, setEnergy])

	// add balance on useEffect
	useEffect(() => {
		if (isSuccess && data && isAuth) {
			const interval = setInterval(() => {
				const add =
					Math.floor(data?.click * 1.2) + Math.floor(data?.hourProfit / 60 / 20)
				setBalance({
					type: 'afk',
					balance: balance.balance + add,
				})
			}, 3000)

			return () => clearInterval(interval)
		}
	}, [isLoading, isSuccess, balance, data, setBalance, isAuth])

	// add energy on useEffect
	useEffect(() => {
		if (!isAuth) return
		if (!data?.energy) return
		const interval = setInterval(() => {
			if (energy < data?.energy) {
				setEnergy(prev => prev + 10)
			}
		}, 3000)

		return () => clearInterval(interval)
	}, [isLoading, isSuccess, energy, data?.energy, setEnergy, isAuth])

	// task timer
	useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1)
			localStorage.setItem('seconds', String(seconds - 1))
		} else if (Number(localStorage.getItem('seconds')) > 0) {
			setTimerActive(true)
			setSeconds(Number(localStorage.getItem('seconds')))
		} else {
			setTimerActive(false)
			setSeconds(60)
			localStorage.removeItem('seconds')
		}
	}, [seconds, timerActive, setSeconds, setTimerActive])

	return (
		<Routes>
			<Route>
				<Route path={RMC_PAGES.GENERAL} element={<GeneralPage />} />
				<Route path={RMC_PAGES.HOME} element={<HomePage />} />
				<Route path={RMC_PAGES.BOOST} element={<BoostPage />} />
				<Route path={RMC_PAGES.EARN} element={<EarnPage />} />
				<Route path={RMC_PAGES.FRIENDS} element={<FriendsPage />} />
				<Route
					path={RMC_PAGES.AUTH}
					element={
						<LoginProvider>
							<LoginPage />
						</LoginProvider>
					}
				/>
				<Route
					path={RMC_PAGES.REG}
					element={
						<LoginProvider>
							<RegPage />
						</LoginProvider>
					}
				/>
				<Route
					path={RMC_PAGES.VERIFICATION}
					element={
						<VerificationProvider>
							<VerificationPage />
						</VerificationProvider>
					}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}
