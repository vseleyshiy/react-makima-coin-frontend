import { useUpdateUsername } from '@/components/Home/hooks/useUpdateUsername'
import { SimpleButton } from '@/components/ui/buttons/SimpleButton'
import { RMC_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { sectionFilterAtom } from '@/store/profile-store'
import { isAuthAtom } from '@/store/store'
import { balanceAtom, energyAtom } from '@/store/user-store'
import type { IWebsocketResponse } from '@/types/websocket.types'
import { useMutation } from '@tanstack/react-query'
import { useAtomValue, useSetAtom } from 'jotai'
import { LogOut } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useWebSocket from 'react-use-websocket'
import styles from './ProfileDialogButtons.module.css'
import type { IProfileDialogButtonsProps } from './ProfileDialogButtons.types'

export function ProfileDialogButtons(props: IProfileDialogButtonsProps) {
	const { nameWatch, setDialog } = props

	const section = useAtomValue(sectionFilterAtom)
	const setIsAuth = useSetAtom(isAuthAtom)
	const setBalance = useSetAtom(balanceAtom)
	const setEnergy = useSetAtom(energyAtom)

	const navigate = useNavigate()

	const close = () => setDialog(false)

	const { mutate: usernameMutate, isPending: usernamePending } =
		useUpdateUsername({
			username: nameWatch,
		})

	const { sendJsonMessage } = useWebSocket<IWebsocketResponse>(
		import.meta.env.VITE_WEBSOCKET_BASE_URL,
		{
			share: true,
			shouldReconnect: () => true,
		}
	)

	const { mutate: logoutMutate, isPending: logoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
	})

	const changeUsername = () => {
		if (nameWatch.length > 0) {
			usernameMutate()
			toast.success('Вы успешно изменили своё имя!')
			close()
		} else {
			toast.error('Вы должны хоть что-то поменять!')
		}
	}

	const logout = () => {
		logoutMutate()
		toast.success('Вы успешно вышли из аккаунта!')
		close()
		setIsAuth(false)
		navigate(RMC_PAGES.GENERAL)
		sendJsonMessage({ type: 'logout' })
		setBalance({
			balance: -1,
			type: 'another',
		})
		setEnergy(-1)
	}

	return (
		<div className={styles.buttons}>
			{section === 'user' ? (
				<>
					<SimpleButton onClick={changeUsername}>
						{usernamePending ? 'Сохранение...' : 'Сохранить'}
					</SimpleButton>
					<span onClick={logout} className={styles.logout__button}>
						{logoutPending ? (
							'Выходим...'
						) : (
							<>
								Выйти из аккаунта <LogOut className={styles.icon} />
							</>
						)}
					</span>
				</>
			) : null}
		</div>
	)
}
