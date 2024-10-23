'use client'
import { useSyncExternalStore } from 'react'

export enum ACTIONS {
	ADD_DIGIT = 'add_digit',
	CHOOSE_OPERATION = 'chose_operation',
	CLEAR = 'clear',
	DELETE_DIGIT = 'delete_digit',
	EVALUATE = 'evaluate',
}

interface StateTypes {
	currentOperand: string
	previousOperand: string
	operation: string
	overwrite?: boolean
}

export const store = {
	listeners: new Set<VoidFunction>(),
	subscribe: (subscriber: () => void) => {
		store.listeners.add(subscriber)
		return () => store.listeners.delete(subscriber)
	},
	setState: (new_state: Partial<StateTypes>) => {
		store.state = {
			...store.state,
			...new_state,
		}
		store.notify()
	},
	getSnapshot: () => store.state,
	notify: () => {
		for (const listener of store.listeners) {
			listener()
		}
	},
	state: {
		currentOperand: '',
		previousOperand: '',
		operation: '',
		overwrite: false,
	},
	actions: {
		addDigit: (payload: string) => {
			if (store.state.overwrite)
				return store.setState({
					overwrite: false,
					currentOperand: payload,
				})
			if (
				(payload === '0' && store.state.currentOperand === '0') ||
				(payload === '.' && store.state.currentOperand.includes('.'))
			)
				return
			store.setState({ currentOperand: `${store.state.currentOperand || ''}${payload}` })
		},
		chooseOperation: (payload: string) => {
			if (store.state.currentOperand === '' && store.state.previousOperand === '') return
			if (store.state.currentOperand === '') return store.setState({ operation: payload })
			if (store.state.previousOperand === '')
				return store.setState({ previousOperand: store.state.currentOperand, currentOperand: '', operation: payload })
			store.setState({
				previousOperand: evaluate(store.state),
				operation: payload,
				currentOperand: '',
			})
		},
		clear: () => store.setState({ currentOperand: '', previousOperand: '', operation: '' }),
		deleteDigit: () => {
			if (store.state.overwrite) return store.setState({ overwrite: false, currentOperand: '' })
			if (store.state.currentOperand === '') return
			if (store.state.currentOperand.length === 1) return store.setState({ currentOperand: '' })
			store.setState({ currentOperand: store.state.currentOperand.slice(0, -1) })
		},
		evaluate: () => {
			if (store.state.operation === '' || store.state.currentOperand === '' || store.state.previousOperand === '')
				return
			store.setState({
				overwrite: true,
				previousOperand: '',
				operation: '',
				currentOperand: evaluate(store.state),
			})
		},
	},
}

const evaluate = ({ currentOperand, previousOperand, operation }: StateTypes) => {
	const prev = Number.parseFloat(previousOperand)
	const current = Number.parseFloat(currentOperand)
	if (Number.isNaN(prev) || Number.isNaN(current)) return ''
	let computation = ''
	switch (operation) {
		case '+':
			computation = (prev + current).toString()
			break
		case '-':
			computation = (prev - current).toString()
			break
		case '*':
			computation = (prev * current).toString()
			break
		case '÷':
			computation = (prev / current).toString()
			break
	}

	return computation.toString()
}

export const useStore = <T>(selector: (state: (typeof store)['state']) => T) =>
	useSyncExternalStore(
		store.subscribe,
		() => selector(store.getSnapshot()),
		() => selector(store.getSnapshot())
	)
