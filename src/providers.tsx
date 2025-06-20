import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { type PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { HashRouter } from 'react-router-dom'
import styles from './App.module.css'
import { Buttons } from './components/Buttons'
import { Cookie } from './components/Cookie'
import { Header } from './components/Header'
import { Online } from './components/Online'
import { appearanceAnimation } from './utils/animations'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 60 * 60 * 1000,
		},
	},
})

export function Providers({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<LazyMotion features={domAnimation}>
				<HashRouter>
					<m.div
						className={styles.wrapper}
						style={{ width: '100%' }}
						initial='hidden'
						whileInView='visible'
					>
						<Online />
						<Header />
						<Cookie />

						<m.div
							custom={2}
							variants={appearanceAnimation}
							className={styles.container}
						>
							{children}
							<Buttons />
						</m.div>
					</m.div>
				</HashRouter>
			</LazyMotion>
			<Toaster />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
