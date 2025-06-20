import { axiosWithAuth } from '../api/interceptors'
import type { IAddUserCard, ICard, IUpdateUserCard } from '../types/card.types'
import type { IResponse } from '../types/user.types'

class CardService {
	BASE_URL = '/cards'

	async getCards() {
		const response = await axiosWithAuth.get<ICard[]>(
			`${this.BASE_URL}/index.php`
		)
		return response.data
	}

	async addUserCard(data: IAddUserCard) {
		const response = await axiosWithAuth.post<IResponse>(
			`${this.BASE_URL}/addUserCard.php`,
			data
		)

		return response
	}
	async updateUserCard(data: IUpdateUserCard) {
		const response = await axiosWithAuth.put<IResponse>(
			`${this.BASE_URL}/updateUserCard.php`,
			data
		)

		return response
	}
}

export const cardService = new CardService()
