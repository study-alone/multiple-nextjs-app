import { DefaultRootLayout } from '@repo/ui/root-layout'
import '@repo/ui/global-ui.css'
import './globals.css'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<DefaultRootLayout basePath="/product-subscription">
			<h1 className="font-bold text-9xl">Product Subscription</h1>
			{children}
		</DefaultRootLayout>
	)
}
