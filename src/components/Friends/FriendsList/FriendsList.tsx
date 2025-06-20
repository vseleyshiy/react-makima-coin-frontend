import { SimpleLink } from '../../ui/links/SimpleLink'
import { Friend } from './Friend'
import styles from './FriendsList.module.css'
import type { IFriendsListProps } from './FriendsList.types'

export function FriendsList(props: IFriendsListProps) {
	const { friends, limit, setLimit } = props
	const { isFetching, data } = friends

	return (
		<div className={styles.list}>
			{isFetching ? (
				<span className={styles.error}>Загрузка...</span>
			) : data?.length ? (
				<>
					{data?.map(item => (
						<Friend key={item.id} data={item} />
					))}
					{data.length > limit ? (
						<SimpleLink
							style={{ fontSize: '20px' }}
							onClick={() => setLimit(limit + 5)}
						>
							Показать больше
						</SimpleLink>
					) : null}
				</>
			) : (
				<span className={styles.error}>К сожалению список пуст.</span>
			)}
		</div>
	)
}
