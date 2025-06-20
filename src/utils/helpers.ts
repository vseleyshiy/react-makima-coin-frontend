import fingerprintJs from '@fingerprintjs/fingerprintjs'
import type { MouseEvent } from 'react'
import type { ToastPosition } from 'react-hot-toast'
import toast from 'react-hot-toast'
import type { Pathname } from 'react-router-dom'
import type { IAdaptiveRatingFn } from './utils.types'

export function getAnimation<T>(ref: HTMLElement | null, event: MouseEvent<T>) {
	const rect = ref?.getBoundingClientRect()

	if (!rect) return

	const offsetX = event.clientX - rect?.left - rect?.width / 2
	const offsetY = event.clientY - rect?.top - rect?.height / 2

	const DEG = 40

	const tiltX = (offsetY / rect?.height) * DEG
	const tiltY = (offsetX / rect?.width) * -DEG

	ref?.style.setProperty('--tiltX', `${tiltX}deg`)
	ref?.style.setProperty('--tiltY', `${tiltY}deg`)

	const timeoutRotate = setTimeout(() => {
		ref?.style.setProperty('--tiltX', `0deg`)
		ref?.style.setProperty('--tiltY', `0deg`)
	}, 300)

	const plusOne = document.createElement('div')
	plusOne.classList.add('fraction')
	plusOne.style.left = `${event.clientX - rect?.left}px`
	plusOne.style.top = `${event.clientY - rect?.top}px`

	ref?.appendChild(plusOne)

	const timeoutEffect = setTimeout(() => {
		plusOne.remove()
	}, 2000)

	return () => {
		clearTimeout(timeoutRotate)
		clearTimeout(timeoutEffect)
	}
}

enum RATING_COLORS {
	Bronze = 'rgb(205, 127, 50)',
	Silver = 'silver',
	Gold = 'gold',
	Epic = 'purple',
	Elite = 'skyblue',
	MacMakLovin = '#ff684e',
}

export function getRatingColor(role: string) {
	let color

	switch (role) {
		case 'Bronze':
			color = RATING_COLORS.Bronze
			break
		case 'Silver':
			color = RATING_COLORS.Silver
			break
		case 'Gold':
			color = RATING_COLORS.Gold
			break
		case 'Epic':
			color = RATING_COLORS.Epic
			break
		case 'Elite':
			color = RATING_COLORS.Elite
			break
		case 'MacMakLovin':
			color = RATING_COLORS.MacMakLovin
			break
	}

	return color
}

export const isActive = (link: string, pathname: Pathname) => {
	if (pathname === link) {
		return true
	} else {
		return false
	}
}

interface Props {
	text: string
	duration?: number
	position?: ToastPosition
}

export function ToastWarning(props: Props) {
	const { text, duration, position } = props

	toast(text, {
		duration: duration ? duration : 5000,
		position: position ? position : 'bottom-center',
		icon: '❗',
		style: {
			borderRadius: '10px',
			background: 'var(--light-black)',
			color: 'var(--primary-color)',
		},
	})
}

export const adaptiveRating = (props: IAdaptiveRatingFn) => {
	const { width, setFn, mediaFn, stateFn } = props

	if (width <= 1200) {
		setFn(35)
	}
	if (width <= 992) {
		setFn(30)
	}
	if (width <= 768) {
		setFn(15)
	}
	if (width <= 480) {
		mediaFn(true)
		stateFn(false)
		setFn(10)
	} else {
		mediaFn(false)
		stateFn(true)
	}
}

export const getFingerprint = async () => {
	const fpPromise = await fingerprintJs.load()
	const fp = await fpPromise.get()
	return fp.visitorId
}

export const debounce = (cb: any, delay = 1000) => {
	let timeout: number
	return (...args: any) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}
