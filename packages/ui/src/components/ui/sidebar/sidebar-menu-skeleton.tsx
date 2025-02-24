import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useMemo } from 'react'

type SidebarMenuSkeleton = React.ComponentProps<'div'> & {
	showIcon?: boolean
}

export const SidebarMenuSkeleton = ({
	className,
	showIcon = false,
	ref,
	...props
}: SidebarMenuSkeleton) => {
	// Random width between 50 to 90%.
	const width = useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`
	}, [])

	return (
		<div
			ref={ref}
			data-sidebar="menu-skeleton"
			className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
			{...props}>
			{showIcon && (
				<Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />
			)}
			<Skeleton
				className="h-4 max-w-[--skeleton-width] flex-1"
				data-sidebar="menu-skeleton-text"
				style={
					{
						'--skeleton-width': width,
					} as React.CSSProperties
				}
			/>
		</div>
	)
}
