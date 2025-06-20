import { useEffect, useRef } from 'react'

interface Props {
	type: 'another' | 'afk' | 'click' | 'initial'
	balance: number
}

export function usePrevious(value: Props) {
	const valueRef = useRef<null | Props>(null)

	useEffect(() => {
		valueRef.current = value
	}, [value])

	return valueRef.current
}
