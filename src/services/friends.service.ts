import { axiosWithAuth } from '../api/interceptors'
import { IFriend } from '../types/friends.types'

class FriendsService {
	private BASE_URL = '/friends'

	async getFriends(limit: number) {
		const response = await axiosWithAuth.post<IFriend[]>(
			`${this.BASE_URL}/index.php`,
			{ limit }
		)
		return response.data
	}
}

export const friendsService = new FriendsService()
