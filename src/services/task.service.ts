import { axiosWithAuth } from '../api/interceptors'
import type { ITask } from '../types/task.types'
import type { IResponse } from '../types/user.types'

class TaskService {
	BASE_URL = '/tasks'

	async getTasks() {
		const response = await axiosWithAuth.get<ITask[]>(
			`${this.BASE_URL}/index.php`
		)
		return response.data
	}

	async addUserTask(reward: number | undefined, task_id: number) {
		const response = await axiosWithAuth.post<IResponse>(
			`${this.BASE_URL}/addUserTask.php`,
			{ task_id, reward }
		)

		return response
	}
}

export const taskService = new TaskService()
