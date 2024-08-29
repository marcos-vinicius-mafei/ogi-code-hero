import { PropsWithChildren, useEffect, useState } from 'react';
import { MarvelApiResponse, MarvelCharacter } from '../../../@types/general';
import { CharactersContext } from './Context';

export function CharactersProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState<MarvelCharacter[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [characterDetails, setCharacterDetails] =
		useState<MarvelCharacter | null>(null);
	const [isModalVisible, setIsModalVisible] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://gateway.marvel.com/v1/public/characters')
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
	}, []);

	function openModal(character: MarvelCharacter) {
		setCharacterDetails(character);
		setIsModalVisible(true);
	}

	function closeModal() {
		setCharacterDetails(null);
		setIsModalVisible(false);
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
