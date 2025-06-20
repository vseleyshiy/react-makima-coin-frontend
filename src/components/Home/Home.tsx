import { isAuthAtom } from '@/store/store'
import { m } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { FirstLoader } from '../ui/loaders/FirstLoader'
import { Loader } from '../ui/loaders/Loader'
import { Blocks } from './Blocks'
import { Coin } from './Coin'
import { Energy } from './Energy'
import styles from './Home.module.css'
import { Mine } from './Mine'
import { Progress } from './Progress'
import { Score } from './Score'

export function Home() {
	const [loader, setLoader] = useState(localStorage.getItem('isLoad'))
	const isAuth = useAtomValue(isAuthAtom)

	useEffect(() => {
		if (loader !== 'true') {
			const timeout = setTimeout(() => {
				setLoader('true')
				localStorage.setItem('isLoad', 'true')
			}, 2000)

			return () => clearTimeout(timeout)
		}
	}, [loader])

	return loader !== 'true' ? (
		<FirstLoader />
	) : !isAuth ? (
		<Loader />
	) : (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.appWrap}
		>
			<Blocks />
			<Score />
			<Progress />
			<Mine />
			<Coin />
			<Energy />
		</m.div>
	)
}
