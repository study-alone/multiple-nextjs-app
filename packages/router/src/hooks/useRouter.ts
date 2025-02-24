'use client'

import { useRouter as useNextRouter } from 'next/navigation'
import { useCallback, useContext } from 'react'
import { useProjectRouterContext } from '../context'
import type { PathList } from '../routes/types'

export const useRouter = () => {
	const nextRouter = useNextRouter()
	const basePath = useProjectRouterContext()

	const push = useCallback((path: keyof PathList) => {
		if (basePath !== '' && path.startsWith(basePath)) {
			console.log('internal', {
				path,
				basePath,
			})
			nextRouter.push(path)
		} else {
			console.log('external')
			setTimeout(() => {
				window.location.href = path
			}, 2000)
		}
	}, [])

	return {
		push,
	}
}
