import { axiosClassic, axiosWithAuth } from '../api/interceptors'
import type {
	IResponse,
	IUserRating,
	IUserRoleLvl,
	IUserStatusJs,
	TypeUserUpdate,
} from '../types/user.types'

class UserService {
	private BASE_URL = '/user'

	async getTopUsers() {
		const response = await axiosClassic.get<IUserRating[]>(
			`${this.BASE_URL}/index.php`
		)
		return response.data
	}

	async getProfile() {
		const response = await axiosWithAuth.get<IUserStatusJs>(
			`${this.BASE_URL}/profile.php`
		)
		return response.data
	}

	async update(data: TypeUserUpdate) {
		const response = await axiosWithAuth.put<IResponse>(
			`${this.BASE_URL}/update.php`,
			data
		)

		return response
	}
	async updateRoleLvl(data: IUserRoleLvl) {
		const response = await axiosWithAuth.put<IResponse>(
			`${this.BASE_URL}/updateRoleLvl.php`,
			data
		)

		return response
	}
}

export const userService = new UserService()
