import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { IVerification } from '../../../types/auth.types'

export function VerificationProvider({ children }: PropsWithChildren) {
	const methods = useForm<IVerification>({
		mode: 'onChange',
	})

	return <FormProvider {...methods}>{children}</FormProvider>
}
