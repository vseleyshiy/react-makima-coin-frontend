import { debounce } from '@/utils/helpers'
import { useQueryClient } from '@tanstack/react-query'
import { m } from 'framer-motion'
import { RefreshCcw } from 'lucide-react'
import { useCallback, useState } from 'react'
import { RMC_PAGES } from '../../config/pages-url.config'
import { SimpleLink } from '../ui/links/SimpleLink'
import { Loader } from '../ui/loaders/Loader'
import styles from './Friends.module.css'
import { FriendsList } from './FriendsList'
import { useFriends } from './hooks/useFriends'
import { Invite } from './Invite'

export function Friends() {
	const [limit, setLimit] = useState(5)

	const friends = useFriends(limit)
	const { data, isLoading } = friends

	const queryClient = useQueryClient()

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const refresh = useCallback(
		debounce(
			() => queryClient.invalidateQueries({ queryKey: ['get friends'] }),
			444
		),
		[data]
	)

	return isLoading ? (
		<Loader />
	) : (
		<m.div
			className={styles.friends}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1 className={styles.header}>Приграсите друзей!</h1>
			<p className={styles.text}>Вы и ваш друг получите бонусы</p>
			<Invite />
			<SimpleLink style={{ fontSize: '20px' }} to={RMC_PAGES.EARN}>
				Больше бонусов
			</SimpleLink>
			<div className={styles.content}>
				<div className={styles.head}>
					<span className={styles.title}>
						Список ваших друзей ({data?.length})
					</span>
					<RefreshCcw onClick={refresh} className={styles.refresh} />
				</div>
				<FriendsList friends={friends} limit={limit} setLimit={setLimit} />
			</div>
		</m.div>
	)
}
