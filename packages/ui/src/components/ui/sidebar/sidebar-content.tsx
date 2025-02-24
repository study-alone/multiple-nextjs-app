import { cn } from '@/lib/utils'

type SidebarContentProps = React.ComponentProps<'div'>

export const SidebarContent = ({ className, ref, ...props }: SidebarContentProps) => {
	return (
		<div
			ref={ref}
			data-sidebar="content"
			className={cn(
				'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
				className,
			)}
			{...props}
		/>
	)
}
