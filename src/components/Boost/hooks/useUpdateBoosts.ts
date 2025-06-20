import { useMutation, useQueryClient } from '@tanstack/react-query'
import { boostsService } from '../../../services/boosts.service'

export function useUpdateBoosts(type: 'energy' | 'multitap') {
	const queryClient = useQueryClient()

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['update boost', type],
		mutationFn: (price: number | undefined) =>
			boostsService.updateBoosts(price, type),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: [
					type == 'energy' ? 'get max_energy_boosts' : 'get multitap_boosts',
				],
			})
			queryClient.invalidateQueries({ queryKey: ['get boosts'] })
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { mutate, isPending, isSuccess }
}
