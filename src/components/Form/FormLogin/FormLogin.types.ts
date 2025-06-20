import type { SubmitHandler } from 'react-hook-form'
import type { IForm } from '../../../types/auth.types'
import type { IFormData } from '../Form.types'

// export interface IFormLogin {}

export interface IFormLoginProps {
	data: IFormData
	onSubmit: SubmitHandler<IForm>
}
