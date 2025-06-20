import { useMutation } from '@tanstack/react-query'
import { authService } from '../../../services/auth.service'
import type { IGetCode } from '../../../types/auth.types'

export function useCode() {
	const { data, mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['get code'],
		mutationFn: (data: IGetCode) => authService.getCode(data),
	})

	return { data, mutate, isPending, isSuccess }
}
