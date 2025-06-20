import { useVerification } from '@/components/Form/hooks/useVerification'
import { Verification } from '@/components/Form/Verification'
import { RMC_PAGES } from '@/config/pages-url.config'
import type { IVerification } from '@/types/auth.types'
import type { IWebsocketResponse } from '@/types/websocket.types'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useWebSocket from 'react-use-websocket'

export function VerificationPage() {
	const { reset } = useFormContext<IVerification>()

	const {
		data: verification,
		mutate: verificationMutate,
		isSuccess,
		isPending,
	} = useVerification()

	const [searchParams] = useSearchParams()

	const refId = searchParams.get('ref')
	const email = searchParams.get('email')!

	const onSubmit: SubmitHandler<IVerification> = data => {
		const info = {
			email,
			code: data.code,
		}

		if (data.code.length === 7) {
			verificationMutate(info)
		} else {
			toast.error('Невалидный код!')
		}
	}

	const navigate = useNavigate()

	const { sendJsonMessage } = useWebSocket<IWebsocketResponse>(
		import.meta.env.VITE_WEBSOCKET_BASE_URL,
		{
			share: true,
			shouldReconnect: () => true,
		}
	)

	useEffect(() => {
		if (
			verification?.data.status == 'error' &&
			verification?.data.message == 'Wrong code'
		) {
			toast.error('Неверный код!')
		} else if (
			verification?.data.status == 'error' &&
			verification?.data.message == 'Code not found'
		) {
			toast.error('Код с такой почтой не найден!')
		} else if (verification?.data.status == 'success') {
			toast.success('Почта успешно подтверждена!')
			reset()
			navigate(RMC_PAGES.AUTH)
			sendJsonMessage({
				type: 'refreshBalance',
				refId: refId,
			})
		}
	}, [
		refId,
		isSuccess,
		navigate,
		reset,
		verification?.data.message,
		verification?.data.status,
		sendJsonMessage,
	])

	return <Verification isPending={isPending} onSubmit={onSubmit} />
}
