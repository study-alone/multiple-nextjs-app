import { cn } from '@/lib/utils'

type SidebarProps = React.ComponentProps<'main'> & {
	ref?: React.Ref<HTMLDivElement>
}

export const SidebarInset = ({ className, ref, ...props }: SidebarProps) => {
	return (
		<main
			ref={ref}
			className={cn(
				'relative flex min-h-svh flex-1 flex-col bg-background',
				'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
				className,
			)}
			{...props}
		/>
	)
}
