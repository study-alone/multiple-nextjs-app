import type { Menu } from '../menu'

export interface AssetManagementPaths {
	// main
	'/asset-management': {}
	// 금융팁
	'/asset-management/financial-tip': {}
	// 지춣
	'/asset-management/expenditure': {}
	// 투자
	'/asset-management/investment': {}
	// 연금/절세
	'/asset-management/pension-and-tax-savings': {}
}

export const assetManagement: Menu = {
	name: '자산관리',
	path: '/asset-management',
	children: [
		{ name: '금융팁', path: '/asset-management/financial-tip' },
		{
			name: '지춣',
			path: '/asset-management/expenditure',
		},
		{
			name: '투자',
			path: '/asset-management/investment',
		},
		{
			name: '연금/절세',
			path: '/asset-management/pension-and-tax-savings',
		},
	],
}
