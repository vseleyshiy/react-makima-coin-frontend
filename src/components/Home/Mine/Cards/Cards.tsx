import { Loader } from '@/components/ui/loaders/Loader'
import { m } from 'framer-motion'
import { memo, useState } from 'react'
import { CardModal } from '../CardModal'
import { useCard } from '../hooks/useCard'
import { Card } from './Card'
import styles from './Cards.module.css'
import type { ICardInfo } from './Cards.types'

export const Cards = memo(() => {
	const { data, isLoading } = useCard()

	const [info, setInfo] = useState<ICardInfo>({
		cardId: 0,
		content: null,
	})
	const [modal, setModal] = useState(false)

	return isLoading ? (
		<Loader />
	) : data?.length ? (
		<>
			<m.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.list}
			>
				{data?.map(item => (
					<Card
						key={item.cardId}
						data={item}
						setInfo={setInfo}
						setModal={setModal}
					/>
				))}
			</m.ul>
			<CardModal modal={modal} setModal={setModal} info={info} />
		</>
	) : null
})
