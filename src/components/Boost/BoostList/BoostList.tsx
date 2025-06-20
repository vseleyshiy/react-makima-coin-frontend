import { useAtomValue } from 'jotai'
import { memo, useEffect, useState } from 'react'
import { isModalOpenAtom } from '../../../store/store'
import { useBoosts } from '../hooks/useBoosts'
import { BoostItem } from './BoostItem'
import type { IBoostItem } from './BoostItem/BoostItem.types'
import { BOOST_LIST } from './BoostList.data'
import styles from './BoostList.module.css'
import { BoostModal } from './BoostModal'

export const BoostList = memo(() => {
	const active = useAtomValue(isModalOpenAtom)

	const [currentModal, setCurrentModal] = useState<IBoostItem | null>(null)

	useEffect(() => {
		const new_item = BOOST_LIST.find(item => item.id == currentModal?.id)
		setCurrentModal(new_item!)
	}, [active, currentModal?.id])

	const boosts = useBoosts()

	return (
		<>
			<ul className={styles.list}>
				{BOOST_LIST.map(item => (
					<BoostItem
						boosts={boosts}
						key={item.id}
						currentModal={currentModal}
						setCurrentModal={setCurrentModal}
						data={item}
					/>
				))}
			</ul>
			<BoostModal boosts={boosts} info={currentModal} />
		</>
	)
})
