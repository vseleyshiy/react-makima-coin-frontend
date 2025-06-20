import { useMutation } from '@tanstack/react-query'
import { authService } from '../../../services/auth.service'
import type { IVerification } from '../../../types/auth.types'

export function useVerification() {
	const { data, mutate, isSuccess, isPending } = useMutation({
		mutationKey: ['check verification'],
		mutationFn: (data: IVerification) => authService.checkVerification(data),
	})

	return { data, mutate, isPending, isSuccess }
}
