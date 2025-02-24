'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const ThemeToggle = () => {
	const { setTheme, themes, theme } = useTheme()
	const [order, setOrder] = useState(themes.findIndex((value) => value === theme))

	const toggle = () => {
		const nextOrder = (order + 1) % themes.length
		const nextTheme = themes[nextOrder] as string
		setTheme(nextTheme)
		setOrder(nextOrder)
	}

	return (
		<Button variant="outline" size="icon" className="fixed bottom-10 right-10" onClick={toggle}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
