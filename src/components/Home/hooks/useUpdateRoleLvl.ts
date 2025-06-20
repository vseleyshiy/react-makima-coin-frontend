import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '../../../services/user.service'
import type { IUserRoleLvl } from '../../../types/user.types'

export function useUpdateRoleLvl() {
	const queryClient = useQueryClient()

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['update roleLvl'],
		mutationFn: (data: IUserRoleLvl) => userService.updateRoleLvl(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	return { mutate, isPending, isSuccess }
}
