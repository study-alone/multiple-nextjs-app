import { cn } from '@/lib/utils'

type SidebarFooterProps = React.ComponentProps<'div'>

export const SidebarFooter = ({ className, ref, ...props }: SidebarFooterProps) => {
	return (
		<div
			ref={ref}
			data-sidebar="footer"
			className={cn('flex flex-col gap-2 p-2', className)}
			{...props}
		/>
	)
}
