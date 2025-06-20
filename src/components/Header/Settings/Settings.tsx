import { ThemeToggle } from '@/components/ThemeToggle'
import styles from './Settings.module.css'

export function Settings() {
	return (
		<div className={styles.settings}>
			<div className={styles.theme__buttons}>
				<div className={styles.theme__title}>Измените цвет темы:</div>
				<ThemeToggle theme='light' />
				<ThemeToggle theme='dark' />
			</div>
			{/* {SETTINGS_ROWS.map(item => (
				<SettingsRow
					key={item.id}
					input={item}
					defaultValue={'var(--main-bg)'}
				/>
			))} */}
		</div>
	)
}
