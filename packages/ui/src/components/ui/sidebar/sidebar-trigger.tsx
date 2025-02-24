import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar/context'
import { cn } from '@/lib/utils'
import { PanelLeft } from 'lucide-react'

type SidebarTriggerProps = React.ComponentProps<typeof Button> & {
	ref?: React.ComponentRef<typeof Button>
}

export const SidebarTrigger = ({
	className,
	onClick = () => {},
	ref,
	...props
}: SidebarTriggerProps) => {
	const { toggleSidebar } = useSidebar()

	return (
		<Button
			ref={ref}
			data-sidebar="trigger"
			variant="ghost"
			size="icon"
			className={cn('h-7 w-7', className)}
			onClick={(event) => {
				onClick(event)
				toggleSidebar()
			}}
			{...props}>
			<PanelLeft />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	)
}
