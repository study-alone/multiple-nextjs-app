import type { ProductSubscriptionPaths } from './product-subscription'
import type { AssetManagementPaths } from './assetManagement'
import type { InquiryPaths } from './inquiry'

export interface PathList extends AssetManagementPaths, ProductSubscriptionPaths, InquiryPaths {
	'/': {}
	// ...overrides
}
