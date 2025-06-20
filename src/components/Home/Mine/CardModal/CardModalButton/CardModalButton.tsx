import styles from '@/components/Boost/BoostList/BoostModal/BoostModalButton/BoostModalButton.module.css'
import { isSpendingAtom } from '@/store/store'
import { balanceAtom } from '@/store/user-store'
import { useAtom, useSetAtom } from 'jotai'
import toast from 'react-hot-toast'
import { useAddUserCard } from '../../hooks/useAddUserCard'
import { useUpdateUserCard } from '../../hooks/useUpdateUserCard'
import type { ICardModalButtonProps } from './CardModalButton.types'

export function CardModalButton(props: ICardModalButtonProps) {
	const { info, setModal } = props

	const [balance, setBalance] = useAtom(balanceAtom)
	const setSpending = useSetAtom(isSpendingAtom)

	const defaultOptions = {
		profit: info?.content?.profit,
		price: info?.content?.price,
	}

	const { mutate: addCard } = useAddUserCard({
		card_id: info?.cardId,
		...defaultOptions,
	})

	const { mutate: updateCard } = useUpdateUserCard({
		user_card_id: info?.content?.userCardId,
		...defaultOptions,
	})

	const buyCard = () => {
		if (!info.content?.price) return
		if (balance.balance >= info.content?.price) {
			if (info.content?.lvl === 0) {
				addCard()
			} else {
				updateCard()
			}
			setModal(false)
			setBalance({
				type: 'another',
				balance: balance.balance - info?.content.price,
			})
			setSpending(true)
			const timeout = setTimeout(() => setSpending(false), 1000)
			return () => clearTimeout(timeout)
		} else {
			toast.error('У вас недостаточно монет!')
		}
	}

	return (
		<button onClick={buyCard} className={styles.submit}>
			Улучшить
		</button>
	)
}
