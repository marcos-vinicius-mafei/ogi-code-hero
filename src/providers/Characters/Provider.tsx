import { PropsWithChildren, useEffect, useState } from 'react';
import { MarvelApiResponse, MarvelCharacter } from '../../../@types/general';
import { CharactersContext } from './Context';

function buildMarvelAPIUrl(offset: number, searchParam: string): string {
	const url = new URL('https://gateway.marvel.com:443/v1/public/characters');
	const params = new URLSearchParams({
		limit: '10',
		offset: String(offset),
		apikey: import.meta.env.VITE_MARVEL_API_KEY,
	});

	if (searchParam !== '') {
		params.append('nameStartsWith', searchParam);
	}

	url.search = params.toString();

	return url.toString();
}

export function CharactersProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState<MarvelCharacter[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [searchParam, setSearchParam] = useState('');
	const [characterDetails, setCharacterDetails] =
		useState<MarvelCharacter | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const offset = (currentPage - 1) * 10;
		fetch(buildMarvelAPIUrl(offset, searchParam))
			.then((response) => response.json())
			.then(({ data }: MarvelApiResponse) => {
				setData(data.results || []);
				if (!data.total || !data.limit) {
					setCurrentPage(1);
					setTotalPages(1);
				} else {
					const totalPages = data.total / data.limit;
					setTotalPages(Math.ceil(totalPages));
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [currentPage, searchParam]);

	function openModal(character: MarvelCharacter) {
		setCharacterDetails(character);
		setIsModalVisible(true);
	}

	function closeModal() {
		setCharacterDetails(null);
		setIsModalVisible(false);
	}

	function updateSearchParam(search: string) {
		setCurrentPage(1);
		setTotalPages(1);
		setSearchParam(search);
	}

	return (
		<CharactersContext.Provider
			value={{
				charactersList: {
					isLoading,
					data,
					pagination: {
						currentPage,
						totalPages,
						updateCurrentPage: setCurrentPage,
					},
					updateSearchParam,
				},
				detailsModal: {
					characterDetails,
					isModalVisible,
					openModal,
					closeModal,
				},
			}}
		>
			{children}
		</CharactersContext.Provider>
	);
}
