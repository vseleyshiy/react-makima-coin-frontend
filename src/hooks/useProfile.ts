import { isAuthAtom } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { userService } from '../services/user.service'

export function useProfile() {
	const isAuth = useAtomValue(isAuthAtom)

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		enabled: isAuth,
	})

	return { data, isLoading, isSuccess }
}
