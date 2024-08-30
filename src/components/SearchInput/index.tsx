import './styles.css';
import SearchIcon from '../../assets/search-icon.svg';
import { useCharacters } from '../../providers';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';

function SearchInput() {
	const {
		charactersList: { updateSearchParam },
	} = useCharacters();

	const [searchVal, setSearchVal] = useState<string | undefined>(undefined);

	const debounceValue = useDebounce(searchVal, 500);

	useEffect(() => {
		if (debounceValue === undefined) return;

		updateSearchParam(debounceValue);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceValue]);

	return (
		<div className="input-container">
			<input
				type="text"
				name="search"
				placeholder="Search"
				className="search-input"
				onChange={(e) => setSearchVal(e.target.value)}
			/>
			<img src={SearchIcon} alt="Magnifying glass icon" />
		</div>
	);
}

export default SearchInput;
