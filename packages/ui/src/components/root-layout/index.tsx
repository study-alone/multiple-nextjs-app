import { SidebarLayout } from '@/components/sidebar-layout'
import { ThemeProvider } from '@/components/theme-provider'
import { ProjectRouterProvider } from '@repo/router'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export const DefaultRootLayout = ({
	children,
	basePath,
}: Readonly<{
	children: React.ReactNode
	basePath: string
}>) => {
	return (
		<html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ProjectRouterProvider basePath={basePath}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<SidebarLayout>{children}</SidebarLayout>
					</ThemeProvider>
				</ProjectRouterProvider>
			</body>
		</html>
	)
}
