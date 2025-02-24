import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

type SidebarGroupLabelProps = React.ComponentProps<'div'> & { asChild?: boolean }

export const SidebarGroupLabel = ({
	className,
	asChild = false,
	ref,
	...props
}: SidebarGroupLabelProps) => {
	const Comp = asChild ? Slot : 'div'

	return (
		<Comp
			ref={ref}
			data-sidebar="group-label"
			className={cn(
				'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
				'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
				className,
			)}
			{...props}
		/>
	)
}
