'use client'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

interface Props {
	children: React.ReactNode
}

export const SidebarLayout = ({ children }: Props) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="bg-background flex flex-1 flex-col md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow min-h-svh peer-data-[variant=inset]:min-h=[calc(100svh-theme(spacing.4))] relative">
				<SidebarTrigger className="absolute top-2 left-2" />
				{children}
			</main>
		</SidebarProvider>
	)
}
