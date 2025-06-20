import { axiosClassic, axiosWithAuth } from '../api/interceptors'
import type {
	IForm,
	IGetCode,
	IVerification,
	TypeAuth,
} from '../types/auth.types'
import type { IResponse, IUserStatus } from '../types/user.types'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	private BASE_URL = '/auth'

	async login(data: TypeAuth) {
		const response = await axiosClassic.post<IUserStatus>(
			`${this.BASE_URL}/login.php`,
			data
		)
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async reg(data: IForm) {
		const response = await axiosClassic.post<IResponse>(
			`${this.BASE_URL}/reg.php`,
			data
		)

		return response
	}

	async getCode(data: IGetCode) {
		const response = await axiosClassic.post<IResponse>(
			`${this.BASE_URL}/getVerificationEmail.php`,
			data
		)

		return response
	}

	async checkVerification(data: IVerification) {
		const response = await axiosClassic.post<IResponse>(
			`${this.BASE_URL}/checkVerification.php`,
			data
		)

		return response
	}

	async getNewTokens() {
		const response = await axiosWithAuth.post<IUserStatus['accessToken']>(
			`${this.BASE_URL}/access-token.php`
		)

		if (response.data) saveTokenStorage(response.data)

		return response
	}

	async logout() {
		const response = await axiosWithAuth.post<IResponse>(
			`${this.BASE_URL}/logout.php`
		)

		removeFromStorage()
		localStorage.clear()
		localStorage.setItem('acceptCookie', 'true')

		return response
	}
}

export const authService = new AuthService()
