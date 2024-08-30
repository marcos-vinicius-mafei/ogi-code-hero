import { createContext, useContext } from 'react';
import { MarvelCharacter } from '../../../@types/general';

interface CharactersContextType {
	charactersList: {
		isLoading: boolean;
		data: MarvelCharacter[];
		updateSearchParam: (search: string) => void;
		pagination: {
			currentPage: number;
			totalPages: number;
			updateCurrentPage: React.Dispatch<React.SetStateAction<number>>;
		};
	};
	detailsModal: {
		characterDetails: MarvelCharacter | null;
		isModalVisible: boolean;
		openModal: (character: MarvelCharacter) => void;
		closeModal: () => void;
	};
}

export const CharactersContext = createContext<CharactersContextType | null>(
	null,
);

export function useCharacters(): CharactersContextType {
	const context = useContext(CharactersContext);
	if (!context) {
		throw new Error('useCharacters must be used inside a CharactersProvider');
	}
	return context;
}
