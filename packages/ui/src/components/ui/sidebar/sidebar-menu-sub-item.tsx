type SidebarMenuSubItemPropps = React.ComponentProps<'li'>

export const SidebarMenuSubItem = ({ ref, ...props }: SidebarMenuSubItemPropps) => (
	<li ref={ref} {...props} />
)
