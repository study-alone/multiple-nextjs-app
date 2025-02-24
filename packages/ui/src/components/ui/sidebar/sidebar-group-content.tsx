import { cn } from '@/lib/utils'

type SidebarGroupContentProps = React.ComponentProps<'div'>

export const SidebarGroupContent = ({ className, ref, ...props }: SidebarGroupContentProps) => (
	<div
		ref={ref}
		data-sidebar="group-content"
		className={cn('w-full text-sm', className)}
		{...props}
	/>
)
