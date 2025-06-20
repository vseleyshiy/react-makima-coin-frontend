import { getFingerprint } from '@/utils/helpers'
import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import {
	getAccessToken,
	removeFromStorage,
} from '../services/auth-token.service'
import { authService } from '../services/auth.service'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_SERVER_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

const axiosClassic = axios.create(options)

axiosClassic.interceptors.request.use(async config => {
	const visitorId = await getFingerprint()

	if (config?.headers && visitorId) config.headers.Fingerprint = visitorId

	return config
})

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(async config => {
	const accessToken = getAccessToken()
	const visitorId = await getFingerprint()

	if (config?.headers && accessToken && visitorId) {
		config.headers.Authorization = `Bearer ${accessToken}`
		config.headers.Fingerprint = visitorId
	}

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
