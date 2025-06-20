import type { SubmitHandler } from 'react-hook-form'
import type { IVerification } from '../../../types/auth.types'

export interface IVerificationProps {
	isPending: boolean
	onSubmit: SubmitHandler<IVerification>
}
