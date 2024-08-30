import { useEffect } from 'react';

export function useBlockScroll(blockScroll: boolean, delay = 300) {
	useEffect(() => {
		if (blockScroll) {
			document.body.style.overflow = 'hidden';
		} else {
			// Delay to allow transition to finish before allowing scrolling
			setTimeout(() => {
				document.body.style.overflow = 'unset';
			}, delay);
		}
	}, [blockScroll, delay]);
}
