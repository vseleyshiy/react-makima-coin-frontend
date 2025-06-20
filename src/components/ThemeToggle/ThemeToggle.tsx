import cn from 'clsx'
import { useCallback } from 'react'
import styles from './ThemeToggle.module.css'

export function ThemeToggle({ theme }: { theme: string }) {
	const setTheme = useCallback(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div
			onClick={setTheme}
			className={cn(styles.theme__toggle, {
				[styles.theme__light]: theme === 'dark',
				[styles.theme__dark]: theme === 'light',
			})}
		></div>
	)
}
