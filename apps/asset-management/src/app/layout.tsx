import { ProjectRouterProvider } from '@repo/router'
import { DefaultRootLayout } from '@repo/ui/root-layout'
import '@repo/ui/global-ui.css'
import './globals.css'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<DefaultRootLayout basePath="/asset-management">
			<h1 className="font-bold text-9xl">Asset Management</h1>
			{children}
		</DefaultRootLayout>
	)
}
