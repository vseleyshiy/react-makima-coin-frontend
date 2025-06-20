import { Form } from '@/components/Form'
import { REG } from '@/components/Form/Form.data'
import { RMC_PAGES } from '@/config/pages-url.config'
import { Middleware } from '@/Middleware'
import { authService } from '@/services/auth.service'
import type { IForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function RegPage() {
	const { reset, watch } = useFormContext<IForm>()

	const mutation = useMutation({
		mutationKey: ['reg'],
		mutationFn: (data: IForm) => authService.reg(data),
	})

	const { data, isSuccess } = mutation

	const watchPass1 = watch('password')
	const watchPass2 = watch('password2')
	const emailWatch = watch('email')

	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const refId = Number(searchParams.get('ref'))

	const onSubmit: SubmitHandler<IForm> = data => {
		const userData = {
			email: data.email,
			password: data.password,
			ref: refId ? refId : null,
		}

		if (watchPass1 === watchPass2) {
			mutation.mutate(userData)
		} else {
			toast.error('Пароли не совпадают!')
		}
	}

	useEffect(() => {
		if (
			data?.data.status == 'error' &&
			data?.data.message == 'User already exists'
		) {
			toast.error('Пользователь с такой почтой уже занят!')
		} else if (data?.data.status == 'success') {
			toast.success('Регистрация прошла успешно!')
			navigate(RMC_PAGES.VERIFICATION + `?email=${emailWatch}&ref=${refId}`)
			reset()
		}
	}, [
		refId,
		isSuccess,
		data?.data.message,
		data?.data.status,
		emailWatch,
		navigate,
		reset,
	])

	return (
		<Middleware
			component={<Form mutation={mutation} data={REG} onSubmit={onSubmit} />}
		/>
	)
}
