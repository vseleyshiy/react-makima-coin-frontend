import cn from 'clsx'
import { useAtom, useSetAtom } from 'jotai'
import toast from 'react-hot-toast'
import { isModalOpenAtom, isSpendingAtom } from '../../../../../store/store'
import { balanceAtom } from '../../../../../store/user-store'
import { useUpdateBoosts } from '../../../hooks/useUpdateBoosts'
import styles from './BoostModalButton.module.css'
import type { IBoostModalButtonProps } from './BoostModalButton.types'

export function BoostModalButton(props: IBoostModalButtonProps) {
	const { boostInfo, type } = props

	const setSpending = useSetAtom(isSpendingAtom)
	const [balance, setBalance] = useAtom(balanceAtom)

	const { mutate, isPending } = useUpdateBoosts(type)

	const setActive = useSetAtom(isModalOpenAtom)

	const updateLvl = () => {
		if (boostInfo?.value === boostInfo?.lastValue) {
			toast.error('Вы достигли максимального уровня!')
		} else {
			if (balance.balance >= boostInfo?.nextPrice) {
				mutate(boostInfo?.nextPrice)
				toast.success('Улучшение прошло успешно!')
				setActive(false)
				setBalance({
					type: 'another',
					balance: balance.balance - boostInfo?.nextPrice,
				})
				setSpending(true)
				const timeout = setTimeout(() => setSpending(false), 1000)
				return () => clearTimeout(timeout)
			} else {
				toast.error('У вас недостаточно монет!')
			}
		}
	}

	return (
		<button
			style={{
				pointerEvents:
					boostInfo?.value === boostInfo?.lastValue ? 'none' : 'all',
			}}
			onClick={updateLvl}
			className={cn(styles.submit, {
				[styles.ex]: boostInfo?.value === boostInfo?.lastValue,
			})}
		>
			{isPending
				? 'Улучшение...'
				: boostInfo?.value === boostInfo?.lastValue
				? 'Вы достигли макс. уровня'
				: 'Улучшить'}
		</button>
	)
}
