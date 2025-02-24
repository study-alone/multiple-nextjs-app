import type { Menu } from '../menu'

export interface InquiryPaths {
	// main
	'/inquiry': {}
	// 전체계좌조회
	'/inquiry/total-account': {}
	// 통합거래내역조회
	'/inquiry/integrate-transaction-history': {}
	// 해지계좌조회
	'/inquiry/closed-account': {}
	// 휴면예금/보험금찾기
	'/inquiry/find-dormant-deposits-or-insurance': {}
	// 수수료납부내역조회
	'/inquiry/fee-payment-history': {}
}

type AllAccountInquery = {
	id?: number
	name?: string
}

export const inquiry: Menu = {
	name: '조회',
	path: '/inquiry',
	children: [
		{
			name: '전체계좌조회',
			path: '/inquiry/total-account',
		},
		{
			name: '통합거래내역조회',
			path: '/inquiry/integrate-transaction-history',
		},
		{
			name: '해지계좌조회',
			path: '/inquiry/closed-account',
		},
		{
			name: '휴면예금/보험금찾기',
			path: '/inquiry/find-dormant-deposits-or-insurance',
		},
		{
			name: '수수료납부내역조회',
			path: '/inquiry/fee-payment-history',
		},
	],
}
