import styles from './FirstLoader.module.css'

export function FirstLoader() {
	return (
		<div className={styles.loading}>
			<h1 className={styles.title}>ReactMakimaCoin</h1>
			<div className={styles.loading__text}>loading...</div>
		</div>
	)
}
