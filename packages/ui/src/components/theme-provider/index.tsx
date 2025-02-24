'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeToggle } from '@/components/theme-provider/theme-toggle'

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props}>
			{children}
			<ThemeToggle />
		</NextThemesProvider>
	)
}
