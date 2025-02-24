import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type SidebarInputProps = React.ComponentProps<typeof Input>

export const SidebarInput = ({ className, ref, ...props }: SidebarInputProps) => {
	return (
		<Input
			ref={ref}
			data-sidebar="input"
			className={cn(
				'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
				className,
			)}
			{...props}
		/>
	)
}
