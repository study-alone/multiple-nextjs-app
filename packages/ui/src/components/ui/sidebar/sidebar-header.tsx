import { cn } from '@/lib/utils'

type SidebarHeaderProps = React.ComponentProps<'div'>

export const SidebarHeader = ({ className, ref, ...props }: SidebarHeaderProps) => {
	return (
		<div
			ref={ref}
			data-sidebar="header"
			className={cn('flex flex-col gap-2 p-2', className)}
			{...props}
		/>
	)
}
