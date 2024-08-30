import { BASE_URL } from '../api';

export function buildMarvelAPIUrl(
	endpoint: string,
	page: number = 1,
	searchParam?: string,
): string {
	const url = new URL(`${BASE_URL}${endpoint}`);
	const params = new URLSearchParams({
		limit: '10',
		apikey: import.meta.env.VITE_MARVEL_API_KEY,
	});

	if (searchParam) {
		params.append(
			'nameStartsWith',
			searchParam.length >= 3 ? `%${searchParam}%` : searchParam,
		);
	}

	if (page !== undefined) {
		params.append('offset', String((page - 1) * 10));
	}

	url.search = params.toString();

	return url.toString();
}
