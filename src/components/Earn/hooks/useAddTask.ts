import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskService } from '../../../services/task.service'

export function useAddTask(task_id: number) {
	const queryClient = useQueryClient()

	const { mutate, isPending, isSuccess } = useMutation({
		mutationKey: ['add task', task_id],
		mutationFn: (reward: number | undefined) =>
			taskService.addUserTask(reward, task_id),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['task'] })
		},
	})

	return { mutate, isPending, isSuccess }
}
