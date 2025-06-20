import { isAuthAtom } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { taskService } from '../../../services/task.service'

export function useTask() {
	const isAuth = useAtomValue(isAuthAtom)

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['task'],
		queryFn: () => taskService.getTasks(),
		enabled: isAuth,
	})

	return { data, isLoading, isSuccess }
}
