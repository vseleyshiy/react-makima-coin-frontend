import { Loader } from '@/components/ui/loaders/Loader'
import { useProfile } from '@/hooks/useProfile'
import { balanceAtom, energyAtom } from '@/store/user-store'
import { getAnimation } from '@/utils/helpers'
import { useAtom } from 'jotai'
import type { MouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './Coin.module.css'
import image from '/makima.webp'

export function Coin() {
	const coinRef = useRef<HTMLDivElement>(null)

	const { data, isLoading } = useProfile()

	const [energy, setEnergy] = useAtom(energyAtom)
	const [balance, setBalance] = useAtom(balanceAtom)

	const click = (event: MouseEvent<HTMLDivElement>) => {
		if (event.isTrusted && data?.click) {
			setBalance({
				balance: balance.balance + data.click,
				type: 'click',
			})
			setEnergy(prev => prev - 10)
			getAnimation<HTMLDivElement>(coinRef.current, event)
		}
	}

	useEffect(() => {
		if (!coinRef.current) return
		if (energy !== -1) {
			if (energy === 0) {
				coinRef.current.style.pointerEvents = 'none'
				toast.error('У вас недостаточно энергии!')
			} else {
				coinRef.current.style.pointerEvents = 'all'
			}
		}
	}, [energy])

	return isLoading ? (
		<Loader />
	) : (
		<div
			className={styles.imgWrap}
			ref={coinRef}
			onClick={event => click(event)}
		>
			<LazyLoadImage
				placeholderSrc='/makima-small.webp'
				wrapperClassName={styles.img}
				className={styles.img}
				effect='blur'
				src={image}
				draggable='false'
			/>
		</div>
	)
}
