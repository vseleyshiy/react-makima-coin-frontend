import { isAuthAtom } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { friendsService } from '../../../services/friends.service'

export function useFriends(limit: number) {
	const isAuth = useAtomValue(isAuthAtom)

	const { data, isLoading, isSuccess, isFetching } = useQuery({
		queryKey: ['get friends'],
		queryFn: () => friendsService.getFriends(limit),
		staleTime: 5 * 60 * 1000,
		enabled: isAuth,
	})

	return { data, isLoading, isSuccess, isFetching }
}
