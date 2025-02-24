import { cn } from '@/lib/utils'

type SidebarGroupProps = React.ComponentProps<'div'>

export const SidebarGroup = ({ className, ref, ...props }: SidebarGroupProps) => {
	return (
		<div
			ref={ref}
			data-sidebar="group"
			className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
			{...props}
		/>
	)
}
