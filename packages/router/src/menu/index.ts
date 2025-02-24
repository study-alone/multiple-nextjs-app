import type { PathList } from '../routes/types'
import { assetManagement } from '../routes/assetManagement'
import { inquiry } from '../routes/inquiry'
import { productSubscription } from '../routes/product-subscription'

export type Menu = {
	name: string
	path?: keyof PathList
	children?: {
		name: string
		path: keyof PathList
	}[]
}

export const menu: Menu[] = [
	{ name: '메인', path: '/' },
	assetManagement,
	inquiry,
	productSubscription,
]
