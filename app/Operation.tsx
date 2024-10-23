'use client'
import { useStore } from './store'

export const Operation = () => {
	const operation = useStore((state) => state.operation)
	return operation
}
