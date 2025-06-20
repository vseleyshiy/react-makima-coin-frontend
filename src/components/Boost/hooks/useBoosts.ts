import { isAuthAtom } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { boostsService } from '../../../services/boosts.service'

export function useBoosts() {
	const isAuth = useAtomValue(isAuthAtom)

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['get boosts'],
		queryFn: () => boostsService.getBoosts(),
		enabled: isAuth,
	})

	return { data, isLoading, isSuccess }
}
