import { PropsWithChildren, useEffect, useState } from 'react';
import { MarvelApiResponse, MarvelCharacter } from '../../../@types/general';
import { CharactersContext } from './Context';
import { buildMarvelAPIUrl } from '../../helpers';

export function CharactersProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState<MarvelCharacter[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [searchParam, setSearchParam] = useState('');
	const [characterDetails, setCharacterDetails] = useState<
		MarvelCharacter | undefined
	>(undefined);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(buildMarvelAPIUrl('characters', currentPage, searchParam))
			.then((response) => response.json())
			.then(({ data }: MarvelApiResponse<MarvelCharacter>) => {
				setData(data.results || []);
				if (!data.total || !data.limit) {
					setCurrentPage(1);
					setTotalPages(1);
				} else {
					const newTotalPages = Math.ceil(data.total / data.limit);
					setTotalPages(newTotalPages);
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
