import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { IForm } from '../../types/auth.types'

export function LoginProvider({ children }: PropsWithChildren) {
	const methods = useForm<IForm>({
		mode: 'onChange',
	})

	return <FormProvider {...methods}>{children}</FormProvider>
}
