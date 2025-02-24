'use client'

import type { PathList } from '../routes/types'
import { useCallback } from 'react'
import { useRouter } from '../hooks/useRouter'

interface LinkProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLAnchorElement> {
	href: keyof PathList
}

export const Link = ({ children, ...restProps }: LinkProps) => {
	const router = useRouter()

	const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		router.push(restProps.href)
	}, [])

	return (
		<a {...restProps} onClick={handleClick}>
			{children}
		</a>
	)
}
