import { useState, useEffect } from 'react';

export function useDebounce<T>(valueToDebounce: T, delay: number) {
	const [debounceValue, setDebounceValue] = useState(valueToDebounce);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(valueToDebounce);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [valueToDebounce, delay]);
	return debounceValue;
}
