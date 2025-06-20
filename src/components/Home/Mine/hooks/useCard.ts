import { isAuthAtom } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { cardService } from '../../../../services/card.service'

export function useCard() {
	const isAuth = useAtomValue(isAuthAtom)

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['card'],
		queryFn: () => cardService.getCards(),
		enabled: isAuth,
	})

	return { data, isLoading, isSuccess }
}
