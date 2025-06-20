import { useQuery } from '@tanstack/react-query'
import { userService } from '../../../services/user.service'

export function useTopUsers() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get top users'],
		queryFn: () => userService.getTopUsers(),
		staleTime: 24 * 60 * 60 * 1000,
	})

	return { data, isLoading, isSuccess }
}
