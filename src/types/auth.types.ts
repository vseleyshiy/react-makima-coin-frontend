export interface IForm {
	email: string
	password: string
	password2?: string
	ref?: number | null
}

export type TypeAuth = Omit<IForm, 'password2'>

export interface IVerification {
	email: string
	code: string
}

export interface IGetCode {
	email: string
}
