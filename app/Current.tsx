'use client'
import { useStore } from './store'

export const Current = () => {
	const current = useStore((state) => state.currentOperand)
	return current
}
