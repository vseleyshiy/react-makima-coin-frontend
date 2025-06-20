import { Dialog } from '@/components/Dialog'
import { useProfile } from '@/hooks/useProfile'
import { sectionFilterAtom } from '@/store/profile-store'
import { isAuthAtom } from '@/store/store'
import { useAtomValue } from 'jotai'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { ProfileNav } from '../ProfileNav'
import { Settings } from '../Settings'
import { SettingsRow } from '../Settings/SettingsRow'
import { USER_ROWS } from './ProfileDialog.data'
import styles from './ProfileDialog.module.css'
import type { IProfileDialogProps } from './ProfileDialog.types'
import { ProfileDialogButtons } from './ProfileDialogButtons'

export function ProfileDialog(props: IProfileDialogProps) {
	const { data, isLoading } = useProfile()

	const { dialog, profileRef, setDialog } = props

	const [nameWatch, setNameWatch] = useState('')

	const section = useAtomValue(sectionFilterAtom)
	const isAuth = useAtomValue(isAuthAtom)

	return isLoading ? (
		<Loader />
	) : (
		<Dialog differentRef={profileRef} dialog={dialog} setDialog={setDialog}>
			<div className={styles.wrap}>
				<ProfileNav />
				{section === 'user' ? (
					<div className={styles.content}>
						{USER_ROWS.map(item => (
							<SettingsRow
								key={item.id}
								defaultValue={
									isAuth
										? data?.username !== null
											? data?.username
											: 'Anonymous'
										: ''
								}
								input={item}
								onChange={setNameWatch}
							/>
						))}
					</div>
				) : (
					<Settings />
				)}
				<ProfileDialogButtons nameWatch={nameWatch} setDialog={setDialog} />
			</div>
		</Dialog>
	)
}
