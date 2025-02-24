import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type SidebarSeparatorProps = React.ComponentProps<typeof Separator>

export const SidebarSeparator = ({ className, ref, ...props }: SidebarSeparatorProps) => {
	return (
		<Separator
			ref={ref}
			data-sidebar="separator"
			className={cn('mx-2 w-auto bg-sidebar-border', className)}
			{...props}
		/>
	)
}
