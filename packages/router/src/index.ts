import { assetManagement } from './routes/assetManagement'
import { inquiry } from './routes/inquiry'
import { productSubscription } from './routes/product-subscription'

export { ProjectRouterProvider } from './context'
export { useRouter } from './hooks/useRouter'
export { Link } from './components/Link'

export { menu } from './menu'

export const url = {
	assetManagement,
	inquiry,
	productSubscription,
}

export type { PathList } from './routes/types'
