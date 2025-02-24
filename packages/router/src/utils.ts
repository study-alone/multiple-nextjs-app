import * as qs from 'qs'

export const withQueryString = <T>(path: string, options?: { storage: Storage }) => {
	return (query: T) => {
		const stringified = qs.stringify(query, { addQueryPrefix: true })
		return `${path}${stringified}`
	}
}
