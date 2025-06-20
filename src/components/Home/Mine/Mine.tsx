import { AnimatePresence } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { mineAtom } from '../../../store/buttons-store'
import { Cards } from './Cards'

export const Mine = () => {
	const mine = useAtomValue(mineAtom)
	return <AnimatePresence>{mine === true ? <Cards /> : null}</AnimatePresence>
}
