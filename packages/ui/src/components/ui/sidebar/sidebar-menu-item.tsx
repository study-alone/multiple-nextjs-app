import { cn } from '@/lib/utils'

type SidebarMenuItemProps = React.ComponentProps<'li'>

export const SidebarMenuItem = ({ className, ref, ...props }: SidebarMenuItemProps) => (
	<li
		ref={ref}
		data-sidebar="menu-item"
		className={cn('group/menu-item relative', className)}
		{...props}
	/>
)
