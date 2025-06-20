import { Home } from '@/components/Home'
import { Middleware } from '@/Middleware'

export function HomePage() {
	return <Middleware component={<Home />} />
}
