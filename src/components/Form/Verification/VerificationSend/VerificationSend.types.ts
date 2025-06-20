import type { SetStateAction } from 'jotai'
import type { Dispatch } from 'react'

// export interface IVerificationSend {}

export interface IVerificationSendProps {
	timer: number
	setTimer: Dispatch<SetStateAction<number>>
}
