'use client'

import { store } from './store'

export const Button = <T extends keyof (typeof store)['actions']>({
	span,
	operation,
	children,
}: {
	span?: boolean
	children: string
	operation: T
}) => {
	return (
		<button
			type='button'
			className={`cursor-pointer text-3xl font-semibold border border-white outline-none bg-white/75 hover:bg-white/25 transition-all duration-100 ${
				span ? 'col-span-2' : ''
			}`}
			onClick={() => store.actions[operation](children)}
		>
			{children}
		</button>
	)
}
