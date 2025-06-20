import { axiosWithAuth } from '../api/interceptors'
import type { IGetBoosts } from '../types/boosts.types'
import type { IResponse } from '../types/user.types'

class BoostsService {
	BASE_URL = '/boosts'

	async getBoosts() {
		const response = await axiosWithAuth.get<IGetBoosts>(
			`${this.BASE_URL}/getBoosts.php`
		)

		return response.data
	}

	async updateBoosts(price: number | undefined, type: 'energy' | 'multitap') {
		const url =
			type == 'energy' ? '/updateMaxEnergy.php' : '/updateMultitap.php'
		const response = await axiosWithAuth.put<IResponse>(this.BASE_URL + url, {
			price,
		})

		return response.data
	}
}

export const boostsService = new BoostsService()
