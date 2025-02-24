import { cn } from '@/lib/utils'

type SidebarMenuProps = React.ComponentProps<'ul'>

export const SidebarMenu = ({ className, ref, ...props }: SidebarMenuProps) => (
	<ul
		ref={ref}
		data-sidebar="menu"
		className={cn('flex w-full min-w-0 flex-col gap-1', className)}
		{...props}
	/>
)
