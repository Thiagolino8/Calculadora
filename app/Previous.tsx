'use client'
import { useStore } from './store'

export const Previous = () => {
	const previous = useStore((state) => state.previousOperand)
	return previous
}
