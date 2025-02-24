import type { Menu } from '../menu'

export interface ProductSubscriptionPaths {
	// main
	'/product-subscription': {}
	// 금융상품
	'/product-subscription/financial-products': {}
	// 입출금/카드
	'/product-subscription/deposit-withdrawal-and-cards': {}
	// 적금
	'/product-subscription/installment-savings': {}
	// 정기예금
	'/product-subscription/fixed-deposit': {}
}

export const productSubscription: Menu = {
	name: '금융상품',
	path: '/product-subscription',
	children: [
		{
			name: '금융상품',
			path: '/product-subscription/financial-products',
		},
		{
			name: '입출금/카드',
			path: '/product-subscription/deposit-withdrawal-and-cards',
		},
		{
			name: '적금',
			path: '/product-subscription/installment-savings',
		},
		{
			name: '정기예금',
			path: '/product-subscription/fixed-deposit',
		},
	],
}
