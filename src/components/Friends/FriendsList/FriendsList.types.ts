import type { Dispatch, SetStateAction } from 'react'
import type { IFriend } from '../../../types/friends.types'

// export interface IFriendsList {}

export interface IFriendsListProps {
	friends: {
		data: IFriend[] | undefined
		isLoading: boolean
		isSuccess: boolean
		isFetching: boolean
	}
	limit: number
	setLimit: Dispatch<SetStateAction<number>>
}
