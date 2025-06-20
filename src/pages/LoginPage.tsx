import { Form } from '@/components/Form'
import { AUTH } from '@/components/Form/Form.data'
import { RMC_PAGES } from '@/config/pages-url.config'
import { Middleware } from '@/Middleware'
import { authService } from '@/services/auth.service'
import { isAuthAtom } from '@/store/store'
import type { IForm } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
	const { reset, watch } = useFormContext<IForm>()

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IForm) => authService.login(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			queryClient.invalidateQueries({ queryKey: ['card'] })
			queryClient.invalidateQueries({ queryKey: ['task'] })
			queryClient.invalidateQueries({ queryKey: ['get friends'] })
		},
	})

	const { data, isSuccess } = mutation

	const setIsAuth = useSetAtom(isAuthAtom)
	const navigate = useNavigate()
	const emailWatch = watch('email')

	useEffect(() => {
		if (
			data?.data.status == 'error' &&
			data?.data.message == 'User not found'
		) {
			toast.error('Пользователь с такой почтой не найден!')
		} else if (
			data?.data.status == 'success' &&
			data.data.message == 'Success send code'
		) {
			navigate(RMC_PAGES.VERIFICATION + `?email=${emailWatch}`)
			reset()
		} else if (
			data?.data.status == 'error' &&
			data.data.message == 'Wrong password'
		) {
			toast.error('Неверный пароль!')
		} else if (data?.data.status == 'success') {
			reset()
			setIsAuth(true)
			navigate(RMC_PAGES.HOME)
			toast.success('Авторизация прошла успешно!')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess])

	const onSubmit: SubmitHandler<IForm> = data => {
		mutation.mutate(data)
	}

	return (
		<Middleware
			component={<Form mutation={mutation} data={AUTH} onSubmit={onSubmit} />}
		/>
	)
}
