'use client'

import { createContext, use } from 'react'

export const ProjectRouterContext = createContext<string>('')

type ProjectRouterProviderProps = React.PropsWithChildren<{
	basePath: string
}>

export const useProjectRouterContext = () => use(ProjectRouterContext)

export const ProjectRouterProvider = ({ children, basePath }: ProjectRouterProviderProps) => {
	// react 19 에서는 Context 그대로 provider 컴포넌트로 이용할 수 있습니다.
	return <ProjectRouterContext value={basePath}>{children}</ProjectRouterContext>
}
