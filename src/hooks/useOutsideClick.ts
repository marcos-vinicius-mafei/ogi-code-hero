import React, { useEffect } from 'react';

export const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement>,
	callback: () => void,
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			console.log('click', event.target);

			if (!ref.current || ref.current.contains(event.target as Node)) {
				console.log('caius aqui');

				return;
			}
			console.log('caius aqui fora');

			callback();
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, callback]);
};
