import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Calculator',
	description: 'A simple calculator app',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className='
      bg-gradient-to-r from-blue-400 to-green-500
      h-screen
      w-screen
      text-gray-900
      antialiased
      font-normal
      font-sans'
			>
				{children}
			</body>
		</html>
	)
}
