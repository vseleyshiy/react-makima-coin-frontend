import type { IVerification } from '@/types/auth.types'
import type { SubmitHandler } from 'react-hook-form'

export interface IVerificationForm {
	onSubmit: SubmitHandler<IVerification>
}

// export interface IVerificationFormProps {}
