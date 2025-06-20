import { MiniLoader } from '@/components/ui/loaders/MiniLoader'
import { isSpendingAtom } from '@/store/store'
import { balanceAtom } from '@/store/user-store'
import cn from 'clsx'
import { useAtomValue } from 'jotai'
import { CircleDollarSign } from 'lucide-react'
import styles from './Score.module.css'

export function Score() {
	const balance = useAtomValue(balanceAtom)

	const isSpending = useAtomValue(isSpendingAtom)

	return (
		<h1
			className={cn(styles.text, {
				[styles.text__spend]: isSpending,
			})}
		>
			<CircleDollarSign size={35} />
			{balance.balance === -1 ? <MiniLoader /> : balance.balance}
		</h1>
	)
}
