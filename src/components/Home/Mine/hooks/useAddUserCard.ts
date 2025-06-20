import { cardService } from '@/services/card.service'
import type { IAddUserCard } from '@/types/card.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useAddUserCard(card: IAddUserCard) {
	const queryClient = useQueryClient()

	const { data, mutate, isPending, isSuccess } = useMutation({
		mutationKey: [`add card`, card.card_id],
		mutationFn: () => cardService.addUserCard(card),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['card'] })
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { data, mutate, isPending, isSuccess }
}
