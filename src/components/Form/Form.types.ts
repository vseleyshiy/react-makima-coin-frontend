import type { UseMutationResult } from '@tanstack/react-query'
import type { SubmitHandler } from 'react-hook-form'
import type { To } from 'react-router-dom'
import type { IForm } from '../../types/auth.types'
import type { IFormInfo } from './FormInfo/FormInfo.types'

export interface IFormData {
	mainTitle: string
	title: string
	button: string
	afterButton: {
		text: string
		buttonText: string
		link: To
	}
	fields: IFormInfo[]
}

export interface IFormProps {
	data: IFormData
	mutation: UseMutationResult<unknown, Error, IForm, unknown>
	onSubmit: SubmitHandler<IForm>
}
