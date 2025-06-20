import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '../../../services/user.service'

export function useUpdateUsername(data: { username: string }) {
	const queryClient = useQueryClient()

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['update username'],
		mutationFn: () => userService.update(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { mutate, isPending, isSuccess }
}
