import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '../services/user.service'
import type { TypeUserUpdate } from '../types/user.types'

export function useUserUpdate() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: [`update user`],
		mutationFn: (data: TypeUserUpdate) => userService.update(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return {
		mutate,
		isPending,
	}
}
