'use client'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
// import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import { menu as menus, Link, type PathList } from '@repo/router'

export const AppSidebar = () => {
	return (
		<Sidebar>
			{/* <SidebarHeader /> */}
			<SidebarContent>
				{menus.map(({ name, path, children }) => {
					if (Array.isArray(children)) {
						return (
							<SidebarGroup key={name}>
								<SidebarGroupLabel>
									{path ? (
										<Link href={path}>
											<span>{name}</span>
										</Link>
									) : (
										name
									)}
								</SidebarGroupLabel>
								<SidebarGroupContent>
									{children.map((child) => (
										<SidebarMenu key={child.name}>
											<SidebarMenuItem key={child.name}>
												<SidebarMenuButton asChild>
													<Link href={child.path}>
														<span>{child.name}</span>
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										</SidebarMenu>
									))}
								</SidebarGroupContent>
							</SidebarGroup>
						)
					}
					return (
						<SidebarMenu key={name}>
							<SidebarMenuItem key={name}>
								<SidebarMenuButton asChild>
									<Link href={path as unknown as keyof PathList}>
										<span>{name}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					)
				})}
				<SidebarGroup />
			</SidebarContent>
			{/* <SidebarFooter /> */}
		</Sidebar>
	)
}
