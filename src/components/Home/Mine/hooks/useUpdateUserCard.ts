import { cardService } from '@/services/card.service'
import type { IUpdateUserCard } from '@/types/card.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateUserCard(card: IUpdateUserCard) {
	const queryClient = useQueryClient()

	const { data, mutate, isPending, isSuccess } = useMutation({
		mutationKey: [`update card`, card.user_card_id],
		mutationFn: () => cardService.updateUserCard(card),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['card'] })
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { data, mutate, isPending, isSuccess }
}
